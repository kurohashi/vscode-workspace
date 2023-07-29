const puppeteer = require("puppeteer");

loadUrl("https://play.google.com/store/apps/details?id=com.vyap_app").catch(err => console.error(err));

/**
 * Load the html url
 * @param {*} url 
 */
async function loadUrl(url) {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        args: ["--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(".EaMWib");
    await page.$$eval(".EaMWib", (nodes) => {
        nodes = nodes.filter(node => node.textContent == "About this app");
        nodes[0].parentNode.querySelector("button").click();
    });
    let details = await page.$$eval(".reAt0", (nodes) => nodes.map(n => n.textContent));
    let version = details[0];
    console.log(version);
}