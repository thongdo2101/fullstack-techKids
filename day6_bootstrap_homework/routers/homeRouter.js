const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');
Router.get("/", (req, res) => {
    try {
        let questions = [...fileController.readFileSync('./data.json')];
        if (questions.length > 0 && typeof (questions) !== undefined) {
            let question = questions[Math.floor(Math.random() * questions.length) + 0];
            res.render('home', {
                question: question.questionContent,
                id: question.id,
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
module.exports = Router;