let xlsx = require("node-xlsx");
let fs = require("fs");

/**
 * 
 * @param {any[]} data 
 */
module.exports = function (data, sheetName) {
    let buffer = xlsx.build([{ data: convertJsonArrayToSheetFormat(data), name: sheetName }]);
    fs.writeFile(sheetName + ".xlsx", buffer, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${sheetName} File written`);
        }
    });
}

/**
 * 
 * @param {any[]} data 
 */
function convertJsonArrayToSheetFormat(data) {
    let headers = new Set();
    for (let dat of data) {
        for (let i in dat) {
            headers.add(i);
        }
    }
    headers = Array.from(headers);
    let result = [headers];
    for (let dat of data) {
        let foo = [];
        for (let head of headers) {
            foo.push(dat[head] || "");
        }
        result.push(foo);
    }
    return result;
}