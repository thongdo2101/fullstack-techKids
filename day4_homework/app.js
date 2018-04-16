const express = require('express');
const handlebars = require('express-handlebars');
let app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('home', {
        number: {
            a : Math.random()*2001 - 1000
        },
        htmlData : '<h2>Render HTML</h2>'
    });
});
app.get("/frontendpractice/style.css", (req, res) => {
    res.sendFile(__dirname + "/frontendpractice/style.css");
});
app.get("/frontendpractice", (req, res) => {
    res.sendFile(__dirname + "/frontendpractice/index.html");
});
app.get("/flexbox", (req, res) => {
    res.sendFile(__dirname + "/day3_homework_bonus/index.html");
});
app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});