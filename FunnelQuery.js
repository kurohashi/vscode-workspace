// General funnel query
[
    {
        "$match": {
            "docType": "sessInfo",
            "firstTs": {
                "$gte": ISODate("2020-10-29T18:30:00.000Z"),
                "$lt": ISODate("2021-01-06T18:29:59.999Z")
            },
            "events.event": "session_start"
        }
    },
    {
        "$facet": {
            "stage0": [
                {
                    "$match": {
                        "events.event": "session_start"
                    }
                },
                {
                    "$group": {
                        "_id": "$browser",
                        "users": {
                            "$addToSet": { $ifNull: ["$userId", "$uid"] }
                        },
                    }
                },
                {
                    "$project": {
                        "_id": 1,
                        "users": {
                            "$size": "$users"
                        }
                    }
                },
                { $sort: { users: -1 } }
            ],
            "stage1": [
                {
                    "$match": {
                        "$and": [
                            {
                                "events.event": "session_start"
                            },
                            {
                                "events.event": "click_event"
                            }
                        ]
                    }
                },
                {
                    "$group": {
                        "_id": "$browser",
                        "users": {
                            "$addToSet": { $ifNull: ["$userId", "$uid"] }
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 1,
                        "users": {
                            "$size": "$users"
                        }
                    }
                },
                { $sort: { users: -1 } }
            ],
            "stage2": [
                {
                    "$match": {
                        "$and": [
                            {
                                "events.event": "session_start"
                            },
                            {
                                "events.event": "click_event"
                            },
                            {
                                "events.event": "login"
                            }
                        ]
                    }
                },
                {
                    "$group": {
                        "_id": "$browser",
                        "users": {
                            "$addToSet": { $ifNull: ["$userId", "$uid"] }
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 1,
                        "users": {
                            "$size": "$users"
                        }
                    }
                },
                { $sort: { users: -1 } }
            ]
        }
    }
]

// Stage users query
[
    {
        "$match": {
            "docType": "sessInfo",
            "firstTs": {
                "$gte": ISODate("2020-09-22T18:30:00.000Z"),
                "$lt": ISODate("2021-09-30T18:29:59.999Z")
            },
            "$and": [
                {
                    "events.event": "session_start"
                },
                {
                    "events.event": "click_event"
                }
            ]
        }
    },
    {
        "$group": {
            "_id": null,
            "users": {
                "$addToSet": { $ifNull: ["$userId", "$uid"] }
            }
        }
    }
]

// Dropped Users query
[
    {
        "$match": {
            "docType": "sessInfo",
            "firstTs": {
                "$gte": ISODate("2020-09-22T18:30:00.000Z"),
                "$lt": ISODate("2021-09-30T18:29:59.999Z")
            },
            "events.event": "session_start"
        }
    },
    {
        "$facet": {
            "stage0": [
                {
                    "$group": {
                        "_id": null,
                        "users": {
                            "$addToSet": { $ifNull: ["$userId", "$uid"] }
                        }
                    }
                }
            ],
            "stage1": [
                {
                    "$match": {
                        "$and": [
                            {
                                "events.event": "session_start"
                            },
                            {
                                "events.event": "click_event"
                            }
                        ]
                    }
                },
                {
                    "$group": {
                        "_id": null,
                        "users": {
                            "$addToSet": { $ifNull: ["$userId", "$uid"] }
                        }
                    }
                }
            ]
        }
    },
    { $project: { stage0: { $arrayElemAt: ["$stage0", 0] }, stage1: { $arrayElemAt: ["$stage1", 0] } } },
    { $project: { users: { $setDifference: ["$stage0.users", "$stage1.users"] } } }
]