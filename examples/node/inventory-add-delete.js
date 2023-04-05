const mongo = require("mongodb").MongoClient;
const app = require("express")();
const bodyParser = require("body-parser");
const conf = {
    port: 20002
};
let inventory;

startService()
    .then(resp => console.log("Server started successfully", resp))
    .catch(err => console.error("Some error occurred while starting the server", err));

async function startService() {
    db = await mongo.connect("mongodb://127.0.0.1:27017/product");
    inventory = db.db().collection("inventory");
    await inventory.createIndex({ productId: 1 }, { unique: true });
    await setServer();
}


async function setServer() {
    app.use(bodyParser.json()); //supprts JSON encoded bodies
	app.use(bodyParser.text()); //for navigator.sendBeacon api call 
	app.use(bodyParser.urlencoded({extended: true})); //supports URL encoded bodies
	app.use(require("cookie-parser")());
	app.use(require('helmet')());
	app.use(require("hpp")());
    await setRoutes();
    app.listen(conf.port, function ( ) {
        console.log("Server started on", conf.port);
    });
}


async function setRoutes() {
    app.post("/inventory/modify", modifyInventory);
}

/**
 * Modify the current inventory based on the operation specified
 * @param {*} req 
 * @param {*} res 
 */
function modifyInventory(req, res) {
    (async () => {
        let ops = req.body;
        if (!ops.length)
            ops = [ops];
        for (let op of ops) {
            switch (op.operation) {
                case "add":
                    await addInventory(op);
                    break;
                case "subtract":
                    await delInventory(op);
                    break;
            }
        }
        res.status(200).json({
            msg: "Successfully modified the inventory",
        });
    })().catch(err => {
        console.error(err);
        res.status(500).json({
            msg: "Server error",
        });
    });
}

/**
 * Add items to inventory
 * @param {*} op 
 */
async function addInventory(op) {
    let quantity = toInt(op.quantity);
    await inventory.updateOne({ productId: op.productId }, { $inc: { quantity: quantity } });
}

/**
 * Remove items from inventory
 * @param {*} op 
 */
async function delInventory(op) {
    let quantity = toInt(op.quantity);
    await inventory.updateOne({ productId: op.productId }, { $inc: { quantity: quantity * -1 } });
}

/**
 * Convert the data to integer
 * @param {*} dat 
 * @returns 
 */
function toInt(dat) {
    if (isNaN(dat))
        return 0;
    return Math.floor(Number(dat));
}