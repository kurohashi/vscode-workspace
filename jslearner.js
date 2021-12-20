var host = location.host.split(".");
if (host.length == 1) {
    // for localhost
    document.cookie = cookie;
} else {
    document.cookie = "a=1;domain=." + host.slice(1).join(".");
    var val = getCookie("a");
    if (!val || val != cvalue)
        document.cookie = "a=1;domain=." + location.host;
}

function getCookie(cname) {
    try {
        var cookie;
        var name = cookieSettings + "=";
        var decodedCookie = document.cookie;
        console.log(decodedCookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                cookie = c.substring(name.length, c.length);
                break;
            }
        }
        cookie = window.atob(cookie);
        cookie = JSON.parse(cookie);
        if (!cname)
            return cookie;
        if (cookie[cname])
            return cookie[cname];
    } catch (error) {
        console.log(error);
    }
    return null;
}