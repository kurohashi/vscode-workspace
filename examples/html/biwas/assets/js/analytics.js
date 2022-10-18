window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-198124867-1', {
    user_id: 'shubham@tester',
    name: "Shubham",
    address: { street: "Dwarka" },
});

!function () {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize)
        if (analytics.invoked)
            window.console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"];
            analytics.factory = function (e) {
                return function () {
                    var t = Array.prototype.slice.call(arguments);
                    t.unshift(e);
                    analytics.push(t);
                    return analytics
                }
            };
            for (var e = 0; e < analytics.methods.length; e++) {
                var key = analytics.methods[e];
                analytics[key] = analytics.factory(key)
            }
            analytics.load = function (key, e) {
                var t = document.createElement("script");
                t.type = "text/javascript";
                t.async = !0;
                t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n);
                analytics._loadOptions = e
            };
            analytics._writeKey = "cYE4iMbndyjsZ96zQTkdcVFHXtF6GdRG";
            analytics.SNIPPET_VERSION = "4.15.3";
            analytics.load("cYE4iMbndyjsZ96zQTkdcVFHXtF6GdRG");
            analytics.page();
        }
}();
analytics.identify('shubham@tester', {
    name: "Shubham",
    address: { street: "Dwarka" },
});
analytics.group("tester", { name: "abc" });
window.addEventListener("click", handleClickEvent);
/** -------------------------------------
 * send click_event after generating its structure
 * @param {*} e : DOM event generated on click
 -------------------------------------*/
function handleClickEvent(e) {
    var el = e.srcElement;
    var clicked_on = {
        localName: el.localName || '-',
        id: el.id ? '#' + el.id : '-',
        innerText: el.innerText || '-',
        baseURI: (window.location.pathname + window.location.hash) || '-',
        // path: getDomPath(el) || '-',
        className: el.className ? '.' + el.className : '-'
    }
    if (clicked_on.innerText != '-') {
        clicked_on.innerText = clicked_on.innerText.trim();
        clicked_on.innerText = clicked_on.innerText.replace(/\s\s+/g, ' ');
        if (clicked_on.innerText.length > 100)
            clicked_on.innerText = clicked_on.innerText.substring(0, 100) + "...";
    }
    for (var i in clicked_on) {
        if (typeof clicked_on[i] === "object")
            clicked_on[i] = JSON.stringify(clicked_on[i]);
    }
    var str = defaultClickLabel(clicked_on);
    var obj = {
        val: str,
        text: el.innerText || '-',
        page: (window.location.pathname + window.location.hash) || '-',
        elType: el.localName || '-',
        html: el.outerHTML,
    };
    analytics.track("click_event", obj);
    gtag("event", "click_event", obj);
}

/** -------------------------------------
 * Generate default label for click_event
 * @param {*} clicked_on 
 -------------------------------------*/
function defaultClickLabel(clicked_on) {
    var tags = {
        a: 'link'
    };
    var str = '';
    if (clicked_on.innerText != '-') {
        str += clicked_on.innerText;
    }
    if (clicked_on.localName != '-') {
        str += ' ' + (tags[clicked_on.localName] || clicked_on.localName);
    }
    if (clicked_on.baseURI != '-') {
        str += ' on page ' + clicked_on.baseURI;
    }
    var classFlag = true;
    if (clicked_on.id != '-') {
        str += ' with id ' + clicked_on.id;
        if (clicked_on.className != '-') {
            str += ' and class ' + clicked_on.className;
            classFlag = false;
        }
    }
    if (classFlag && clicked_on.className != '-') {
        str += ' with class ' + clicked_on.className;
    }
    try {
        str = str.trim();
    } catch (error) { }
    return str;
} //defaultClickLabel()

if ('onvisibilitychange' in document)
    document.onvisibilitychange = function () {
        visibility(true);
    };
else if (('webkitOnVisibilityChange') in document)
    document.webkitOnVisibilityChange = function () {
        visibility(true);
    };

function visibility(setParams) {
    var params = {};
    if (isTabHidden()) {
        // Setting reason for page_close
        if (setParams)
            params.reason = "blur";
        analytics.track("page_close", params);
        gtag("event", "page_close", params);
    } else {
        // Setting reason for page_open
        if (setParams)
            params.reason = "focus";
        analytics.track("page_open", params);
        gtag("event", "page_open", params);
    }
}//visibility()


function isTabHidden() {
    if (document.hidden || document.webkitHidden || document.mozHidden)
        return true;
    return false;
}//isTabHidden()


(function () {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        // console.log('request started!');
        this.addEventListener('load', function (e) {
            console.log('request completed!', this.responseURL);
            // console.log(this.readyState); //will always be 4 (ajax is completed successfully)
            // console.log(this.responseText); //whatever the response was
        });
        origOpen.apply(this, arguments);
    };
})();