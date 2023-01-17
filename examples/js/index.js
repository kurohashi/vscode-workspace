window.fibotalkSettings = {
    user: {
        userId: "shubham@rytangle.com",
        email: "shubham@rytangle.com",
        username: "Rytangle Tester",
        api_event: "tester",
    },
    account: {
        accountId: "local",
        org: "testing",
        type: "testers"
    }
};

function login() {
    fibo.login({
        user: {
            userId: "local",
            email: "shubham@fibo.com",
            name: "Fibo Tester",
        },
        account: {
            accountId: "local",
            org: "testing",
            type: "testers"
        }
    });
}

var xhr = new XMLHttpRequest();
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

function customEvent() {
    fibo.setEvent("Custom event", "random", {
        "city.name": "delhi"
    });
}

function clickMe() {
    let eventName = "test_event";
    let params = {
        custom_action: "click",
        cust2: "done something",
    };
    analytics.track(eventName, params);
    gtag('event', eventName, params);
}