const axios = require("axios").default;

const api = {
  url: "https://api.gridlines.io/gstin-api/fetch-detailed",
  method: "post",
};

/**
 * Get gst details against the gst number
 * @param {string} gstin 
 * @returns 
 */
module.exports = async function (gstin) {
  let result = await callApi(gstin);
  return result?.data?.gstin_data;
}



async function callApi(gstin) {
  return (await axios.post(api.url, {
    gstin, consent: "Y"
  }, { headers: {
    "Content-Type": "application/json",
    "X-API-Key": "aKo9XLK4BebbJvfRPhhbbdTCUFKpr0YE",
    "X-Auth-Type": "API-Key",
  } })).data;
}