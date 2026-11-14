# Scaling Delivery Capacity: Architecture, Data Model, and Redis Design

## Executive summary

A fulfillment center can accept only a finite number of orders and total weight for each service date. We built a capacity feature to enforce both limits and find the earliest date that can fulfill a customer’s current cart.

The initial database-backed implementation was correct at modest traffic. At larger scale, delivery-date lookups were repeated throughout the customer app, each lookup could inspect multiple dates, and order placement continuously changed capacity. Database load and response time grew on a customer-facing path.

The design described here moves frequent reads to Redis, makes reservations atomic, and persists changes durably to the database asynchronously. The database remains the durable source of truth; Redis is the fast operational view.

## Goals and non-goals

**Goals**

- Enforce per-day maximum order count and maximum order weight.
- Select the earliest eligible service date for a cart.
- Scope capacity rules by fulfillment center and customer segment.
- Support concurrent orders without overselling capacity.
- Reduce repeated database reads from delivery-date checks.
- Recover Redis state and safely persist updates.

**Non-goals**

- Replacing warehouse routing or dispatch optimization.
- Treating a read-only availability result as a guaranteed reservation.
- Using Redis as the only durable record of accepted orders.

## Domain model and naming

The example uses renamed, illustrative tables and columns. Adapt types and names to the application’s conventions.

CREATE TABLE fulfillment_capacity_rules (
  rule_id BIGINT NOT NULL AUTO_INCREMENT,
  max_daily_weight DECIMAL(18,2) NOT NULL,
  max_daily_orders INT NOT NULL,
  customer_segment_id BIGINT DEFAULT NULL,
  fulfillment_center_id BIGINT NOT NULL,
  is_active TINYINT DEFAULT 1,
  is_archived TINYINT DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(100) DEFAULT NULL,
  updated_by VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (rule_id),
  KEY idx_center (fulfillment_center_id),
  KEY idx_customer_segment (customer_segment_id)
);

CREATE TABLE fulfillment_capacity_by_day (
  daily_capacity_id BIGINT NOT NULL AUTO_INCREMENT,
  service_date DATE NOT NULL,
  capacity_rule_id BIGINT NOT NULL,
  reserved_weight DECIMAL(18,2) NOT NULL,
  reserved_order_count INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (daily_capacity_id),
  UNIQUE KEY uk_service_date_rule (service_date, capacity_rule_id),
  KEY idx_service_date (service_date),
  KEY idx_capacity_rule (capacity_rule_id),
  CONSTRAINT fk_daily_capacity_rule
    FOREIGN KEY (capacity_rule_id)
    REFERENCES fulfillment_capacity_rules (rule_id)
    ON DELETE CASCADE
);

`fulfillment_capacity_rules` defines limits for a fulfillment center and customer segment. `fulfillment_capacity_by_day` stores usage for a specific date and rule. In this document, `reserved_weight` and `reserved_order_count` are usage counters. If the existing database stores remaining capacity instead, keep that convention consistent across all operations.

## Capacity decision

For a candidate date, the order fits only when both constraints remain within their limits:

reservedWeight + requestedWeight <= maxDailyWeight
reservedOrders + 1 <= maxDailyOrders

The date-selection loop starts at the requested or current eligible date and checks dates in ascending order. It returns the first date that satisfies both constraints. The search should have a configured planning horizon so a missing or exhausted schedule cannot cause an unbounded scan.

## System architecture

flowchart LR
    APP[Customer app] --> API[Delivery capacity API]
    API --> CACHE[Redis capacity view]
    API --> RESERVE[Atomic reservation script]
    RESERVE --> CACHE
    RESERVE --> EVENTS[Durable reservation event]
    EVENTS --> WORKER[Persistence worker]
    WORKER --> DB[(Relational database)]
    DB --> REBUILD[Cache rebuild or warm-up]
    REBUILD --> CACHE
    ADMIN[Capacity configuration] --> DB
    ADMIN --> INVALIDATE[Refresh or invalidate cache]
    INVALIDATE --> CACHE

The read path uses Redis for low-latency candidate-date checks. The reservation path must atomically validate and claim capacity. A persistence worker writes durable changes to the relational database. Configuration changes must refresh or invalidate affected cache entries.

## Redis key design

Keys are grouped by the same scope used to resolve capacity: fulfillment center and customer segment. Use an explicit token such as `default` for a rule with no segment; do not rely on an empty key component.

### Daily capacity hash

capacity:day:{centerId}:{segmentId}:{serviceDate}

Example:

HSET capacity:day:42:3:2026-11-15 \
  ruleId 781 \
  maxWeight 5000.00 \
  maxOrders 120 \
  reservedWeight 3475.50 \
  reservedOrders 83 \
  active 1 \
  version 16

`maxWeight` and `maxOrders` come from the active rule. The reserved fields represent current usage. `version` can help identify stale cache values or coordinate updates. Keep numeric representations consistent; for precise decimal weight, use integer units (for example, grams) in Redis scripts to avoid floating-point rounding issues.

### Sorted date index

capacity:dates:{centerId}:{segmentId}

Store service dates as members ordered by a numeric date score, such as epoch-day:

ZADD capacity:dates:42:3 20773 2026-11-15
ZADD capacity:dates:42:3 20774 2026-11-16

The API queries from the requested date forward and checks the corresponding hashes. Keep the index bounded to the booking horizon and ensure hashes and index members are refreshed together.

### Rule cache

capacity:rule:{centerId}:{segmentId}

Example hash fields include `ruleId`, `maxWeight`, `maxOrders`, `active`, and `version`. This avoids a database lookup merely to resolve applicable limits. If rule resolution has fallback precedence (segment-specific, then default), encode that precedence explicitly in the application and cache invalidation logic.

## Read flow: find the earliest available date

sequenceDiagram
    participant C as Customer app
    participant A as Capacity API
    participant R as Redis
    C->>A: Check dates for cart
    A->>R: Resolve rule and fetch candidate dates
    loop Candidate dates in ascending order
        A->>R: Read daily capacity hash
        R-->>A: Limits, usage, active status
        A->>A: Check weight and order-count limits
    end
    A-->>C: Earliest available date (or no date)

A practical lookup procedure is:

1. Resolve the applicable rule for the fulfillment center and customer segment.
2. Read candidate dates from the sorted index, starting at the requested date.
3. Fetch each date’s capacity record, preferably using pipelined reads for a bounded batch.
4. Skip dates that are inactive, missing, or full.
5. Return the first date satisfying both limits, or a clear no-capacity result when the horizon is exhausted.

This is an availability estimate, not a promise. Capacity may be consumed before the customer submits the order; checkout must reserve it again atomically.

## Write flow: atomic reservation

A reservation validates and increments both usage counters as one indivisible operation. A Redis Lua script can perform this check-and-update against the daily hash. If the date is full, the application tries the next candidate date.

Conceptually:

if active
   and reservedWeight + requestedWeight <= maxWeight
   and reservedOrders + 1 <= maxOrders then
    reservedWeight = reservedWeight + requestedWeight
    reservedOrders = reservedOrders + 1
    return RESERVED
else
    return FULL
end

Do not implement this as separate `GET`/check and `INCR` operations. Two concurrent requests can both observe the same remaining capacity and overbook the date. Use integer weight units in the script where possible; define explicit overflow and input validation behavior.

sequenceDiagram
    participant O as Order service
    participant R as Redis
    participant Q as Durable event log
    participant W as Persistence worker
    participant D as Database
    O->>R: Atomic reserve(date, weight, idempotency key)
    alt Capacity available
        R->>R: Validate both limits and increment usage
        R->>Q: Record reservation event atomically
        R-->>O: RESERVED
        Q-->>W: Deliver event
        W->>D: Apply event idempotently
        D-->>W: Commit
    else Capacity full
        R-->>O: FULL
        O->>R: Try next candidate date
    end

The durable event must not be a best-effort side effect after a successful Redis update. Use a mechanism that safely couples the capacity mutation and event recording (for example, a Redis Stream entry written inside the same Lua operation, with appropriate Redis durability settings). If Redis persistence and database persistence cannot be made transactionally atomic, define reconciliation and recovery behavior for partial failures.

## Cancellation, rescheduling, and idempotency

A cancellation releases the reservation by decrementing the weight and order count for the original date. A reschedule releases the old date and reserves the new date. These transitions need their own concurrency and failure handling:

- Associate each reservation with an order ID and a unique event ID.
- Make reserve, release, and reschedule operations idempotent.
- Reject duplicate events rather than applying counters twice.
- Prevent counters from becoming negative.
- Define behavior when the new date cannot be reserved; do not release the old reservation until the reschedule policy is clear.
- Keep an audit trail sufficient to reconcile Redis counters with accepted orders.

For multi-date or multi-key operations, consider the atomicity boundary carefully. Redis scripts are atomic on Redis, but a script cannot by itself provide a distributed transaction with the relational database.

## Persistence and recovery

Redis serves the fast operational view; the database remains the durable source of truth in this design. A worker consumes reservation events and persists them idempotently. It should retry transient database failures, track processed event IDs, and expose queue age and failure metrics.

A recovery process should be able to rebuild the Redis view from durable database records. A typical sequence is:

1. Load active capacity rules and daily usage for the configured booking horizon.
2. Populate rule hashes, daily hashes, and date indexes.
3. Validate counts and weights against durable order/reservation records.
4. Resume or replay pending events without double-applying them.
5. Route traffic to the rebuilt cache once it passes consistency checks.

Configuration updates also require a defined cache policy: update relevant keys, invalidate them and repopulate, or version the rules so readers can detect stale data. Set TTLs only when their expiry behavior is safe; an expired capacity hash should not silently mean unlimited capacity.

## Operational considerations

**Observability:** Track lookup latency, dates scanned per lookup, Redis hit/miss rates, reservation success/full rates, script errors, persistence lag, retries, and cache rebuild duration.

**Capacity semantics:** Define whether an order counts at reservation, confirmation, or dispatch. Apply the same lifecycle consistently to cancellations and failed payments.

**Precision:** Use a fixed unit such as grams for weight counters and convert at the boundary. Avoid floating-point arithmetic in atomic capacity checks.

**Missing data:** Treat a missing or malformed capacity hash as an explicit cache miss or unavailable state. Do not interpret missing limits as unlimited capacity.

**Date and timezone handling:** Use the fulfillment center’s business timezone to determine service dates. Store and compare normalized date values; a UTC timestamp near midnight must not shift an order into the wrong local service day.

**Scaling the lookup:** Bound the planning horizon and batch reads where appropriate. Redis reduces database load, but scanning a large number of dates for every request can still be wasteful. Consider precomputing candidate dates or maintaining an index of dates with possible capacity if measurements show date scans remain expensive.

## Trade-offs

Redis improves read latency and absorbs frequent availability checks, but it adds operational complexity. The system must handle cache freshness, concurrency, event durability, retries, recovery, and reconciliation. The performance benefit is worthwhile when date lookup traffic is high, provided the consistency model is explicit and tested.

## Rollout and validation

A safe rollout can compare Redis decisions with the existing database calculation before Redis becomes authoritative for reads. Measure disagreement rates, verify cache rebuilds, and test concurrent reservations at the daily limits. Include tests for the final available order, weight exactly at the limit, simultaneous requests, cancellation, rescheduling, duplicate event delivery, worker downtime, Redis restart, and configuration changes.

## Conclusion

The original feature solved a real operational problem: matching customer delivery promises to warehouse capacity. At scale, repeated database-backed scans made that calculation too expensive for a high-traffic app path.

Redis provides a fast lookup view, while atomic reservations protect capacity under concurrency. Durable events, idempotent persistence, and a tested rebuild path keep the speed improvement from compromising correctness. The central design principle is simple: availability checks can be cached, but accepting an order must be an atomic, recoverable reservation.