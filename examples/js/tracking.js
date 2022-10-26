(function () {
    var env = {
        gid: "",
        cdn: "unireply.com/vscode-workspace/examples/js/tracking.js",
        connection: "",
        apis: {
            group: {
                url: "https://svmnfm1z31.execute-api.us-west-2.amazonaws.com/kaliper-staging-api/project",
                method: "GET",
                qs: { gid: "" },
            }
        }
    };
    var xhr = new XMLHttpRequest();

    init();

    /** -------------------------------------
     * Init of the script
     -------------------------------------*/
    function init() {
        setEnv();
        getGroupData(setTracking);
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
                    if (src.rcl && src.connection) {
                        env.gid = src.rcl;
                        env.connection = src.connection;
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }//setEnv()

    /** -------------------------------------
     * return true only if its a JSON object
     * @param {*} obj 
     -------------------------------------*/
    function isObject(obj) {
        if (Array.isArray(obj))
            return false;
        if (typeof obj === "object")
            return true;
        return false;
    }//isObject()

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
     * Generic API call request
     * @param {*} apiObj : request object containing {url: "", qs: {}, headers: {}, json: {}, method: "GET/POST/PUT/DELETE"}
     * @param {*} cb : callback to receive response
     -------------------------------------*/
    function request(apiObj, cb) {
        if (!(apiObj.url && apiObj.method))
            return cb("URL not provided");
        var url = apiObj.url;
        if (apiObj.qs && isObject(apiObj.qs)) {
            url += '?';
            for (var i in apiObj.qs)
                url += i + '=' + apiObj.qs[i] + '&';
            url = url.slice(0, -1);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                var status = xhr.status;
                var resp = "";
                try {
                    resp = JSON.parse(xhr.responseText);
                } catch (error) {
                    console.log(error);
                    return cb("Bad response");
                }
                if (status === 0 || (status >= 200 && status < 400)) {
                    return cb(null, resp.data);
                } else {
                    return cb(resp.msg || status);
                }
            }
        };
        xhr.open(apiObj.method, url);
        xhr.setRequestHeader("Content-Type", "application/json");
        if (apiObj.headers && isObject(apiObj.headers)) {
            for (var i in apiObj.headers) {
                if (i && apiObj.headers[i])
                    xhr.setRequestHeader(i, apiObj.headers[i]);
            }
        }
        var body = {};
        if (apiObj.json)
            body = apiObj.json;
        xhr.send(JSON.stringify(body));
    }//request()

    /** -------------------------------------
     * Fetch group data from gid
     * @param callback : callback after group data is fetched
     -------------------------------------*/
    function getGroupData(callback) {
        env.apis.group.qs.gid = env.gid;
        request(env.apis.group, function (err, data) {
            if (err)
                return console.log(err);
            console.log(data);
        });
    }//getGroupData()

    /** -------------------------------------
     * Set trackers
     * @param {*} group 
     * @returns 
     -------------------------------------*/
    function setTracking(group) {
        try {
            if (!group.settings.tracking.status)
                return;
        } catch (error) {
            return console.log("tracking disabled", error);
        }

        var trackingDomains = group.settings.tracking.domains;

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