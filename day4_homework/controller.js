const express = require('express');

let app = express();
app.use(express.static("public/profile"));
app.use(express.static("public/frontendpractice"));
app.use(express.static("public/day3_homework_bonus"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/profile/index.html");
});
app.get("/frontendpractice/style.css", (req, res) => {
    res.sendFile(__dirname + "/public/frontendpractice/style.css");
});
app.get("/frontendpractice", (req, res) => {
    res.sendFile(__dirname + "/public/frontendpractice/index.html");
});
app.get("/flexbox", (req, res) => {
    res.sendFile(__dirname + "/public/day3_homework_bonus/index.html");
});
app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});