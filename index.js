const client = require("redis").createClient({
    host: "fibo-mq-001.sw5shl.0001.usw2.cache.amazonaws.com",
    port: "6379"
});

async function start() {
    await client.connect();
    console.log(await client.get("a"));
}