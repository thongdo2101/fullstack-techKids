const express = require('express');
const Router = express.Router();
const QuestionController = require('../controllers/questionController');
Router.get("/", (req, res) => {
    try {
        QuestionController.getQuestions((err, questions) => {
            if (questions.length > 0 && typeof (questions) !== undefined) {
                let question = questions[Math.floor(Math.random() * questions.length) + 0];
                res.render('home', {
                    question: question.questionContent,
                    id: question._id,
                    flag:true
                });
            } else {
                res.render('home', {
                    question: "The question list is empty",
                    flag: false
                });
            }
        });
        // QuestionController.getRandom((err, question) => {
        //     res.render('home', {
        //         question: question.questionContent,
        //         id: question._id,
        //     });
        // });
    } catch (ex) {
        console.log(ex);
    }
});

Router.post("/", (req, res) => {
    try {
        QuestionController.getRandom((err, question) => {
            res.json({question});
        });
    } catch (ex) {
        console.log(ex);
    }

});

module.exports = Router;