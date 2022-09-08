const jwt = require("jsonwebtoken");
const secret =  Buffer.from("ABCDKALIPEREFGHZWKVUTSRQPONNMLJI0987654321", "base64");
// let encodedToken = jwt.sign({ key: "sample" }, secret, { expiresIn: 0 });
let encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1OWU0ZTJlNTdlIiwiZW1haWwiOiJzaHViaGFtQHJ5dGFuZ2xlLmNvbSIsImlhdCI6MTY2MjYxMzkzNiwiZXhwIjoxNjYyNjEzOTQxfQ.Tfb_aCrKou7_05z1KnmizGxhdB0pjcmIV7JUfZnQswE";
const decoded = jwt.decode(encodedToken, secret);

console.log(new Date(decoded.exp * 1000), new Date(decoded.iat * 1000));

jwt.verify(decoded);