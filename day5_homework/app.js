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

app.post('/addQues', (req, res) => {
    try {
        let data = fileController.readFileSync('./data.json');
        let id = data.length + 1;
        data.push({
            id: id,
            questionContent: req.body.question,
            yes: 0,
            no: 0
        });
        fileController.writeFile('./data.json', data, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    } catch (ex) {
        console.log(ex);
    }
});
app.get('/addQues', (req, res) => {
    res.render('addQues');
});
app.get("/", (req, res) => {
    try {
        let questions = [...fileController.readFileSync('./data.json')];
        if (questions.length > 0 && typeof (questions) !== undefined) {
            let question = questions[Math.floor(Math.random() * questions.length) + 0];
            res.render('home', {
                question: question.questionContent,
                id: question.id,
                yes: "<a href='/vote/" + question.id + "/1'><button type='button' name='btnYes' value='1'>Yes</button></a>",
                no: "<a href='/vote/" + question.id + "/0'><button type='button' name='btnNo' value='0'>No</button></a>"
            });
        } else {
            res.render('home', {
                question: "The question list is empty"
            });
        }
    } catch (ex) {
        console.log(ex);
    }
});
app.get('/vote/:id/:value', (req, res) => {
    try {
        var data = fileController.readFileSync('./data.json');
        let id = req.params.id;
        let value = req.params.value;
        data.forEach(element => {
            if (element.id == id) {
                if (req.params.value == 1) {
                    element.yes = Number(element.yes + 1);
                } else {
                    element.no = Number(element.no + 1);
                }
            }
        });
        fileController.writeFile('./data.json', data, (err) => {
            if (err) {
                console.log(err);
            }
            res.render('vote', {
                data: data
            });
        });
    } catch (ex) {
        console.log(ex);
    }
});

app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});