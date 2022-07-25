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
    let db = mongo.createConnection();
    await db.openUri(`mongodb://${server}/${database}`);
    let data = await new Promise(function (resolve, reject) {
        db.collection("test-default-gid").find({}).toArray(function (err, data) {
            if (err)
                reject(err);
            resolve(data);
        });
    });
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