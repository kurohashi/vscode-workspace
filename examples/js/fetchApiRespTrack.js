const __gtm__originalFetchApi__ = window.fetch;

window.fetch = async function(...args) {
    var response = await __gtm__originalFetchApi__(...args);
    var url = response.url;
    try {
        var resp = await response.json();
        console.log("fetch response tracker", url, resp);
    } catch (error) {
        console.log(error, url, args);
    }
    return response;
}