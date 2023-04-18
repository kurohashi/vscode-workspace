(function () {
    var env = {
        domain: "api.segment.io",
        ga4Id: "G-RH3RP1FD12",
    };

    setTracking();

    /** -------------------------------------
     * Set trackers
     -------------------------------------*/
    function setTracking() {
        // Fetch tracker
        (function () {
            var nativeFetch = window.fetch;
            window.fetch = function () {
                try {
                    arguments[1] = arguments[1] || {};
                    trackEvent(arguments[0], arguments[1].method || "GET", arguments[1].body || {}, "fetch");
                } catch (error) {
                    console.log(error);
                }
                return nativeFetch.apply(window, Object.assign([], arguments));
            }
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
                if (env.domain != domain) {
                    return;
                }
                window.dataLayer = window.dataLayer || [];
                try {
                    body = JSON.parse(body);
                } catch (error) { }
                switch (body.type) {
                    case "page":
                        break;
                    case "identify":
                    case "group":
                        var traits = { user_id: body.userId };
                        Object.assign(traits, objSerialize(body.traits));
                        gtag("config", env.ga4Id, traits);
                        break;
                    case "track":
                        gtag("event", body.event, objSerialize(body.properties));
                    // publish({ event: body.event, ...objSerialize(body.properties) });
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
                    for (var i in obj)
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

        /**
         * GTAG function from the GA4 script
         */
        function gtag() {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(arguments);
        }
    }// SetTracking()
})();