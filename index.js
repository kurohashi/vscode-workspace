let async = require("async");
var moment = require('moment-timezone');
var MongoClient = require('mongodb').MongoClient;

start();

function start() {
    async.waterfall([
        passOn({ gid: process.argv[2] }),
        setDb,
        getEvents,
        modifyEvents,
        updateEvents,
    ], function (err, result) {
        if (err)
            return console.error(err);
        console.log(result);
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
    const reconn = { reconnectTries: 100, reconnectInterval: 10000, useNewUrlParser: true };
    MongoClient.connect(`mongodb://${server}/${database}`, reconn, function (err, d) {
        if (err)
            return next(err);
        obj.db = d.db();
        return next(null, obj);
    });
}

function getEvents(obj, next) {
    try {
        obj.db.collection(obj.gid)
        .find({ docType: "events", ts: { $gt: moment().subtract(30, 'day').toDate() } })
        .toArray(function (err, data) {
            if (err || !data.length)
                return next(err || "no events");
            console.log(`found ${data.length} events`);
            obj.events = data;
            next(null, obj);
        });
    } catch (error) {
        next(error);
    }
}

function modifyEvents(obj, next) {
    let prevEvent = null;
    for (let i = 0; i < obj.events.length; i++) {
        let event = obj.events[i].events[0];
        if (['API_event', 'page_close', 'session_start'].includes(event.event) || (event.event == "page_open" && event.custom.reason == "focus"))
            continue;
        if (prevEvent) {
            event.prev = {
                event: prevEvent.event,
                val: prevEvent.val,
                custom: prevEvent.custom,
            };
        }
        prevEvent = event;
    }
    next(null, obj);
}

function updateEvents(obj, next) {
    runUpdate(obj, 0, next);
}

function runUpdate(obj, i, cb) {
    if (i >= obj.events.length)
        return cb(null, "done");
    let event = obj.events[i];
    let id = event._id;
    delete event._id;
    delete event.id;
    delete event.docType;
    obj.db.collection(obj.gid)
    .updateOne({ _id: id }, { $set: event }, {}, function (err, data) {
        if (err)
            return cb(err);
        runUpdate(obj, ++i, cb);
    });
}