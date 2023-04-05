var __gtm__originalFetchApi__ = window.fetch;

window.fetch = async function(...args) {
    var response = await __gtm__originalFetchApi__(...args);
    var resp = await response.json();
    console.log("fetch response tracker", resp);
    return response;
}