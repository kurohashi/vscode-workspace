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

// TrackingPlan
(function () {
    function a(a) {
        var b = {
            method: "POST",
            endpoint: "TRACKINGPLAN",
            payload: JSON.stringify(a)
        };
        n(b)
    }

    function b(a) {
        if (_.includes("img"))
            try {
                g(a)
            }
            catch (a) {
                F(a)
            }
        if (_.includes("xhr"))
            try {
                i(a)
            }
            catch (a) {
                F(a)
            }
        if (_.includes("beacon"))
            try {
                j(a)
            }
            catch (a) {
                F(a)
            }
        if (_.includes("form")) try {
            m(a)
        } catch (a) {
            F(a)
        }
        if (_.includes("ws")) try {
            l(a)
        } catch (a) {
            F(a)
        }
        if (_.includes("fetch")) try {
            k(a)
        } catch (a) {
            F(a)
        }
    }

    function c() {
        var a = d();
        if (null !== a && !Z) return !1;
        var b = {
            landing: document.location.href,
            referrer: document.referrer
        };
        return I.setItem("_trackingplan_initial", JSON.stringify(b)), !0
    }

    function d() {
        return JSON.parse(I.getItem("_trackingplan_initial"))
    }

    function e() {
        try {
            if (I.setItem("_tp_t", "a"), "a" !== I.getItem("_tp_t")) return !1;
            if (I.removeItem("_tp_t"), "function" != typeof navigator.sendBeacon) return !1
        } catch (a) {
            return !1
        }
        return !0
    }

    function f(a) {
        return "string" == typeof a || a instanceof String
    }

    function g(a) {
        var b = a.Object.getOwnPropertyDescriptor(a.HTMLImageElement.prototype, "src").set;
        a.Object.defineProperty(a.HTMLImageElement.prototype, "src", {
            set: function (a) {
                return !f(a) || 2048 < a.length ? b.apply(this, arguments) : (n({
                    method: "GET",
                    endpoint: a,
                    protocol: "img"
                }), b.apply(this, arguments))
            }
        });
        var c = a.HTMLImageElement.prototype.setAttribute;
        a.HTMLImageElement.prototype.setAttribute = function (a, b) {
            if ("src" == a.toLowerCase()) {
                if (!f(b) || b.length > 2048) return c.apply(this, arguments);
                n({
                    method: "GET",
                    endpoint: b,
                    protocol: "img"
                })
            }
            return c.apply(this, arguments)
        }
    }

    function h(a) {
        var b = a;
        try {
            b instanceof FormData && (b = JSON.stringify(Object.fromEntries(b)))
        } catch (a) { }
        return b
    }

    function i(a) {
        var b = a.XMLHttpRequest.prototype.open,
            c = a.XMLHttpRequest.prototype.send;
        a.XMLHttpRequest.prototype.open = function (a, c) {
            return this._tpUrl = c, this._tpMethod = a, b.apply(this, arguments)
        }, a.XMLHttpRequest.prototype.send = function (a) {
            var b = h(a);
            return n({
                method: this._tpMethod,
                endpoint: this._tpUrl,
                payload: b,
                protocol: "xhr"
            }), c.apply(this, arguments)
        }
    }

    function j(a) {
        var b = a.navigator.sendBeacon;
        a.navigator.sendBeacon = function (a, c) {
            if (!f(a) || 2048 < a.length) return b.apply(this, arguments);
            var d = h(c);
            return n({
                method: "POST",
                endpoint: a,
                payload: d,
                protocol: "beacon"
            }), b.apply(this, arguments)
        }
    }

    function k(a) {
        var b = a.fetch;
        a.fetch = function (a, c) {
            if (!f(a) || 2048 < a.length) return b.apply(this, arguments);
            var d = "GET",
                e = null;
            return void 0 !== c && (void 0 !== c.method && (d = c.method.toUpperCase()), void 0 !== c.body && (e = h(c.body))), n({
                method: d,
                endpoint: a,
                payload: e,
                protocol: "fetch"
            }), b.apply(this, arguments)
        }
    }

    function l(a) {
        var c = a.WebSocket;
        a.WebSocket = function (d, a) {
            return a ? new c(d, a) : new c(d)
        };
        var b = c.prototype.send;
        c.prototype.send = function (a) {
            ({
                method: "WS",
                endpoint: this.url,
                payload: a,
                protocol: "ws"
            });
            return n({
                method: "WS",
                endpoint: this.url,
                payload: a,
                protocol: "ws"
            }), b.apply(this, arguments)
        }, a.WebSocket.prototype = c.prototype
    }

    function m(a) {
        a.addEventListener("submit", function (a) {
            try {
                var b = a ? a.target : this,
                    c = {
                        method: b.method,
                        endpoint: b.action,
                        payload: JSON.stringify({
                            location: J.location.href,
                            form_id: b.id,
                            method: b.method,
                            form_data: Object.fromEntries(new FormData(b))
                        }),
                        protocol: "form"
                    };
                n(c)
            } catch (a) { }
        }, !0)
    }

    function n(a, b) {
        setTimeout(function () {
            try {
                var c = D(a);
                if ("TRACKINGPLAN" == a.endpoint && (c = "trackingplan"), !c) return;
                var d = B();
                return !1 === d ? (ga.push(a), F({
                    m: "Pre queued, queue length = " + ga.length
                }), setTimeout(z, U), !1) : (null === ja && (ja = v(), ka = JSON.stringify(ja).length), !s(W, d)) ? (F({
                    m: "Request ignored (sampling)",
                    mode: W,
                    dict: d
                }), !0) : (o(t(a, c)), "function" == typeof b && b(), !0)
            } catch (b) {
                G({
                    m: "Trackingplan process error",
                    error: b,
                    request: a
                })
            }
        }, 0)
    }

    function o(a) {
        ba(a);
        var b = JSON.stringify(a);
        if (2e5 < b.length && F({
            m: "Track Too big, ignored: " + b.length
        }), b.length + 2 + ka > X) return r("[" + b + "]", Q), void F({
            m: "Track > Batch Size: " + b.length
        });
        var c = ha.length + b.length + ka;
        c > X && (F({
            m: "Batch reaching limit: " + c
        }), p(Q)), c = ha.length + b.length + ka, F({
            m: "Queue len: " + c,
            rawTrack: a
        }), 0 !== ha.length && (ha += ","), ha += b
    }

    function p(a) {
        if (0 != ha.length) {
            var b = ha;
            ha = "";
            var c = {
                requests: JSON.parse("[" + b + "]"),
                common: ja
            };
            r(c, a)
        }
    }

    function q() {
        var a = S + N;
        return da && (a += "?debug=true"), a
    }

    function r(a, b) {
        return ("function" == typeof ca && (a = ca(a)), F({
            m: "Sent",
            payload: a
        }), $) ? void F("Not sending, is dry run") : void ("xhr" === b ? function (a) {
            var b = new XMLHttpRequest;
            b.open("POST", q(), !0), b.onreadystatechange = function () {
                if (4 === b.readyState) try {
                    F({
                        m: "Parsed",
                        response: JSON.parse(b.response)
                    }), aa(a, b.response)
                } catch (a) { }
            }, b.send(a)
        }(JSON.stringify(a)) : "beacon" === b ? function (a) {
            navigator.sendBeacon(q(), a)
        }(JSON.stringify(a)) : void 0)
    }

    function s(a, b) {
        switch (a) {
            case "user":
                return 1 === b.isSampledUser;
            case "track":
                return Math.random() < 1 / b.sampleRate;
            case "all":
                return !0;
            case "none":
            default:
                return !1;
        }
    }

    function t(a, b) {
        return {
            provider: b,
            request: {
                endpoint: a.endpoint,
                method: a.method,
                post_payload: a.payload || null,
                protocol: a.protocol,
                href: J.location.href
            }
        }
    }

    function u() {
        return E({
            hostname: J.location.hostname,
            user_agent: navigator.userAgent,
            load_url: ia
        }, d())
    }

    function v() {
        return {
            context: u(),
            tp_id: N,
            source_alias: P,
            environment: O,
            sdk: la.sdk,
            sdk_version: la.sdkVersion,
            sampling_rate: B().sampleRate,
            debug: R,
            tags: ea
        }
    }

    function w() {
        try {
            for (var a = window.performance.getEntriesByType("resource"), b = {}, c = [], d = 0; d < a.length; d++) {
                c.push(a[d].name);
                var e = "",
                    f = a[d].name.replace(/(^\w+:|^)\/\//, ""),
                    g = f.split("?"),
                    h = g[0];
                g = h.split("/"), e = 1 < g.length ? g[0] + "/" + g[1] : g[0];
                var j = e;
                b.hasOwnProperty(j) || (b[j] = 0), b[j]++
            }
            return b
        } catch (a) {
            return null
        }
    }

    function x() {
        for (; ga.length;) {
            var a = ga.shift();
            n(a)
        }
    }

    function y(a, b) {
        var c = Object.prototype.hasOwnProperty;
        return c.call(a, "environment_rates") && c.call(a.environment_rates, b) ? a.environment_rates[b] : a.sample_rate
    }

    function z() {
        if (!fa) {
            var b = new XMLHttpRequest,
                c = T + "config-" + N + ".json";
            b.onreadystatechange = function () {
                if (4 == this.readyState) try {
                    A(y(JSON.parse(this.responseText), O)), a({
                        event_name: "new_dau"
                    }), x()
                } catch (a) { }
                fa = !1
            }, b.open("GET", c, !0), fa = !0, b.send()
        }
    }

    function A(a) {
        if (!1 === a) return I.removeItem("_trackingplan_sample_rate"), I.removeItem("_trackingplan_sample_rate_ts"), void I.removeItem("_trackingplan_is_sampled_user");
        var b = Math.random() < 1 / a ? 1 : 0;
        F({
            m: "Trackingplan sample rate = " + a + ". isSampledUser " + b
        }), I.setItem("_trackingplan_sample_rate_ts", new Date().getTime()), I.setItem("_trackingplan_sample_rate", a), I.setItem("_trackingplan_is_sampled_user", b)
    }

    function B() {
        var a = I.getItem("_trackingplan_sample_rate_ts");
        return null !== a && (parseInt(a) + 1e3 * V < new Date().getTime() ? (F({
            m: "Trackingplan sample rate expired"
        }), A(!1), !1) : {
            sampleRate: parseInt(I.getItem("_trackingplan_sample_rate")),
            isSampledUser: parseInt(I.getItem("_trackingplan_is_sampled_user"))
        })
    }

    function C(a, b) {
        if (null === a || null === b) return !0;
        if ("/" === a[0]) {
            var c = new RegExp(a.slice(1, -1));
            return c.test(b)
        }
        return -1 !== b.indexOf(a)
    }

    function D(a) {
        var b = a.endpoint,
            c = a.payload;
        if (f(b)) {
            for (var d in M) {
                var e = d.split("%"),
                    g = e[0],
                    h = 2 === e.length ? e[1] : null;
                if (C(g, b) && C(h, c)) return M[d]
            }
            return !1
        }
    }

    function E(b, c) {
        for (var d in c) b[d] = c[d];
        return b
    }

    function F(a) {
        R && K.log("TP " + N, a)
    }

    function G(a) {
        J.console && K.warn && K.warn(a)
    }

    function H() {
        function a() {
            for (var a = document.getElementsByTagName("IFRAME"), b = 0; b < a.length; b++) d(a[b])
        }

        function c(a) {
            try {
                return !!a.contentDocument
            } catch (a) {
                return !1
            }
        }

        function d(a) {
            try {
                c(a) && (b(a.contentWindow), F("Intercepted frame " + a.id))
            } catch (a) { }
        }

        function e() {
            var a = new MutationObserver(function (a) {
                a.forEach(function (a) {
                    a.addedNodes.forEach(function (a) {
                        "IFRAME" == a.tagName && d(a)
                    })
                })
            });
            a.observe(document, {
                subtree: !0,
                childList: !0,
                attributes: !1,
                characterData: !1
            }), setTimeout(a.disconnect(), 4e3)
        }
        "complete" === document.readyState ? (a(), e()) : document.onreadystatechange = function () {
            "complete" === document.readyState && (a(), e())
        }
    }
    var I = localStorage,
        J = window,
        K = console;
    if (J.Trackingplan) return void G("Trackingplan snippet included twice.");
    var L = {
        "google-analytics.com": "googleanalytics",
        "analytics.google.com": "googleanalytics",
        "api.segment.io": "segment",
        segmentapi: "segment",
        "seg-api": "segment",
        "segment-api": "segment",
        "/.*api-iam.intercom.io/messenger/web/(ping|events|metrics|open).*/": "intercom",
        "api.amplitude.com": "amplitude",
        "ping.chartbeat.net": "chartbeat",
        "/.*api(-eu)?(-js)?.mixpanel.com.*/": "mixpanel",
        "trk.kissmetrics.io": "kissmetrics",
        "ct.pinterest.com": "pinterest",
        "facebook.com/tr/": "facebook",
        "track.hubspot.com/__": "hubspot",
        "/.*.heapanalytics.com/(h|api).*/": "heap",
        "/.*snowplow.*/": "snowplow",
        "/.*ws.*.hotjar.com/api/v2/client/ws/%identify_user": "hotjar",
        "/.*ws.*.hotjar.com/api/v2/client/ws/%tag_recording": "hotjar",
        "klaviyo.com/api/track": "klaviyo",
        "app.pendo.io/data": "pendo",
        "matomo.php": "matomo",
        "rs.fullstory.com/rec%8137": "fullstory",
        "rs.fullstory.com/rec%8193": "fullstory",
        "logx.optimizely.com/v1/events": "optimizely",
        "track.customer.io/events/": "customerio",
        "alb.reddit.com/rp.gif": "reddit",
        "px.ads.linkedin.com": "linkedin",
        "/i/adsct": "twitter",
        "bat.bing.com": "bing",
        "pdst.fm": "podsights",
        "analytics.tiktok.com/api/v2": "tiktok"
    },
        M = {},
        N = null,
        O = "PRODUCTION",
        P = null,
        Q = "xhr",
        R = !1,
        S = "https://tracks.trackingplan.com/v1/",
        T = "https://config.trackingplan.com/",
        U = 0,
        V = 86400,
        W = "user",
        X = 6e4,
        Y = 20,
        Z = !1,
        $ = !1,
        _ = ["img", "xhr", "beacon", "ws", "fetch"],
        aa = function () { },
        ba = function () { },
        ca = function (a) {
            return a
        },
        da = !1,
        ea = {},
        fa = !1,
        ga = [],
        ha = "",
        ia = "",
        ja = null,
        ka = 0,
        la = J.Trackingplan = {
            sdk: "js",
            sdkVersion: "1.13.0",
            setOptions: function (a, b) {
                b = b || {}, N = a, O = b.environment || O, P = b.sourceAlias || P, Q = b.sendMethod || Q, M = E(L, b.customDomains || {}), R = b.debug || R, S = b.tracksEndPoint || S, T = b.configEndPoint || T, U = b.delayConfigDownload || U, V = b.sampleRateTTL || V, W = b.samplingMode || W, X = b.batchSize || X, Y = b.batchInterval || Y, Z = b.alwaysSendNewUser || Z, $ = b.dryRun || $, _ = b.intercept || _, aa = b.onSubmit || aa, da = b.parse || da, ba = b.onQueue || ba, ca = b.onBeforeSubmit || ca, ea = b.tags || ea, F({
                    m: "TP options updated",
                    options: b
                })
            },
            init: function (d, f) {
                f = f || {};
                try {
                    if (!e()) throw new Error("TP Not compatible browser");
                    if (null !== N) throw new Error("TP Init already happened");
                    la.setOptions(d, f), ia = J.location.href, b(window), _.includes("frame") && H(), document.addEventListener("visibilitychange", function () {
                        "hidden" === document.visibilityState && p("beacon")
                    }), J.addEventListener("pagehide", function () {
                        p("beacon")
                    }), c() && a({
                        event_name: "new_user"
                    }), a({
                        event_name: "page_load"
                    }), setTimeout(function () {
                        a({
                            event_name: "pixels",
                            properties: {
                                pixels: w()
                            }
                        })
                    }, 1e4), setInterval(function () {
                        p(Q)
                    }, 1e3 * Y), F({
                        m: "TP init finished",
                        options: f
                    })
                } catch (a) {
                    G({
                        m: "TP init error",
                        error: a
                    })
                }
            }
        }
})();
Trackingplan.init("TP1158549", { "environment": "PRODUCTION" });

// Mixpanel code
(function (f, b) {
    if (!b.__SV) {
        var e, g, i, h;
        window.mixpanel = b;
        b._i = [];
        b.init = function (e, f, c) {
            function g(a, d) {
                var b = d.split(".");
                2 == b.length && (a = a[b[0]], d = b[1]);
                a[d] = function () {
                    a.push([d].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }
            var a = b;
            "undefined" !== typeof c ? a = b[c] = [] : c = "mixpanel";
            a.people = a.people || [];
            a.toString = function (a) {
                var d = "mixpanel";
                "mixpanel" !== c && (d += "." + c);
                a || (d += " (stub)");
                return d
            };
            a.people.toString = function () {
                return a.toString(1) + ".people (stub)"
            };
            i = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
            for (h = 0; h < i.length; h++) g(a, i[h]);
            var j = "set set_once union unset remove delete".split(" ");
            a.get_group = function () {
                function b(c) {
                    d[c] = function () {
                        call2_args = arguments;
                        call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
                        a.push([e, call2])
                    }
                }
                for (var d = {}, e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++) b(j[c]);
                return d
            };
            b._i.push([e, f, c])
        };
        b.__SV = 1.2;
        e = f.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
            MIXPANEL_CUSTOM_LIB_URL : "file:" === f.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
        g = f.getElementsByTagName("script")[0];
        g.parentNode.insertBefore(e, g)
    }
})(document, window.mixpanel || []);
// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('9ea23e8c424e40ae86a625ad3d00bd5f', { debug: true });


// Amplitude code
! function() {
    "use strict";
    ! function(e, t) {
        var r = e.amplitude || {
            _q: [],
            _iq: []
        };
        if (r.invoked) e.console && console.error && console.error("Amplitude snippet has been loaded.");
        else {
            var n = function(e, t) {
                    e.prototype[t] = function() {
                        return this._q.push({
                            name: t,
                            args: Array.prototype.slice.call(arguments, 0)
                        }), this
                    }
                },
                s = function(e, t, r) {
                    return function(n) {
                        e._q.push({
                            name: t,
                            args: Array.prototype.slice.call(r, 0),
                            resolve: n
                        })
                    }
                },
                o = function(e, t, r) {
                    e[t] = function() {
                        if (r) return {
                            promise: new Promise(s(e, t, Array.prototype.slice.call(arguments)))
                        }
                    }
                },
                i = function(e) {
                    for (var t = 0; t < g.length; t++) o(e, g[t], !1);
                    for (var r = 0; r < m.length; r++) o(e, m[r], !0)
                };
            r.invoked = !0;
            var u = t.createElement("script");
            u.type = "text/javascript", u.integrity = "sha384-GHWzi7MsT/TD3t0f+KUaVeuvPUsuVgdUKegrAWlzO4I83+klmUJna8WTuUunlsg6", u.crossOrigin = "anonymous", u.async = !0, u.src = "https://cdn.amplitude.com/libs/analytics-browser-1.6.6-min.js.gz", u.onload = function() {
                e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK")
            };
            var a = t.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(u, a);
            for (var c = function() {
                    return this._q = [], this
                }, l = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset", "preInsert", "postInsert", "remove", "getUserProperties"], p = 0; p < l.length; p++) n(c, l[p]);
            r.Identify = c;
            for (var d = function() {
                    return this._q = [], this
                }, v = ["getEventProperties", "setProductId", "setQuantity", "setPrice", "setRevenue", "setRevenueType", "setEventProperties"], f = 0; f < v.length; f++) n(d, v[f]);
            r.Revenue = d;
            var g = ["getDeviceId", "setDeviceId", "getSessionId", "setSessionId", "getUserId", "setUserId", "setOptOut", "setTransport", "reset"],
                m = ["init", "add", "remove", "track", "logEvent", "identify", "groupIdentify", "setGroup", "revenue", "flush"];
            i(r), r.createInstance = function() {
                var e = r._iq.push({
                    _q: []
                }) - 1;
                return i(r._iq[e]), r._iq[e]
            }, e.amplitude = r
        }
    }(window, document)
}();
amplitude.init("a937b463fd36ee7292b78c98f2ca5e0c");



// Events (click and page) tracking enabled
(window => {
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
 * @param {*} clicked_on 
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
})(window);


// Setting user identity
(function () {
    let id = {
        user: {
            user_id: 'shubham@tester',
            params: {
                name: "Shubham",
                address: { street: "Dwarka" },
                customId: { testData: [{ a: 1 }, {b: 2}] },
            }
        },
        group: {
            group_id: "tester",
            params: { name: "abc" },
        }
    };

    gtag('config', 'UA-198124867-1', { ...id.user.params, user_id: id.user.user_id });       // For GA/UA
    // gtag('config', 'G-MQPB24WXXC', { ...id.user.params, user_id: id.user.user_id });            // For GA4

    analytics.identify(id.user.user_id, id.user.params);
    analytics.group(id.group.group_id, id.group.params);

    rudderanalytics.identify(id.user.user_id, id.user.params);
    rudderanalytics.group(id.group.group_id, id.group.params);

    window.fibotalkSettings = {
        user: {
            userId: id.user.user_id,
            ...id.user.params,
        },
        account: {
            accountId: id.group.group_id,
            ...id.group.params,
        },
    };

    mixpanel.identify(id.user.user_id);
    mixpanel.people.set(id.user.params);
    mixpanel.add_group("company", "fibotalk");
    mixpanel.set_group("company", ["fibotalk"]);

    amplitude.setUserId(id.user.user_id);
    let identify = new amplitude.Identify();
    for (let i in id.user.params) {
        identify.set(i, id.user.params[i]);
    }
    amplitude.identify(identify);
    amplitude.setGroup("name", ["Shubham"]);
    identify = new amplitude.Identify();
    for (let i in id.group.params) {
        identify.set(i, id.group.params[i]);
    }
    amplitude.groupIdentify("name", "Shubham", identify);
})();

/**
 * Track event
 * @param {string} name 
 * @param {object} params 
 */
function setEvent(name, params) {
    analytics.track(name, params);
    gtag("event", name, params);
    rudderanalytics.track(name, params);
    // fibo.setEvent(name, null, params);
    mixpanel.track(name, params);
    amplitude.track(name, params);
}