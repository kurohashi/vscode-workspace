const client = require("redis").createClient({
    url: "fibo-mq-001.sw5shl.0001.usw2.cache.amazonaws.com:6379",
});

start().catch(err => {
    console.error(err);
});

async function start() {
    await client.connect();
    // await client.set("a", "sample data");
    console.log(await client.get("a"));
}