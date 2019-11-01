var Imap = require("imap");
var MailParser = require("mailparser").MailParser;
var Promise = require("bluebird");

Promise.longStackTraces();

var imap = new Imap({
    user: 'shubham@rytangle.com',
    password: '9868418995',
    host: 'imappro.zoho.com',
    port: 993,
    tls: true
});

Promise.promisifyAll(imap);

imap.once("ready", execute);
imap.once("error", function(err) {
    log.error("Connection error: " + err.stack);
});

imap.connect();

function execute() {
    imap.openBox("INBOX", false, function(err, mailBox) {
        if (err) {
            console.error(err);
            return;
        }
        imap.search(["UNSEEN"], function(err, results) {
            if(!results || !results.length) {
                console.log("No unread mails");
                imap.end();
                return;
            }
            
            /* mark as seen */
        //    imap.setFlags(results, ['\\Seen'], function(err) {
        //        if (!err) {
        //            console.log("marked as read");
        //        } else {
        //            console.log(JSON.stringify(err, null, 2));
        //        }
        //    });
            /* mark as seen ended */
            
            var f = imap.fetch(results, { bodies: "" });
            f.on("message", processMessage);
            f.once("error", function(err) {
                return Promise.reject(err);
            });
            f.once("end", function() {
                imap.end();
            });
        });
    });
}


function processMessage(msg, seqno) {
    // console.log(msg);

    var parser = new MailParser();
    parser.on("headers", function(headers) {

        console.log("From: " + headers.get('from').text);
        console.log("To: " + headers.get('to').text);
        
        if (headers.has('cc')) {
            console.log("Cc: " + headers.get('cc'));
        }

        if (headers.has('subject')) {
            console.log("Subject: " + headers.get('subject'));
        }
    });

    parser.on('data', data => {
        if (data.type === 'text') {
            console.log("Mail Body: " + data.text); 
        }

        if (data.type === 'attachment') {
            console.log(data.filename);
            data.content.pipe(process.stdout);
            data.content.on('end', () => data.release());
        }
     });

    msg.on("body", function(stream) {
        stream.on("data", function(chunk) {
            parser.write(chunk.toString("utf8"));
        });
    });
    msg.once("end", function() {
        parser.end();
    });
}