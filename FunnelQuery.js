var streamcount = require('streamcount');
var client = require("redis").createClient();
 
// Create a stream counter to track unique visitors with a 1% margin of error.
var uniques = streamcount.createUniquesCounter(0.01);

var proms = [];
// Add some observations
for (let i = 0;i < 5000000; i++) {
    // client.pfadd("users", "user" + i, function (err, reply) {
    //     proms.push(new Promise(function (resolve, reject) {
    //         resolve();
    //     }));
    // });
    uniques.add('user' + i);
}

console.log(uniques.count());

// Promise.all(proms).then(resp => {
//     client.pfcount("users", function (err, reply) {
//         console.log(err, reply);
//     });
// }).catch(err => console.error(err));
 
 
// Create a stream counter to track the top 3 pages viewed on our site.
// var pageCounts = streamcount.createViewsCounter(3);
 
// // Add some observations
// let arr = [];
// pageCounts.increment('/');
// pageCounts.increment('/');
// pageCounts.increment('/product1');
// pageCounts.increment('/contact');
// pageCounts.increment('/product3');
// pageCounts.increment('/');
// pageCounts.increment('/about');
// pageCounts.increment('/about');
// pageCounts.increment('/product2');
// pageCounts.increment('/product1');
// pageCounts.increment('/');
// pageCounts.increment('/product1');
 
// // Prints [ [ 4, '/' ], [ 3, '/product1' ], [ 2, '/about' ] ]
// console.log(pageCounts.getTopK());