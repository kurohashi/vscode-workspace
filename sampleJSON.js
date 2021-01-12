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
                            "$addToSet": "$userId"
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
                        "_id": "$browser",
                        "users": {
                            "$addToSet": "$userId"
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
                }
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
                            "$addToSet": "$userId"
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
                }
            ]
        }
    }
]


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
                            "$addToSet": "$userId"
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
                            "$addToSet": "$userId"
                        }
                    }
                }
            ]
        }
    },
    {$project:{stage0:{$arrayElemAt:["$stage0",0]},stage1:{$arrayElemAt:["$stage1",0]}}},
    {$project:{users:{$setDifference:["$stage0.users","$stage1.users"]}}}
]