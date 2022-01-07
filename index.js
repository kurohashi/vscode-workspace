const request = require("request");
const moment = require("moment-timezone");

let names = {
    A: "Session",
    B: "Page"
};

let json = {
    "time": {
        "unit": "d",
        "group": true,
        "days": 7,
        "gt": 1640802600000.0,
        "lt": 1641493799999.0,
        "tz": "Asia/Calcutta"
    },
    "type": "trends",
    "eventOps": [
        {
            "label": "session start",
            "dataType": "count",
            "operator": "$and",
            "value": [
                {
                    "key": "event",
                    "operator": "$in",
                    "type": "sys",
                    "value": [
                        "login"
                    ],
                    "col": 0,
                    "index": 0,
                    "sysLabel": "event is login ",
                    "userLabel": ""
                }
            ]
        },
        {
            "label": "login",
            "dataType": "users",
            "operator": "$and",
            "value": [
                {
                    "key": "event",
                    "operator": "$in",
                    "type": "sys",
                    "value": [
                        "page_open"
                    ],
                    "col": 1,
                    "index": 0,
                    "sysLabel": "event is page_open ",
                    "userLabel": ""
                },
                {
                    "operator": "$or",
                    "value": [
                        {
                            "operator": "$and",
                            "value": [
                                {
                                    "key": "page#path",
                                    "operator": "contains",
                                    "type": "page",
                                    "value": "analytics",
                                    "col": 1,
                                    "index": 1,
                                    "where": "and",
                                    "sysLabel": "path contains analytics ",
                                    "userLabel": ""
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "group": [
        "browser",
        "event"
    ]
};
request({
    url: "http://apis.unireply.com/events/v1/trends?gid=b46654bda14d03cfa39562de623c89",
    method: "POST",
    json: json,
}, function (err, resp, body) {
    try {
        body = JSON.parse(body);
    } catch (error) {}
    let result = { data: [], labels: [] };
    let data = body.data;
    for (let i in data) {
        createSeriesPoint(`${i}-${names[i]}`, data[i], result);
    }
    console.log(JSON.stringify(result));
});

function createSeriesPoint(key, data, result) {
    for (let i in data) {
        if (typeof data[i] !== "object") {
            let keys = Object.keys(data);
            let values = Object.values(data);
            keys.forEach((val, i) => {
                keys[i] = moment(val).format("DD/MM/YYYY")
            });
            result.data.push({
                data: values,
                display: key,
                label: key,
                val: key
            });
            result.labels = keys;
            return;
        }
        createSeriesPoint(`${key}-${i}`, data[i], result);
    }
}