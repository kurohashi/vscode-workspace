let axios = require("axios").default;

axios.post("http://localhost:3000", {
    "query": "query ExampleQuery {\n  user(user_id: 1) {\n    username\n  }\n}\n",
    "variables": {},
    "operationName": "ExampleQuery"
}).then(resp => console.log(resp.data)).catch(err => console.error(err));