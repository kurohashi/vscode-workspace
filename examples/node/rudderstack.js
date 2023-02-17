const RudderAnalytics = require("@rudderstack/rudder-sdk-node")
const client = new RudderAnalytics("2LrQHmJlcCW6EFa3OALs5KPdVpv", {
    dataPlaneUrl: "https://fibotalkssrl.dataplane.rudderstack.com", // default: https://hosted.rudderlabs.com
})

for (let i = 0; i < 60; i++)
    sendEvent();

function sendEvent() {
    let option = Math.random();
    switch (option) {
        case 0:
            identify();
            break;
        case 0.9:
            group();
            break;
        default:
            track();
    }
}

function identify() {
    client.identify({
        userId: "1hKOmRA4GRlm",
        traits: {
            name: "Node user",
            email: "user@node.com",
            type: "server",
        },
    });
}

function track() {
    client.track({
        userId: "1hKOmRA4GRlm",
        event: "Node server event",
        properties: {
            currentSentAt: new Date(),
            method: "server api",
        },
    })
}

function group() {
    client.group({
        userId: "1hKOmRA4GRlm",
        groupId: "nodeRandom",
        traits: {
            name: "node server",
            description: "This came from node server",
        },
    })
}