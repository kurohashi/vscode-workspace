const conf = {
    port: 10000,
    kafka: {
        brokers: ['b-1.fibotalk.aeljif.c8.kafka.us-west-2.amazonaws.com:9092', 'b-2.fibotalk.aeljif.c8.kafka.us-west-2.amazonaws.com:9092', 'b-3.fibotalk.aeljif.c8.kafka.us-west-2.amazonaws.com:9092'],
        groupId: "test",
        topic: "test",
    }
};

const request = require("request");

const app = require("express")();
app.use(publish);
app.listen(conf.port);

const { Kafka } = require("kafkajs");
const kafka = new Kafka({
    clientId: 'fibotalk',
    brokers: conf.kafka.brokers
});
const producer = kafka.producer({});
const consumer = kafka.consumer({ groupId: conf.kafka.groupId, sessionTimeout: 30000, heartbeatInterval: 3000 });

start().then(resp => console.log("Server setup complete on 10000", resp)).catch(err => console.error(err));


/**
 * Start the execution
 */
async function start() {
    await producer.connect();
    await consumer.subscribe({ topic: conf.kafka.topic });
    await consumer.run({
        autoCommitThreshold: 1,
        eachMessage: eachMessage,
        partitionsConsumedConcurrently: 1,
    });
}

/**
 * Each event consumer
 * @param {*} resp 
 */
async function eachMessage(resp) {
    let event = JSON.parse(resp.message.value.toString());
    let gid = resp.message.key.toString();

    return new Promise(function (resolve, reject) {
        request({
            method: "POST",
            url: "http://localhost:3000",
            json: event,
            headers: { gid: gid },
        }, function (err, resp, body) {
            if (err)
                return reject(err);
            resolve(body);
        });
    });
}

/**
 * Publish event to kafka
 * @param {*} req 
 * @param {*} res 
 */
function publish(req, res) {
    if (!req.headers.gid)
        return res.status(400).json();
    console.log("Incoming:", JSON.stringify(req));
    producer.send({
        topic: conf.kafka.topic,
        messages: [{
            value: JSON.stringify(req.body),
            key: req.headers.gid,
        }],
    }).then(resp => {
        res.status(200).json({ message: "Success" });
    }).catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
}