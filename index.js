const collections = ["43f1a909ad", "43f1a909ad-extract", "test-default-gid", "test-default-gid-extract"]
const MongoClient = require("mongodb").MongoClient;
const server = 'localhost:27017';
const database = 'events';
const reconn = { useNewUrlParser: true };
MongoClient.connect(`mongodb://${server}/${database}`, reconn, function (err, d) {
    let db = d.db();
    for (let col of collections) {
        db.collection(col).find({}).toArray(function (err, data) {
            for (let d of data) {
                db.collection(col).updateOne({ _id: d._id }, { $set: { lastTs: new Date(d.lastTs) } }).catch(err => console.error(err));
            }
        });
    }
});