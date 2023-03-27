(function () {
    var env = {
        domain: "api.segment.io",
        ga4Id: "UA-198124867-1",
    };

    setTracking();

    /** -------------------------------------
     * Set trackers
     -------------------------------------*/
    function setTracking() {
        var apiCall = window.fetch;

        // XHR tracker
        (function () {
            try {
                var open = window.XMLHttpRequest.prototype.open,
                    send = window.XMLHttpRequest.prototype.send;

                function openReplacement(method, url, async, user, password) {
                    this._url = url;
                    this._method = method;
                    return open.apply(this, arguments);
                }

                function sendReplacement(data) {
                    if (this.onreadystatechange) {
                        this._onreadystatechange = this.onreadystatechange;
                    }
                    trackEvent(this._url, this._method, data, "XHR");
                    this.onreadystatechange = onReadyStateChangeReplacement;
                    return send.apply(this, arguments);
                }

                function onReadyStateChangeReplacement() {
                    if (this._onreadystatechange) {
                        return this._onreadystatechange.apply(this, arguments);
                    }
                }

                window.XMLHttpRequest.prototype.open = openReplacement;
                window.XMLHttpRequest.prototype.send = sendReplacement;
            } catch (error) {
                console.log(error);
            }
        })();

        // Fetch tracker
        (function () {
            const nativeFetch = window.fetch;
            window.fetch = function (...args) {
                try {
                    trackEvent(args[0], args[1].method, args[1].body, "fetch");
                    return nativeFetch.apply(window, args);
                } catch (error) {
                    console.log(error);
                }
            }
        })();

        // Ping tracker
        (function () {
            const nativeFetch = navigator.sendBeacon;
            navigator.sendBeacon = function (...args) {
                try {
                    var data = args[1];
                    try {
                        data = JSON.parse(data);
                    } catch (error) { }
                    trackEvent(args[0], "POST", data, "ping");
                    return nativeFetch.apply(this, args);
                } catch (error) {
                    console.log(error);
                }
            }
        })();

        // GIF tracker
        (function () {
            var index = 0;
            setInterval(function () {
                try {
                    var requests = performance.getEntriesByType("resource");
                    for (var i = index; i < requests.length; i++) {
                        if (requests[i].initiatorType != "img")
                            continue;
                        trackEvent(requests[i].name, "GET", null, "GIF");
                    }
                    index = requests.length;
                } catch (error) {
                    console.log(error);
                }
            }, 10);
        })();

        /** -------------------------------------
         * Track an API
         * @param {*} url 
         * @param {*} method 
         * @param {*} body 
         * @param {*} type 
         -------------------------------------*/
        function trackEvent(url, method, body, type) {
            try {
                var domain = domainOf(url);
                if (env.domain != domain)
                    return;
                switch (body.type) {
                    case "page":
                        break;
                    case "identify":
                    case "group":
                        // publish("config", env.ga4Id, { user_id: body.userId, ...objSerialize(body.traits) });
                        break;
                    case "track":
                        publish("event", body.event, objSerialize(body.properties));
                }
            } catch (error) {
                console.log(error);
            }
        }

        /**
         * Serialize the object provided
         * @param {*} obj 
         * @param {string} merger : (optional) '.' by default
         */
        function objSerialize(obj, merger, result, prefix) {
            merger = merger || ".";
            result = result || {};
            prefix = prefix || "";
            switch (typeof obj) {
                case "object":
                    for (let i in obj)
                        objSerialize(obj[i], merger, result, prefix + i + merger);
                    break;
                default:
                    if (prefix[prefix.length - 1] == merger)
                        prefix = prefix.slice(0, -1);
                    result[prefix] = obj;
            }
            return result;
        }

        /** -------------------------------------
         * Extract domain out of url
         * @param {*} url 
         -------------------------------------*/
        function domainOf(url) {
            var domain = url.replace(/^https?:\/\//, '').replace(/^www\./, '');
            domain = domain.split("/")[0];
            return domain;
        }

        /** -------------------------------------
         * Publish to gtag
         * @param {*} params
         -------------------------------------*/
        function publish(...params) {
            if (!gtag)
                return;
            gtag(...params);
        }
    }// SetTracking()
})();