let restaurants = require("../../assets/restaurants");
let { parse } = require("node-html-parser");

console.log(parse(restaurants.ghaziabad.nightlife));