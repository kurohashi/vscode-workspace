let async = require("async");
let moment = require('moment-timezone');
let request = require("request");
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require("mongodb").ObjectId;
// var conf = require("../../utils/conf");

start();

function start() {
    async.waterfall([
        passOn({}),
        setDb,
        getGroups,
        runCron,
    ], function (err, result) {
        if (err)
            console.error(err);
        console.log(result, "done");
        process.exit(0);
    });
}

function passOn(obj) {
    return function (next) {
        next(null, obj);
    };
}

/**
 * Function to establish db connection
 * @param {*} obj 
 * @param {*} next 
 */
function setDb(obj, next) {
    const server = 'localhost:27017';
    const database = 'analysis';
    const reconn = { useNewUrlParser: true };
    MongoClient.connect(`mongodb://${server}/${database}`, reconn, function (err, d) {
        if (err)
            return next(err);
        obj.db = d.db();
        return next(null, obj);
    });
}

/**
 * Get all the gids to be run the cron on
 * @param {*} obj 
 * @param {*} next 
 */
function getGroups(obj, next) {
    obj.gids = ["b46654bda14d03cfa39562de623c89"];
    return next(null, obj);
    request({
        url: conf.apis.groups,
        method: "GET",
    }, function (err, resp, body) {
        if (err)
            return console.error(err);
        try {
            body = JSON.parse(body);
        } catch (error) { }
        if (!body.data.length)
            return next("no group");
        let gids = [];
        body.data.forEach(group => {
            if (group.name != "meta")
                gids.push(group.name);
        });
        console.log(JSON.stringify(gids));
        obj.gids = gids;
        next(null, obj);
    });
}

/**
 * Run the operation on all gids one by one
 * @param {*} obj 
 * @param {*} next 
 * @returns 
 */
function runCron(obj, next) {
    if (isNaN(obj.i))
        obj.i = -1;
    obj.i++;
    if (obj.i >= obj.gids.length)
        return next();
    obj.gid = obj.gids[obj.i];
    console.log(obj.gid, obj.i)
    async.waterfall([
        passOn(obj),
        getSessions,
        getEvents,
        modifyEvents,
        updateEvents,
        updateSessions,
    ], function (err, result) {
        if (err)
            console.error(err);
        runCron(obj, next);
    });
}

/**
 * Get all the sessions 2 hrs before and till only 7 days back
 * @param {*} obj 
 * @param {*} next 
 */
function getSessions(obj, next) {
    let query = {
        docType: "sessInfo",
        firstTs: {
            $lte: moment().subtract(2, 'hours').toDate(),
            $gte: moment().subtract(70, 'days').startOf('day').toDate(),
        },
        // "status.nextEvent": { $exists: 0 },
    };
    console.log(query);
    obj.db.collection(obj.gid).find(query, { id: 1, events: 1 }).toArray(function (err, data) {
        if (err)
            return next(err);
        if (!data.length)
            return next("no sessions");
        console.log(`found ${data.length} sessions`);
        let sess = [];
        data.forEach(session => {
            sess.push(session.id);
        });
        obj.sessions = data;
        obj.sess = sess;
        next(null, obj);
    });
}

/**
 * Get all the events satisfying the sessions we got from above
 * @param {*} obj 
 * @param {*} next 
 */
function getEvents(obj, next) {
    let query = [
        {
            $match: {
                docType: "events",
                "events.sess": { $in: obj.sess },
                "events.event": { $nin: ['API_event', 'page_close'] },
                $or: [{
                    "events.custom.reason": { $exists: 0 }
                }, {
                    "events.event": "page_open", "events.custom.reason": { $ne: "focus" }
                }],
                "events.next": { $exists: 1 }
            }
        },
        { $unwind: "$events" },
        { $sort: { ts: 1 } },
        { $group: { _id: "$events.sess" , events: { $push: "$$ROOT" } } }
    ];
    obj.db.collection(obj.gid).aggregate(query, { cursor: { batchSize: 10000 }, allowDiskUse: true }).toArray((err, data) => {
        if (err || !data.length)
            return next(err || "no events");
        obj.events = data;
        next(null, obj);
    });
}

/**
 * Store next event's info in the events.
 * @param {*} obj 
 * @param {*} next 
 */
function modifyEvents(obj, next) {
    let events = [];
    obj.events.forEach(session => {
        for (let i = 0; i < session.events.length - 1; i++) {
            let currObj = session.events[i];
            let event = currObj.events;
            delete event.next;
            delete event.prev;
            let newEv = JSON.parse(JSON.stringify(currObj));
            newEv.events = [newEv.events];
            events.push(newEv);
        }
    });
    obj.events = events;
    next(null, obj);
}

/**
 * Write the events to db
 * @param {*} obj 
 * @param {*} next 
 */
function updateEvents(obj, next) {
    if (isNaN(obj.eventIndex))
        obj.eventIndex = -1;
    obj.eventIndex++;
    if (obj.eventIndex >= obj.events.length) {
        delete obj.eventIndex;
        return next(null, obj);
    }
    let document = obj.events[obj.eventIndex];
    runUpdate(obj, document, function (err, result) {
        if (err) {
            delete obj.eventIndex;
            return next(err);
        }
        console.log(result.result);
        updateEvents(obj, next);
    });
}

/**
 * 
 * @param {*} obj 
 * @param {*} next 
 */
function updateSessions(obj, next) {
    if (isNaN(obj.sessionIndex))
        obj.sessionIndex = -1;
    obj.sessionIndex++;
    if (obj.sessionIndex >= obj.sessions.length) {
        delete obj.sessionIndex;
        return next(null, obj);
    }
    let document = obj.sessions[obj.sessionIndex];
    document["status.nextEvent"] = true;
    runUpdate(obj, document, function (err, result) {
        if (err) {
            delete obj.sessionIndex;
            return next(err);
        }
        updateEvents(obj, next);
    });
}

/**
 * Write one obj to db
 * @param {*} obj 
 * @param {*} document 
 * @param {*} cb 
 * @returns 
 */
function runUpdate(obj, document, cb) {
    let id = document._id;
    delete document._id;
    obj.db.collection(obj.gid).replaceOne({ _id: ObjectId(id) }, document, {}, cb);
}