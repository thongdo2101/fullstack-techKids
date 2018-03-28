const express = require('express');
const Router = express.Router();

const QuestionController = require('../controllers/questionController');
Router.get('/:id', (req, res) => {
    var id = req.params.id;
    QuestionController.getQuestionByID(id, (err, data) => {
        if (data.yes == 0 && data.no == 0) {
            res.render('vote', {
                data: data,
                yesPercent: 50,
                noPercent: 50
            });
        } else {
            res.render('vote', {
                data: data,
                yesPercent: ((data.yes / (data.yes + data.no)) * 100).toFixed(2),
                noPercent: ((data.no / (data.yes + data.no)) * 100).toFixed(2)
            });
        }
    });

});
Router.get('/:id/:value', (req, res) => {
    try {
        let id = req.params.id;
        let value = req.params.value;
        QuestionController.getQuestionByID(id, (err, data) => {
            QuestionController.updateQuestionByID(id, value, data.yes, data.no, (err) => {
                if (err) {
                    console.log(err);
                }
                QuestionController.getQuestionByID(id, (err1, data1) => {
                    if (data1.yes == 0 && data1.no == 0) {
                        res.render('vote', {
                            data: data1,
                            yesPercent: 50,
                            noPercent: 50
                        });
                    } else {
                        res.render('vote', {
                            data: data1,
                            yesPercent: (data1.yes / (data1.yes + data1.no)) * 100,
                            noPercent: (data1.no / (data1.yes + data1.no)) * 100
                        });
                    }
                });

            });

        });
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = Router;