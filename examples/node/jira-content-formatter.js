// var ffi = require('ffi-napi');
// var htmltoadf = ffi.Library('libhtmltoadf', {
//     'convert': ['string', ['string']]
// });
// console.log(htmltoadf.convert("<h1>Hello from Node!</h1>"));

let init, {convert} = require("htmltoadf");
init()
  .then(() => {
    console.log(convert("<h1>Hello from WebAssembly</h1>"))
  });