var conf = {
    kafka: {
        brokers: ['b-3.kaliper.b30u2l.c8.kafka.us-west-2.amazonaws.com:9092', 'b-2.kaliper.b30u2l.c8.kafka.us-west-2.amazonaws.com:9092', 'b-1.kaliper.b30u2l.c8.kafka.us-west-2.amazonaws.com:9092'],
        groupId: "dev-kaliper-transformations-*-",
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

const { Kafka } = require("kafkajs");
const kafka = new Kafka({
    clientId: conf.kafka.clientId,
    brokers: conf.kafka.brokers
});
const consumer = kafka.consumer({ groupId: conf.kafka.groupId, sessionTimeout: 30000, heartbeatInterval: 3000 });

start().catch(err => console.error(err));

async function start() {
    await consumer.subscribe({ topic: conf.kafka.forwardingTopic });
    await consumer.run({
        autoCommitThreshold: 1,
        partitionsConsumedConcurrently: conf.kafka.partitions,
        eachMessage: eachMessage,
    });
}


async function eachMessage(resp) {
    console.log(resp.message.value.toString());
}