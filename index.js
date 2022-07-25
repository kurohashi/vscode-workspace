const mongo = require("mongoose");

const server = 'localhost:27017'; 
const database = 'events';

start().then(resp => {
    console.log(resp);
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});

async function start() {
    let m = await mongo.connect(`mongodb://${server}/${database}`);
    let db = m.createConnection();
    let data = await db.collection("test-default-gid").find({}).toArray();
    for (let d of data) {
        for (let i in d) {
            switch (typeof d[i]) {
                case "object":
                    for (let j in d[i]) {
                        if (j.includes(".")) {
                            await db.collection("test-default-gid").deleteOne({ _id: d._id });
                        }
                    }
            }
        }
    }
    return "done";
}