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
    console.log(message);
    let data = JSON.parse(message);
    if (isNaN(data.count))
        data.count = 0;
    if (data.count >= 3)
        return;
    try {
        
    } catch (error) {
        data.count++;
        await producer.send({
            topic: conf.kafka.forwardingTopic,
            messages: [{ value: JSON.stringify(data) }],
        });
        return true;
    }
}