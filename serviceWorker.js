(function () {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    "use strict";
    new (function () {
        var a = self,
            b = this;
        this.l = a;
        this.g = new Tb(a);
        this.l.addEventListener(
            "install",
            function (c) {
                c.waitUntil(b.l.skipWaiting());
            },
            !1
        );
        this.l.addEventListener(
            "fetch",
            function (c) {
                console.log(b, c);
            },
            !1
        );
        this.l.addEventListener(
            "activate",
            function (c) {
                console.log(b, c);
            },
            !1
        );
        this.l.addEventListener(
            "message",
            function (c) {
                console.log(b, c);
            },
            !1
        );
    })();
}.call(this));
