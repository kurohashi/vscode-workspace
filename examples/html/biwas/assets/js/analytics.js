// Google tag
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

// Segments
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

// RudderStack
!function () {
    var e = window.rudderanalytics = window.rudderanalytics || [];
    e.methods = ["load", "page", "track", "identify", "alias", "group", "ready", "reset", "getAnonymousId", "setAnonymousId", "getUserId", "getUserTraits", "getGroupId", "getGroupTraits", "startSession", "endSession"], e.factory = function (t) {
        return function () {
            e.push([t].concat(Array.prototype.slice.call(arguments)))
        }
    };
    for (var t = 0; t < e.methods.length; t++) {
        var r = e.methods[t];
        e[r] = e.factory(r)
    }
    e.loadJS = function (e, t) {
        var r = document.createElement("script");
        r.type = "text/javascript", r.async = !0, r.src = "https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(r, a)
    }, e.loadJS(), e.load("2KGtyobtkHK8LRJTn7yg9vInR3v", "https://fibotalkssrl.dataplane.rudderstack.com"), e.page()
}();

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
        value: 10,
        event_category: "click",
        event_label: "Test clicked"
    };
    setEvent("click_event", obj);
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
        setEvent("page_close", params);
    } else {
        // Setting reason for page_open
        if (setParams)
            params.reason = "focus";
        setEvent("page_open", params);
    }
}//visibility()


function isTabHidden() {
    if (document.hidden || document.webkitHidden || document.mozHidden)
        return true;
    return false;
}//isTabHidden()

(function () {
    let id = {
        user: {
            user_id: 'shubham@tester',
            params: {
                name: "Shubham",
                address: { street: "Dwarka" },
            }
        },
        group: {
            group_id: "tester",
            params: { name: "abc" },
        }
    };

    gtag('config', 'UA-198124867-1', { ...id.user.params, user_id: id.user.user_id });

    analytics.identify(id.user.user_id, id.user.params);
    analytics.group(id.group.group_id, id.group.params);

    rudderanalytics.identify(id.user.user_id, id.user.params);
    rudderanalytics.group(id.group.group_id, id.group.params);
})();


function testEvent() {
    gtag("event", "test", {
        event_category: "test anchor tags",
        event_label: "explore axis"
    });
}

/**
 * Track event
 * @param {string} name 
 * @param {object} params 
 */
function setEvent(name, params) {
    analytics.track(name, params);
    gtag("event", name, params);
    rudderanalytics.track(name, params);
}