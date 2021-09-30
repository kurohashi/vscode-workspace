const app = require("express")();

app.get("/", function (req, res) {
    res.send(
        {
            "name": "Elon Musk",
            "email": "elon@spacex.com",
            "image": "link to image"
          }
    );
});

app.listen(25000, function () {
    console.log("Server started");
});