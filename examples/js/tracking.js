(function () {
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

    (function () {
        const nativeFetch = window.fetch;
        window.fetch = function (...args) {
            trackEvent(args[0], args[1].method, args[1].body, "fetch");
            return nativeFetch.apply(window, args);
        }
    })();

    (function () {
        const nativeFetch = navigator.sendBeacon;
        navigator.sendBeacon = function (...args) {
            console.log('Tracked by ping', ...args);
            return nativeFetch.apply(this, args);
        }
    })();

    (function () {
        let index = 0;
        let trackingDomains = ["www.google-analytics.com"];
        setInterval(function () {
            let requests = performance.getEntriesByType("resource");
            for (let i = index; i < requests.length; i++) {
                if (requests[i].initiatorType != "img")
                    continue;
                for (let trackingDomain of trackingDomains) {
                    if (requests[i].name.includes(trackingDomain)) {
                        trackEvent(requests[i].name, "GET", null, "GIF");
                    }
                }
            }
            index = requests.length;
        }, 10);
    })();


    function trackEvent(url, method, body, type) {
        console.log(type, url, method, body);
    }
})();