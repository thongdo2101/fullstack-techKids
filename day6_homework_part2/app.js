const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    try {
        res.render('home');
    } catch (ex) {
        console.log(ex);
    }
});

app.use(express.static('public'));

app.listen('6969', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});