# The Day Our Inventory Sync Ran Out of Prepared Statements

### How scaling an IMS → OMS sync took us from Sequelize to Stored Procedures to plain SQL, and what `max_prepared_stmt_count` taught us along the way

---

Some bugs show up as a stack trace pointing at line 42. Others turn up as a vague feeling that "the database is flaky today." This post is about the second kind.

We run an **Inventory Management System (IMS)** that owns stock levels and an **Order Management System (OMS)** that needs those stock levels to be accurate so it never sells what we don't have. Keeping the two in sync sounds simple. It was, until we grew.

This is the story of three versions of that sync, the MySQL error that pushed us from one to the next, and why we ended up doing something most of us were taught never to do: building SQL strings by hand.

---

## 1. The Initial Approach: Sequelize All the Way

Our backend is Node.js, and like a lot of Node teams we used **Sequelize** as our ORM. It's productive and readable, and it keeps raw SQL out of business logic.

### The sync strategy

We combined two triggers:

1. **Full sync every 10 minutes.** A scheduled job walks every active product for every company and pushes current stock to the OMS. This is the safety net that catches anything the event-driven path misses.
2. **Event-driven sync on document actions.** Whenever a document changes stock, we sync the affected items right away:
   - Sales Orders
   - Invoices
   - Credit Notes (CN)
   - Purchase Orders (PO)
   - Bills / Goods Received Notes (GRN)
   - Stock adjustments and transfers

The event path keeps the OMS fresh within seconds, and the 10-minute sweep keeps it honest.

### Data flow

flowchart LR
    subgraph Triggers
        T1[Cron: every 10 minFull Sync]
        T2[Document EventsOrder / Invoice / CNPO / Bill / GRN]
    end

    T1 --> S[Inventory Sync ServiceNode.js]
    T2 --> S
    S -->|Sequelize ORM queries| DB[(MySQLIMS Database)]
    DB -->|stock rows| S
    S -->|stock update API| OMS[Order Management System]

### The query

The heart of the sync looked roughly like this:

// Example of a Sequelize query that might contribute to the issue
const inventoryItems = await Item.findAll({
  where: {
    companyId: companyId, // Variable
    isActive: true        // Variable
  },
  attributes: ['id', 'stockCount']
});

// ... further processing and update to OMS
for (const item of inventoryItems) {
  await StockSnapshot.update(
    { stockCount: item.stockCount, syncedAt: new Date() },
    { where: { itemId: item.id } }
  );
}
await omsClient.pushStock(companyId, inventoryItems);

Clean and idiomatic, the kind of code that passes review without a second look. For a long time it worked perfectly.

---

## 2. The Problem: When Growth Becomes an Outage

Then the business grew. More companies, more products per company, more orders per hour. The full sync touched far more rows, and the event-driven sync fired far more often. All of these services shared the same MySQL server.

One day, database calls started failing. They didn't fail everywhere or all the time. They failed **intermittently, across services** that had nothing to do with inventory: order creation, reporting, user login.

The error was always the same:

Error: Can't create more than max_prepared_stmt_count statements
(current value: 16382)

### What is `max_prepared_stmt_count`?

A **prepared statement** is a query the database parses and plans once, then executes many times with different values:

-- Prepare once
SELECT id, stockCount FROM Items WHERE companyId = ? AND isActive = ?;
-- Execute many times with (123, 1), (456, 1), (789, 1)...

Each prepared statement takes up server memory until it is closed. To stop a misbehaving client from exhausting that memory, MySQL caps the total number of open prepared statements **across all connections on the server**. That cap is `max_prepared_stmt_count`, and it defaults to **16,382**.

When the cap is reached, *any* connection that tries to prepare a new statement fails. That explained the "random" failures: the inventory sync was filling a shared bucket, and whichever service tried to add to it next got the error.

You can watch it happen:

SHOW GLOBAL VARIABLES LIKE 'max_prepared_stmt_count';
SHOW GLOBAL STATUS    LIKE 'Prepared_stmt_count';  -- currently open statements

### The frustrating part

The error didn't go away on its own. Restarting services helped briefly, since closing connections releases their statements, but the count climbed straight back after the next few sync cycles. We lived with the problem for a while, which is never a good place to be, before we understood it.

---

## 3. First Optimization: Moving to Stored Procedures

Our first hypothesis was reasonable: **the ORM is generating too many distinct queries.**

Sequelize builds SQL dynamically. Different `where` combinations, different attribute lists and different `IN (...)` lengths all produce slightly different SQL text, and each distinct text can become its own prepared statement. If we moved the logic into a **stored procedure**, the application would send one small, consistent call instead of dozens of generated queries.

### The procedure

Since the error is MySQL-specific, here it is in MySQL syntax:

-- Example of a Stored Procedure (MySQL syntax)
DELIMITER $$

CREATE PROCEDURE SyncInventory(IN p_companyId INT)
BEGIN
    SELECT id, stockCount
    FROM Items
    WHERE companyId = p_companyId
      AND isActive = 1;

    -- ... logic to stage results for the OMS
    UPDATE StockSnapshots s
    JOIN Items i ON i.id = s.itemId
    SET s.stockCount = i.stockCount,
        s.syncedAt   = NOW()
    WHERE i.companyId = p_companyId
      AND i.isActive = 1;
END $$

DELIMITER ;

And from Node:

const [rows] = await sequelize.query('CALL SyncInventory(:companyId)', {
  replacements: { companyId }
});
await omsClient.pushStock(companyId, rows);

### The outcome

**The error dropped noticeably, but it didn't go away.** We were sending fewer distinct statements, so the counter grew more slowly, but it still grew. During peak hours, with heavy order volume and the 10-minute sweep overlapping, we still hit the ceiling.

That partial win was the clue. If cutting the number of *distinct queries* only helped partly, then the number of distinct queries wasn't the root cause. Something about *how* the queries were sent was still creating prepared statements.

---

## 4. Root Cause Analysis: It Was the Variables All Along

Here's what was really going on.

### Two ways to talk to MySQL

MySQL clients can send a query in one of two ways:

| | **Text protocol** (`query`) | **Binary protocol** (`execute`) |
|---|---|---|
| What's sent | One complete SQL string | SQL with `?` placeholders, values sent separately |
| Server-side prepared statement? | **No** | **Yes**, one per distinct SQL text, per connection |
| Counts toward `max_prepared_stmt_count`? | No | Yes, until the statement is closed |
| Injection protection | Only if you escape values | Built in |

The `mysql2` driver that Sequelize uses switches to the **binary (prepared) protocol whenever bound parameters are passed separately from the SQL**. It also **caches those prepared statements per connection** so it can reuse them, which means they stay open on the server.

Now do the maths for a busy system:

- Each pooled connection holds its own set of cached statements.
- Each distinct SQL shape (different columns, different `IN` list sizes, different `WHERE` combinations) is a separate statement.
- Many services × many pool connections × many query shapes can blow past **16,382** quickly.

Sequelize's generated `INSERT`/`UPDATE` statements use bind parameters, so our per-item update loop was minting prepared statements on every connection it ran on. Calling the stored procedure with a parameter still went through the prepared path, just with fewer distinct shapes. That's why the error **shrank but didn't disappear**.

**The real problem wasn't the ORM or the procedure. It was sending values as bound variables, which forced MySQL to prepare statements that our connection pools kept open.**

### The final solution: direct text SQL

We rewrote the hot path of the inventory sync to send **complete SQL strings over the text protocol**, with no bound parameters. The values go into the string itself, so the driver uses a plain `query`, the server never prepares a statement, and the counter never moves.

// Example of a direct SQL query
const companyId = 123; // Assume this is safely obtained/validated

// Strict validation: companyId must be a positive integer
if (!Number.isInteger(companyId) || companyId <= 0) {
  throw new Error(`Invalid companyId: ${companyId}`);
}

const query = `
  SELECT id, stockCount
  FROM Items
  WHERE companyId = ${companyId}
    AND isActive = 1
`;

// No replacements / bind => text protocol, no prepared statement
const inventoryItems = await sequelize.query(query, {
  type: QueryTypes.SELECT
});

// Set-based update instead of a per-item loop
await sequelize.query(`
  UPDATE StockSnapshots s
  JOIN Items i ON i.id = s.itemId
  SET s.stockCount = i.stockCount, s.syncedAt = NOW()
  WHERE i.companyId = ${companyId} AND i.isActive = 1
`);

await omsClient.pushStock(companyId, inventoryItems);

After this deploy, `Prepared_stmt_count` flattened out and stayed flat, and the intermittent cross-service failures stopped.

### The elephant in the room: SQL injection

**SQL injection** happens when user-controlled input ends up inside a SQL string and changes its meaning. The classic example:

const name = "x'; DROP TABLE Items; --";
const sql = `SELECT * FROM Items WHERE name = '${name}'`;
// => SELECT * FROM Items WHERE name = 'x'; DROP TABLE Items; --'

Prepared statements are the standard defence because the values never become part of the SQL text. By moving away from them, we gave up that built-in protection. We didn't take this lightly.

### Why the risk was acceptable *here*

We accepted it because of what this particular process is:

- **No front-end involvement.** The sync runs from a scheduler and from internal document events. No HTTP request, form field or query string ever reaches these queries.
- **Only internal, typed identifiers.** The only values interpolated are numeric IDs (`companyId`, `itemId`) that come from our own database rows.
- **Strict backend validation.** Every interpolated value is checked with `Number.isInteger` (or mapped against a fixed allow-list) before it touches a string. Anything else throws.
- **A narrow surface.** Only the inventory sync module uses this pattern. Everywhere user input can reach the database, we still use parameterised queries.

In short, the attacker would need to already control our internal database or event bus, and at that point SQL injection is the least of our problems.

### A bonus: it got faster

Prepared statements pay off when you run the *same* statement many times on the *same* connection. Our workload was the opposite: lots of short-lived, varied queries spread across a pool. That meant every prepared query cost a `PREPARE` round trip plus an `EXECUTE` round trip, plus cache bookkeeping on the client.

Text queries take **one round trip**. Combined with replacing the per-item update loop with a single set-based `UPDATE ... JOIN`, the full sync ran noticeably faster and put far less load on the database.

---

## 5. System Architecture Evolution

Here are all three stages side by side:

flowchart TB
    subgraph S1[Stage 1: Sequelize ORM]
        direction LR
        A1[IMSSync Service] -->|Model.findAll / updatebound params| B1[Sequelize ORMmysql2 execute]
        B1 -->|binary protocolmany distinct prepared stmts| C1[(MySQL)]
        C1 -->|stock rows| D1[OMS]
        C1 -.->|Prepared_stmt_count climbsto 16,382 limit| X1[[Errors acrossall services]]
    end

    subgraph S2[Stage 2: Stored Procedure]
        direction LR
        A2[IMSSync Service] -->|CALL SyncInventory with param| B2[Stored ProcedureSyncInventory]
        B2 -->|fewer statement shapesstill prepared| C2[(MySQL)]
        C2 -->|stock rows| D2[OMS]
        C2 -.->|count grows slowererrors at peak| X2[[Reduced butnot eliminated]]
    end

    subgraph S3[Stage 3: Direct SQL Query]
        direction LR
        A3[IMSSync Service] -->|validated integer IDs| V3[Backend Validation]
        V3 -->|complete SQL string| B3[Direct SQLtext protocol]
        B3 -->|no prepared stmtssingle round trip| C3[(MySQL)]
        C3 -->|stock rows| D3[OMS]
        C3 -.->|Prepared_stmt_count flat| X3[[Stable and faster]]
    end

    S1 ==>|Hypothesis: too many ORM queries| S2
    S2 ==>|Root cause: bound variables| S3

Across all three stages, the **triggers** stayed the same: the 10-minute full sync and document events (Order, Invoice, CN, PO, Bill, GRN). Only the mechanism between the IMS and the database changed.

---

## 6. Key Takeaways

**1. Know what your ORM sends over the wire.** An ORM hides SQL, and it also hides the *protocol*. Whether your driver uses text queries or server-side prepared statements, and whether it caches them, is a real operational detail. Turn on query logging and read it at least once.

**2. Prepared statements are a shared, finite resource.** `max_prepared_stmt_count` is server-wide. One noisy service can take down unrelated ones. If your services share a database, watch `Prepared_stmt_count` the same way you watch connections and CPU.

**3. When a fix only partly works, your hypothesis is incomplete.** The stored procedure helped, and that partial success was the best clue we had. It told us we were treating a symptom.

**4. Prepared statements aren't automatically faster.** They win for repeated execution on a long-lived connection. For varied, one-off queries across a pool, they can add round trips and server memory without much benefit.

**5. Think set-based.** Replacing a per-row update loop with one `UPDATE ... JOIN` cut both statement count and runtime. Often the best query is the one you don't send.

**6. Security trade-offs should be deliberate, documented and narrow.** We gave up parameterisation in one controlled module, for validated integer IDs only, with no path from user input. That's a decision you can defend. Doing the same thing in a public API endpoint isn't.

### When to consider direct SQL despite the risk

Consider it only when **all** of these are true:

- The query runs in a **backend-only** context (cron jobs, internal workers, event consumers) with no user-supplied input.
- Interpolated values are **strictly typed** (integers, enums from an allow-list) and validated right before use.
- You have a **measured** problem, such as prepared statement exhaustion or round-trip latency, that parameterised queries are causing.
- The pattern is **isolated** to a clearly marked module, and code review knows to scrutinise it.

And before you commit, look at the middle ground:

- **Client-side escaping** with `sequelize.escape()` or `mysql2`'s `format()` keeps the text protocol (no server-side prepared statements) while still escaping values safely.
- **Driver tuning.** `mysql2` lets you cap its per-connection statement cache, and smaller connection pools mean fewer cached statements overall.
- **Raising `max_prepared_stmt_count`** buys headroom. It doesn't fix a leak, but it can keep you running while you find one.

---

Scaling problems rarely come from the code you're worried about. Ours came from a few clean, idiomatic lines of ORM code and one MySQL counter we'd never heard of. The fix took a few lines of SQL. Finding it took learning what our tools were doing underneath.

*If you've run into `max_prepared_stmt_count` in production, I'd love to hear how you handled it in the comments.*