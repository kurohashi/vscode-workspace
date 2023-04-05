var __gtm__originalFetchApi__ = window.fetch;

window.fetch = async function(...args) {
    var response = await __gtm__originalFetchApi__(...args);
    console.log("fetch response tracker", response);
    return response;
}