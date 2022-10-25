(function () {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        this.addEventListener('load', function (e) {
            console.log('Tracked by XHR', this);
        });
        origOpen.apply(this, arguments);
    };
})();

(function () {
    const nativeFetch = window.fetch;
    window.fetch = function (...args) {
        console.log('Tracked by fetch', ...args);
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
                    console.log("Tracked by performance.getEntriesByType", requests[i].name);
                }
            }
        }
        index = requests.length;
    }, 10);
})();