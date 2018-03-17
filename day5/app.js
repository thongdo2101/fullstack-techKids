const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
let app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render('home', {
        number: {
            a: Math.random() * 2001 - 1000
        },
        htmlData: '<h2>Render HTML</h2>'
    });
});

app.get("/ask", (req, res) => {
    res.render('ask');
});

app.post('/ask', (req, res) => {
    try {
        let data = fileController.readFileSync('./data.json');
        let id = data.length + 1;
        data.push({
            id: id,
            questionContent: req.body.question
        });
        fileController.writeFile('./data.json', data, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/question/' + id);
        });
    } catch (ex) {
        console.log(ex);
    }
});
app.get('/question/:id', (req, res) => {
    try {
        let questions = [...fileController.readFileSync('./data.json')];
        let question = questions[req.params.id - 1];
        res.render('question', {
            question: question.questionContent
        });
    } catch (ex) {
        console.log(ex);
    }
});

app.use(express.static("public"));

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});