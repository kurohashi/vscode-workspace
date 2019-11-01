module.exports.getNewMail = getNewMail;

var response = "";

var Imap = require("imap");
var MailParser = require("mailparser").MailParser;
var Promise = require("bluebird");

var imap = new Imap({
    user: 'shubham@rytangle.com',
    password: '9868418995',
    host: 'imappro.zoho.com',
    port: 993,
    tls: true
});

function getNewMail() {

    imap.connect();
    Promise.longStackTraces();
    Promise.promisifyAll(imap);
    imap.once("ready", execute);
    imap.once("error", function(err) {
    response = "Connection error: " + err.stack;
    });

    var retValue = "" + response;
    response = "";
    
    return(retValue);
}

function execute() {
    imap.openBox("INBOX", false, function(err, mailBox) {
        if (err) {
            console.error(err);
            return;
        }
        imap.search(["UNSEEN"], function(err, results) {
            if(!results || !results.length) {
                response = "No unread mails";
                imap.end();
                return;
            }
            
            /* mark as seen code*/
        //    imap.setFlags(results, ['\\Seen'], function(err) {
        //        if (!err) {
        //            console.log("marked as read");
        //        } else {
        //            console.log(JSON.stringify(err, null, 2));
        //        }
        //    });
            /* mark as seen code ended */
            
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

    var parser = new MailParser();
    parser.on("headers", function(headers) {

        response += "\nFrom: " + headers.get('from').text;
        response += "\nTo: " + headers.get('to').text;
        
        if (headers.has('cc')) {
            response += "\nCc: " + headers.get('cc');
        }

        if (headers.has('subject')) {
            response += "\nSubject: " + headers.get('subject');
        }
    });

    parser.on('data', data => {
        if (data.type === 'text') {
            response += "\nMail Body: " + data.text; 
        }

        if (data.type === 'attachment') {
            response += "\n" + data.filename;
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