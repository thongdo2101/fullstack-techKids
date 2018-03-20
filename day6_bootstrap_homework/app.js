const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();
const homeRouter = require('./routers/homeRouter');
const addQues = require('./routers/addQuesRouter');
const voteRouter = require('./routers/voteRouter');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', homeRouter);
app.use('/addQues', addQues);
app.use('/vote', voteRouter);

app.use(express.static('public'));

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});