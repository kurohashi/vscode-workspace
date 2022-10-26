(function () {
    var env = {
        gid: "",
        cdn: "unireply.com/vscode-workspace/examples/js/tracking.js",
        srcId: "",
        platform: "",
    };
    var conf = {
        platDomainMap: {
            ga: ["www.google-analytics.com"],
        }
    };

    init();

    /** -------------------------------------
     * Init of the script
     -------------------------------------*/
    function init() {
        setEnv();
        setTracking();
    }

    /** -------------------------------------
     * Get gid from src of current running script tag
     -------------------------------------*/
    function setEnv() {
        try {
            var scripts = document.getElementsByTagName("script");
            for (var i in scripts) {
                if (scripts[i].src && scripts[i].src.includes(env.cdn)) {
                    var src = scripts[i].src;
                    src = src.slice(src.indexOf('?') + 1);
                    src = getQuery(src);
                    if (src.rcl) {
                        let data = JSON.parse(decodeURIComponent(atob(src.rcl)));
                        for (var i in data) {
                            env[i] = data[i];
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }//setEnv()

    /** -------------------------------------
     * get URL params as an object
     * @param url : (optional) provide exclusive url string
     -------------------------------------*/
    function getQuery(url) {
        try {
            var str = window.location.search.slice(1);
            if (url)
                str = url;
            var foo = str.split(/[?,&]+/);
            var obj = {};
            for (var i in foo) {
                var bar = foo[i].split("=");
                if (bar[0] && bar[1])
                    obj[bar[0]] = bar[1];
            }
            console.log("seach params", obj);
            return obj;
        } catch (error) {
            return {};
        }
    }//getQuery()

    /** -------------------------------------
     * Set trackers
     -------------------------------------*/
    function setTracking() {
        var trackingDomains = conf.platDomainMap[env.platform];

        // XHR tracker
        (function () {
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
        })();

        // Fetch tracker
        (function () {
            const nativeFetch = window.fetch;
            window.fetch = function (...args) {
                trackEvent(args[0], args[1].method, args[1].body, "fetch");
                return nativeFetch.apply(window, args);
            }
        })();

        // Ping tracker
        (function () {
            const nativeFetch = navigator.sendBeacon;
            navigator.sendBeacon = function (...args) {
                console.log('Tracked by ping', ...args);
                return nativeFetch.apply(this, args);
            }
        })();

        // GIF tracker
        (function () {
            var index = 0;
            setInterval(function () {
                var requests = performance.getEntriesByType("resource");
                for (var i = index; i < requests.length; i++) {
                    if (requests[i].initiatorType != "img")
                        continue;
                    trackEvent(requests[i].name, "GET", null, "GIF");
                }
                index = requests.length;
            }, 10);
        })();

        /**
         * Track an API
         * @param {*} url 
         * @param {*} method 
         * @param {*} body 
         * @param {*} type 
         */
        function trackEvent(url, method, body, type) {
            for (var trackingDomain of trackingDomains) {
                if (requests[i].name.includes(trackingDomain)) {
                    console.log(type, url, method, body);
                }
            }
        }
    }// SetTracking()
})();