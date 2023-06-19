let app = require("express")();


app.get("/test", function (req, res, next) {
    console.log(req.query, req.body)
    if (req.query.my == "success")
        return next();
    res.status(400).json({ msg: "auth failed" });
}, function (req, res) {
    res.status(200).json({ msg: "success" });
}, function (req, res) {
    res.status(200).json({ msg: "failed" });
});

app.listen(5000);