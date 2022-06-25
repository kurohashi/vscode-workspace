const conf = {
    port: 10000,
};

const { JSDOM } = require("jsdom");
const puppeteer = require("puppeteer");

const bodyParser = require("body-parser");
const app = require("express")();
app.use(bodyParser.json()); //supprts JSON encoded bodies
app.use(bodyParser.text()); //for navigator.sendBeacon api call
app.use(bodyParser.urlencoded({ extended: true })); //supports URL encoded bodies
app.post("/get/reviews", getReviews);
app.listen(conf.port);

console.log("Service started on port:", conf.port);
console.log("API details:\n");
console.log(`URL: http://localhost:${conf.port}/get/reviews\nMETHOD: post\nBODY: { url: "url to be crawled" }]\n\n`);

/**
 * Get reviews
 * @param {*} req 
 * @param {*} res 
 */
function getReviews(req, res) {
    if (!req.body.url)
        return res.status(400).json({ msg: "url not provided" });
    crawlReviews(req.body.url).then(resp => {
        console.log(JSON.stringify(resp));
        res.status(200).json({
            data: resp,
            msg: "success",
        });
    }).catch(err => {
        console.error(err);
        res.status(400).json({ msg: "wrong url" });
    });
}

/**
 * Crawl reviews from the url
 * @param {*} url 
 */
async function crawlReviews(url) {
    let dom = new JSDOM(await loadUrl(url));
    let div = dom.window.document.getElementById("customerReviews");
    let result = [];
    for (let node of div.children) {
        if (!node.id == "customerReviews")
            continue;
        let obj = {};
        for (let datNode of node.children[0].children) {
            if (datNode.className.includes("leftCol")) {
                for (let rNode of datNode.children) {
                    if (rNode.className.includes("itemReview")) {
                        obj.rating = rNode.children[1].textContent.trim();
                    } else if (rNode.className.includes("reviewer")) {
                        obj.name = rNode.children[1].textContent.trim();
                        obj.date = rNode.children[3].textContent.trim();
                    }
                }
            } else if (datNode.className.includes("rightCol")) {
                obj.comment = datNode.textContent.trim();
            }
        }
        if (Object.keys(obj).length)
            result.push(obj);
    }
    return result;
}

/**
 * Load the html url
 * @param {*} url 
 */
async function loadUrl(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--disable-setuid-sandbox"],
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("#customerReviews");
    const bodyHandle = await page.$('body');
    const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    await bodyHandle.dispose();
    return html;
}