const express = require('express');
const Router = express.Router();
const QuestionController = require('../controllers/questionController');
Router.get("/", (req, res) => {
    try {
        QuestionController.getQuestions((questions) => {
            if (questions.length > 0 && typeof (questions) !== undefined) {
                let question = questions[Math.floor(Math.random() * questions.length) + 0];
                res.render('home', {
                    question: question.questionContent,
                    id: question._id,
                });
            } else {
                res.render('home', {
                    question: "The question list is empty"
                });
            }
        });
    } catch (ex) {
        console.log(ex);
    }
});


module.exports = Router;