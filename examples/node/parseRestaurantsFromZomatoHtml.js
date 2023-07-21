let restaurants = require("../../assets/restaurants");
let { JSDOM } = require("jsdom");
let toExcel = require("./jsonToExcel");

let mapFuncData = {
    delivery: getDeliveryData,
    dining: getNightlifeData,
    nightlife: getNightlifeData,
};

let result = Object.values({
    ...getData("nightlife"), ...getData("dining"), ...getData("delivery")
});

toExcel(result, "restaurants");


/**
 * 
 * @param {"delivery" | "dining" | "nightlife"} type 
 * @returns 
 */
function getData(type) {
    let result = {};
    for (let place of ["noida", "ghaziabad"]) {
        let document = new JSDOM(restaurants[place][type]).window.document;
        for (let node of document.body.children[0].children) {
            for (let elem of node.children[0].children) {
                let datum = mapFuncData[type](elem);
                result[datum.name] = datum;
            }
        }
    }
    return result;
}


function getDeliveryData(elem) {
    let name = elem.getElementsByTagName("h4")[0];
    let foo = [];
    let details = elem.getElementsByTagName("p");
    for (let detail of details) {
        let text = detail.textContent;
        text = text.split(",").map(foo => foo.trim().replace(/\s\s+/g, ' ')).join(",");
        foo.push(text);
    }
    let price, cuisine;
    for (let i = 0; i < foo.length; i++) {
        let t = foo[i];
        if (t.indexOf("₹") == 0) {
            price = t;
            cuisine = foo[i - 1];
            break;
        }
    }
    return {
        name: name.textContent.trim().replace(/\s\s+/g, ' '),
        price_for_2: extractPrice(price) * 2,
        cuisine,
    };
}


function getNightlifeData(elem) {
    let name = elem.getElementsByTagName("h4")[0];
    let foo = [];
    let details = elem.getElementsByTagName("p");
    for (let i = 0; i < 3; i++) {
        let detail = details[i];
        let text = detail.textContent;
        foo.push(text.split(",").map(foo => foo.trim().replace(/\s\s+/g, ' ')).join(","));
    }
    return {
        name: name.textContent.trim().replace(/\s\s+/g, ' '),
        cuisine: foo[0],
        price_for_2: extractPrice(foo[1]),
        address: foo[2],
    };
}


function extractPrice(priceText) {
    return Number(priceText.split(" ")[0].substring(1).split(",").join(""));
}