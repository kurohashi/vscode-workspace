const puppeteer = require("puppeteer");

start().catch(err => console.error(err));

async function start() {
    console.log(
        await getVersion("https://play.google.com/store/apps/details?id=com.vyap_app"),
        await getVersion("https://apps.apple.com/in/app/vyap-get-all-kitchen-supplies/id6450275963", "ios")
    )
}

/**
 * Load the html url
 * @param {*} url 
 * @param {"android" | "ios" | undefined} platform 
 */
async function getVersion(url, platform) {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        args: ["--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url);
    switch (platform) {
        case "ios":
            return getIosAppVersion(page);
        case "android":
        default:
            return getAndroidAppVersion(page);
    }
}

/**
 * 
 * @param {puppeteer.Page} page 
 * @returns 
 */
async function getAndroidAppVersion(page) {
    await page.waitForSelector(".EaMWib");
    await page.$$eval(".EaMWib", (nodes) => {
        nodes = nodes.filter(node => node.textContent == "About this app");
        nodes[0].parentNode.querySelector("button").click();
    });
    let details = await page.$$eval(".reAt0", (nodes) => nodes.map(n => n.textContent));
    let version = details[0];
    return version;
}

/**
 * 
 * @param {puppeteer.Page} page 
 * @returns 
 */
async function getIosAppVersion(page) {
    await page.waitForSelector(".whats-new__latest__version");
    let details = await page.$$eval(".whats-new__latest__version", (nodes) => nodes.map(n => n.textContent));
    return details[0].split(" ")[1];
}