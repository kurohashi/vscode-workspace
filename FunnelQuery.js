// var streamcount = require('streamcount');
// var client = require("redis").createClient();

// // Create a stream counter to track unique visitors with a 1% margin of error.
// var uniques = streamcount.createUniquesCounter(0.01);

// var proms = [];
// // Add some observations
// for (let i = 0;i < 5000000; i++) {
//     // client.pfadd("users", "user" + i, function (err, reply) {
//     //     proms.push(new Promise(function (resolve, reject) {
//     //         resolve();
//     //     }));
//     // });
//     uniques.add('user' + i);
// }

// console.log(uniques.count());

// // Promise.all(proms).then(resp => {
// //     client.pfcount("users", function (err, reply) {
// //         console.log(err, reply);
// //     });
// // }).catch(err => console.error(err));


// // Create a stream counter to track the top 3 pages viewed on our site.
// // var pageCounts = streamcount.createViewsCounter(3);

// // // Add some observations
// // let arr = [];
// // pageCounts.increment('/');
// // pageCounts.increment('/');
// // pageCounts.increment('/product1');
// // pageCounts.increment('/contact');
// // pageCounts.increment('/product3');
// // pageCounts.increment('/');
// // pageCounts.increment('/about');
// // pageCounts.increment('/about');
// // pageCounts.increment('/product2');
// // pageCounts.increment('/product1');
// // pageCounts.increment('/');
// // pageCounts.increment('/product1');

// // // Prints [ [ 4, '/' ], [ 3, '/product1' ], [ 2, '/about' ] ]
// // console.log(pageCounts.getTopK());

// let { JSDOM } = require("jsdom");

// let a = '<a id="js-go-to-sandbox" class="go-to-sandbox js-navigate " href="/sandbox/1621016/details/">\
// Open in Sandbox &gt;\
// </a>\
// ';

// let tag = a.substr(1, a.indexOf(" ") - 1);
// console.log(tag);

// let dom = new JSDOM(a);
// let element = dom.window.document.getElementsByTagName(tag)[0];
// console.log(JSON.stringify(dom.window.location));

// let url = new URL("https://fibotalk.com/?a=1&a=2#test");
// console.log(url.searchParams.get("a"))

var info = console.log;

var console = {
    log: function log(message) {
        const callerInfo = getFileName(log.caller.name);
        info(`${new Date()} <${arguments.callee.name}> ${callerInfo.filename} (${log.caller.name}) ${message}`);
    },
};

function getFileName(caller) {
    const STACK_FUNC_NAME = new RegExp(/at\s+((\S+)\s)?\((\S+):(\d+):(\d+)\)/);
    let err = new Error();

    Error.captureStackTrace(err);

    let stacks = err.stack.split('\n').slice(1);

    let callerInfo = null;
    for (let i = 0; i < stacks.length; i++) {
        callerInfo = STACK_FUNC_NAME.exec(stacks[i]);

        if (callerInfo[2] === caller) {
            return {
                filename: callerInfo[3],
                line: callerInfo[4],
                column: callerInfo[5],
            };
        }
    }

    return null;
}

function iWantToLog() {
    console.log('Testing my log');
}

iWantToLog();