const CryptoJS = require("crypto-js");

let keys = "EavQ9t90izEyJ5U1go0D";

function set(value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encodeURIComponent(encrypted.toString());
}

let saveObj = {
    "email": "shubham@rytangle.com",
    "passwd": "9868418995",
    signInType: "kaliper"
};
console.log(set(JSON.stringify(saveObj)));