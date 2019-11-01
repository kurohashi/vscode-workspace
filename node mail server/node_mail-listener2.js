var MailListener = require("mail-listener2");

var mailListener = new MailListener({
    username: "shubham@rytangle.com",
    password: "9868418995",
    host: "imappro.zoho.com",
    port: 993, // imap port
    tls: true,
    connTimeout: 10000, // Default by node-imap
    authTimeout: 5000, // Default by node-imap,
//    debug: console.log, // Or your custom function with only one incoming argument. Default: null
    tlsOptions: { rejectUnauthorized: false },
    mailbox: "INBOX", // mailbox to monitor
    searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved
    markSeen: false, // all fetched email willbe marked as seen and not fetched next time
    fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
    mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
    attachments: true, // download attachments as they are encountered to the project directory
    attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

//mailListener.on("server:connected", function () {
//    console.log("imapConnected");
//});
//
//mailListener.on("server:disconnected", function () {
//    console.log("imapDisconnected");
//});
//
//(function () {
//    var count = 0;
//    mailListener.on("mail", function (mail, seqno, attributes) {
//        var mailuid = attributes.uid, toMailbox = 'Inbox', i = ++count;
//        if (i > 1) {
//            mailListener.stop(); // start listening
//            return;
//        }
//        console.log('email parsed', {
//            i: i,
//            subject: mail.subject,
//            from: mail.from,
//            text:mail.text,
//            seqno: seqno,
//            uid: attributes.uid,
//            attributes: attributes
//        });
//        expect(mail.subject).toEqual("FW: Secure One-Time-Password for Account Login");
//
//        var pattern = new RegExp(/Please use (\w+)/g);
//        var regCode = pattern.exec(mail.text)[1];
//        console.log(regCode);
//
//        console.log('attempting to mark msg read/seen');
//        mailListener.imap.addFlags(mailuid, '\\Seen', function (err) {
//            if (err) {
//                console.log('error marking message read/SEEN');
//                return;
//            }
//
//            console.log('moving ' + (seqno || '?') + ' to ' + toMailbox);
//            mailListener.imap.move(mailuid, toMailbox, function (err) {
//                if (err) {
//                    console.log('error moving message');
//                    return;
//                }
//                console.log('moved ' + (seqno || '?'), mail.subject);
//            });
//        });
//    });
//})
//
//();
//mailListener.start(); // start listening
//
//setTimeout(function () {
//    mailListener.stop(); // start listening
//}, 60 * 1000);



mailListener.start(); // start listening

// stop listening
//mailListener.stop();

mailListener.on("server:connected", function(){
    console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
    console.log("imapDisconnected");
});

mailListener.on("error", function(err){
    console.log(err);
});

mailListener.on("mail", function(mail, seqno, attributes){  
    // do something with mail object including attachments
    console.log('email parsed', {
        subject: mail.subject,
        from: mail.from,
        text:mail.text,
        seqno: seqno,
        uid: attributes.uid,
        attributes: attributes
    });
    // mail processing code goes here
});

mailListener.on("attachment", function(attachment){
    console.log(attachment.path);
});