start().then(_ => process.exit(0)).catch(err => console.error(err));

const commits = [
    {
        "desc": "initial commit",
        "planId": "ly35-82jd-72xp",
        "VersionId": "wrxAgyzyM5DjA8xyoIBbcHsWvBONanao",
        "editTime": 1661434973276,
        "commitVersion": "1.20220825"
    },
    {
        "desc": "restored commited",
        "planId": "ly35-82jd-72xp",
        "VersionId": "6N9Mc3.cJmriux4XeUCY4SslBn4fEQDN",
        "editTime": 1661580091973,
        "commitVersion": "2.20220827"
    },
    {
        "desc": "Null not allowed",
        "planId": "ly35-82jd-72xp",
        "VersionId": "KzU0dfjWTjJxOVG10v4p_bUT7Yip1ZsQ",
        "editTime": 1661618262561,
        "commitVersion": "3.20220827"
    },
    {
        "desc": "User and group also null not allowed",
        "planId": "ly35-82jd-72xp",
        "VersionId": "GEDuqnaG80SSnR7GJzyAw0k6MEGnoBgU",
        "editTime": 1661618542464,
        "commitVersion": "4.20220827"
    },
    {
        "desc": "Commit new version",
        "planId": "ly35-82jd-72xp",
        "VersionId": "h2F2.AWkP3n_ydxJdKKYZ7ZR_tvr4_6v",
        "editTime": 1662273033515,
        "commitVersion": "5.20220904"
    },
    {
        "desc": "test version num without '.'",
        "planId": "ly35-82jd-72xp",
        "VersionId": "1yDrsLC4gcWR0u0xzC0taCY.ctU2lB4R",
        "editTime": 1663599979197,
        "commitVersion": 6
    },
    {
        "desc": "commit from new window",
        "planId": "ly35-82jd-72xp",
        "VersionId": "UZTHD84M4oHHOCqVH26j3D5yfY0CuzBJ",
        "editTime": 1663934910409,
        "commitVersion": 7
    },
    {
        "desc": "This is new version ",
        "planId": "ly35-82jd-72xp",
        "VersionId": "3Y93yfw9UeTdWTP8S3Wt06TFo4F4QSXa",
        "editTime": 1664168870138,
        "commitVersion": 8
    },
    {
        "desc": "version 9",
        "planId": "ly35-82jd-72xp",
        "VersionId": "CsAXxJGH3EEJIRmR1M840WBe9LKtZwR7",
        "editTime": 1664169039953,
        "commitVersion": 9
    },
    {
        "desc": "New sgement test event added",
        "planId": "ly35-82jd-72xp",
        "VersionId": "3OzyuS1LNXf7k_Qrv_PWGecCE_uLYbNO",
        "editTime": 1664178022300,
        "commitVersion": 10
    },
    {
        "desc": "test live version label",
        "planId": "ly35-82jd-72xp",
        "VersionId": "LCscyeuyI3U8nsQ7TbNUa0YM0SCHWVFt",
        "editTime": 1664290331823,
        "commitVersion": 11
    },
    {
        "desc": "test live version lbl",
        "planId": "ly35-82jd-72xp",
        "VersionId": "4vU.4.pkFK35yC7LUkCyp1T5Ee1qVsXL",
        "editTime": 1664291742717,
        "commitVersion": 12
    },
    {
        "desc": "Updated a KPI\n",
        "planId": "ly35-82jd-72xp",
        "VersionId": "3e6XjRHSl35HANFMNJoy9xvLthLN7y12",
        "editTime": 1664347188624,
        "commitVersion": 13
    },
    {
        "desc": "shubham test event added",
        "planId": "ly35-82jd-72xp",
        "VersionId": "nAtWTWLuhVUGl2lnZneMErtcR30d5Hdg",
        "editTime": 1664508042376,
        "commitVersion": 14
    },
    {
        "desc": "new event rahul test added",
        "planId": "ly35-82jd-72xp",
        "VersionId": "PixCZGHGXcSIxYrOG1GAxCICQXzXhIV_",
        "editTime": 1664514806127,
        "commitVersion": 15
    },
    {
        "desc": "Ranges added in user values",
        "planId": "ly35-82jd-72xp",
        "VersionId": "sKVIcfN88RSy6UrcJ.a5oLtAtn6LEntF",
        "editTime": 1673266577457,
        "commitVersion": 16
    }
]

async function start() {
    let d = await require("mongodb").MongoClient.connect(`mongodb://localhost:27017/kaliper_plans`);
    let db = d.db();
    let comm = {};
    for (let i of commits) {
        comm[i.VersionId] = i;
    }
    let versions = await db.collection("versions").find().toArray();
    for (let version of versions) {
        let update = { $set: {
            ts: new Date(version.ts),
        } };
        if (comm[version.VersionId]) {
            Object.assign(update.$set, {
                commitVersion: comm[version.VersionId].commitVersion,
                ts: new Date(comm[version.VersionId].editTime),
                desc: comm[version.VersionId].desc,
            });
        }
        console.log(JSON.stringify(update));
        await db.collection("versions").updateOne({ VersionId: version.VersionId }, update);
    }
}