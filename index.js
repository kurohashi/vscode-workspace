var conf = {
    kafka: {
        brokers: ['b-3.kaliper.b30u2l.c8.kafka.us-west-2.amazonaws.com:9092', 'b-2.kaliper.b30u2l.c8.kafka.us-west-2.amazonaws.com:9092', 'b-1.kaliper.b30u2l.c8.kafka.us-west-2.amazonaws.com:9092'],
        groupId: "kaliper-transformations",
        clientId: "kaliper",
        topic: (key => `kaliper-${key}`),
        forwardingTopic: `kaliper-forwards`,
        partitions: 10,
        getGid: (topic => topic.replace("kaliper-", "")),
        failureRetrials: {
            setOffset: 5
        },
    },
};

const request = require("request");
const { Kafka } = require("kafkajs");
const kafka = new Kafka({
    clientId: conf.kafka.clientId,
    brokers: conf.kafka.brokers
});
const consumer = kafka.consumer({ groupId: conf.kafka.groupId, sessionTimeout: 30000, heartbeatInterval: 3000 });
const producer = kafka.producer({});

start().catch(err => console.error(err));

async function start() {
    await producer.connect();
    await consumer.subscribe({ topic: conf.kafka.forwardingTopic });
    await consumer.run({
        autoCommitThreshold: 1,
        partitionsConsumedConcurrently: conf.kafka.partitions,
        eachMessage: eachMessage,
    });
}


async function eachMessage(resp) {
    let message = resp.message.value.toString();
    let data = JSON.parse(message);
    if (!data.destination)
        return;
    if (isNaN(data.count))
        data.count = 0;
    if (data.count >= 3)
        return;
    try {
        await handleDestinations(data);
    } catch (error) {
        console.error(error);
        data.count++;
        await producer.send({
            topic: conf.kafka.forwardingTopic,
            messages: [{ value: JSON.stringify(data) }],
        });
        return true;
    }
}

/**
 * Router for destination functions
 * @param {*} data 
 */
async function handleDestinations(data) {
    data.destination.name = data.destination.name.toLowerCase();
    switch (data.destination.name) {
        case "ga4":
            return handleGA4Destination(data);
    }
}

/**
 * Send events to GA4 using measurement protocol
 * @param {*} data 
 */
async function handleGA4Destination(data) {
    if (!data.destination.api)
        return;
    let apiConf = data.destination.api;
    let event = data.event;
    apiConf.json = {
        client_id: "testApi",
        user_id: event.userId,
        "non_personalized_ads": true,
        events: [{
            name: event.name,
            params: event.params,
        }],
    };
    if (event.geography)
        Object.assign(apiConf.json.events[0].params, event.geography);
    await new Promise(function (resolve, reject) {
        request(apiConf, function (err, resp, body) {
            if (err)
                return reject(err);
            console.log("GA4 response", resp.statusCode);
            resolve();
        });
    });
}