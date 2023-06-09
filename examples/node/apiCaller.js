let axios = require("axios").default;

let get = "{\n  user(user_id: 1) {\n    username\n  }\n}";
let create = "{\n  create {\n    username\n  }\n}";

axios.post("http://localhost:3000", {
    "query": `query ExampleQuery ${create}\n`,
    "variables": {},
    "operationName": "ExampleQuery"
}).then(resp => console.log(resp.data)).catch(err => console.error(err));