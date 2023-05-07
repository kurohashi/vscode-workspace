(function () {
    var counts = {
        kaliper: {
            t: 0,
            i: 0,
            g: 0,
        },
        segment: {
            t: 0,
            i: 0,
            g: 0,
        },
    }, firstSegmentError = false, errorMargin = 4, maxErrors = 4;
    setFetchTracker();
    start();
    /**
     * Start of the logic
     * @returns 
     */
    function start() {
        var requests = performance.getEntriesByType("resource"), count = 0;
        for (var i = 0; i < requests.length; i++) {
            if (requests[i].initiatorType == "script" && requests[i].name.includes("cdn.segment.com")) {
                count++;
            }
        }
        if (count < 3) {
            return setTimeout(function () { start() }, 10);
        }
        setInterceptor();
    }

    /**
     * Set the segment interceptor
     */
    function setInterceptor() {
        var kal_track = window.analytics.track, kal_id = window.analytics.identify, kal_gr = window.analytics.group;
        window.analytics.track = function () {
            console.log("segment track intercepted", arguments);
            handleIntercept("t", arguments, kal_track);
        }
        window.analytics.identify = function () {
            console.log("segment identify intercepted", arguments);
            handleIntercept("i", arguments, kal_id);
        }
        window.analytics.group = function () {
            console.log("segment group intercepted", arguments);
            handleIntercept("g", arguments, kal_gr);
        }
    }

    /**
     * Track fetch API
     */
    function setFetchTracker() {
        var originalFetchApi = window.fetch;
        window.fetch = async function () {
            setSegmentCounts(arguments);
            return originalFetchApi(arguments);
        }
    }

    /**
     * Increase the counter of the segment events
     * @param {*} args 
     */
    function setSegmentCounts(args) {
        let url = args[0];
        if (!url.includes("api.segment.io"))
            return;
        var parts = url.split("/");
        var eventType = parts[parts.length - 1];
        if (counts.segment[eventType])
            counts.segment[eventType]++;
        handleErrors(eventType, args);
    }

    /**
     * Handle segment SDk intercepts
     * @param {string} type 
     * @param {Array} args 
     * @param {Function} origFunc
     */
    function handleIntercept(type, args, origFunc) {
        origFunc(window, args);
        counts.kaliper[type]++;
    }

    /**
     * Check for errors in counts and handle them
     * @param {*} type 
     * @param {*} args : API call data
     */
    function handleErrors(type, args) {
        if ((counts.segment[type] - counts.kaliper[type]) > 0) {
            return segmentLibError(type, args);
        } else if (counts.kaliper[type] > counts.segment[type]) {
            return kalLogicError(type, args);
        }
    }

    /**
     * Check for errors in counts and handle them
     * @param {*} type 
     * @param {*} args : API call data
     */
    function kalLogicError(type, args) {
        sendKalEvent("kaliper#codeLogic#sdkInterceptor#error", "segment", args);
    }

    /**
     * Check for errors in counts and handle them
     * @param {*} type 
     * @param {*} args : API call data
     */
    function segmentLibError(type, args) {
        if (!firstSegmentError) {
            firstSegmentError = true;
            return setInterceptor();
        }
        if ((counts.segment[type] - counts.kaliper[type]) > errorMargin)
            sendKalEvent("kaliper#segment#sdkInterceptor#error", "segment", args);
    }

    /**
     * Send the event to kaliper
     * @param {*} name 
     * @param {*} library 
     * @param {*} apiArgs 
     */
    function sendKalEvent(name, library, apiArgs) {}
})();