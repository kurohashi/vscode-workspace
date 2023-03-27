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
        // Fetch tracker
        (function () {
            const nativeFetch = window.fetch;
            window.fetch = function (...args) {
                try {
                    args[1] = args[1] || {};
                    trackEvent(args[0], args[1].method || "GET", args[1].body || {}, "fetch");
                } catch (error) {
                    console.log(error);
                }
                return nativeFetch.apply(window, args);
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