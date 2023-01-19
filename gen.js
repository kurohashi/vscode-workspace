start().then(_ => process.exit(0)).catch(err => console.error(err));

async function start() {
    let d = await require("mongodb").MongoClient.connect(`mongodb://localhost:27017/kaliper_plans`);
    let db = d.db();
    let versions = await db.collection("versions").find({ commitVersion: { $exists: true } }).toArray();
    for (let version of versions) {
        let update = { $unset: {
            desc: false,
        } };
        console.log(JSON.stringify(update));
        await db.collection("versions").updateOne({ VersionId: version.VersionId }, update);
    }
}