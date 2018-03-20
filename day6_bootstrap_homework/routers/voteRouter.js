const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');
Router.get('/:id', (req, res) => {
    var data = fileController.readFileSync('./data.json');
    let id = req.params.id;
    if (data[id - 1].yes == 0 && data[id - 1].no == 0) {
        res.render('vote', {
            data: data[id - 1],
            yesPercent: 50,
            noPercent: 50
        });
    } else {
        res.render('vote', {
            data: data[id - 1],
            yesPercent: (data[id - 1].yes / (data[id - 1].yes + data[id - 1].no)) * 100,
            noPercent: (data[id - 1].no / (data[id - 1].yes + data[id - 1].no)) * 100
        });
    }
});
Router.get('/:id/:value', (req, res) => {
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
            if (data[id - 1].yes == 0 && data[id - 1].no == 0) {
                res.render('vote', {
                    data: data[id - 1],
                    yesPercent: 50,
                    noPercent: 50
                });
            } else {
                res.render('vote', {
                    data: data[id - 1],
                    yesPercent: (data[id - 1].yes / (data[id - 1].yes + data[id - 1].no)) * 100,
                    noPercent: (data[id - 1].no / (data[id - 1].yes + data[id - 1].no)) * 100
                });
            }
        });
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = Router;