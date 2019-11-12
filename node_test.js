// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// // (function(){})
// http.createServer(function (req, res) {
// //  fs.readFile("html_test.html", function (err, data) {
// //    res.writeHead(200, {'Content-Type': 'text/html'});
// //    res.write(data);
// //    var q = url.parse(req.url, true).query;
// //    var txt = q.year + " " + q.month;
// //    res.end(txt);
// //  });  
// }).listen(8080);
setTimeout(function () {
    console.log("timeout function");
}, 5000);
console.log("yeeeeeeeeee");