const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const fileController = require('./controllers/fileController');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('home');
});
app.post('/addround/:idGame', (req, res) => {
    var records = fileController.readFileSync('./records.json');
    let idRound = records.length + 1;
    var idGame = req.params.idGame;
    var newRound = {
        idGame: idGame,
        idRound: idRound,
        p1score: 0,
        p2score: 0,
        p3score: 0,
        p4score: 0
    };
    records.push(newRound);

    fileController.writeFile('./records.json', records, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/game/' + idGame);
    });
});
app.use("/game/:id", (req, res) => {
    var data = fileController.readFileSync('./data.json');
    let idGame = req.params.id;
    var records = fileController.readFileSync('./records.json');
    var rounds = [];
    records.forEach(round => {
        if (round.idGame == idGame) {
            rounds.push(round);
        }
    });
    var rounds2 = rounds.map(round => ({
        idGame: round.idGame,
        idRound: round.idRound,
        p1score: round.p1score,
        p2score: round.p2score,
        p3score: round.p3score,
        p4score: round.p4score,
        index: rounds.indexOf(round)
    }));
    res.render('inGame', {
        data: data[idGame - 1],
        rounds: rounds2
    });
});


app.post("/", (req, res) => {
    var player1 = req.body.player1;
    var player2 = req.body.player2;
    var player3 = req.body.player3;
    var player4 = req.body.player4;
    try {
        var data = fileController.readFileSync('./data.json');
        let idGame = data.length + 1;
        data.push({
            id: idGame,
            p1: player1,
            p2: player2,
            p3: player3,
            p4: player4
        });

        fileController.writeFile('./data.json', data, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/game/' + idGame);
        });

    } catch (err) {
        console.log(err);
    }
});

mongoose.connect('mongodb://localhost/quyetdedb', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Database connect success !!!');
});

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 8080");
});