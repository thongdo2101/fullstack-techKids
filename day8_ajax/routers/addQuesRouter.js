const express = require('express');
const Router = express.Router();
const questionController = require('../controllers/questionController');
Router.post('/', (req, res) => {
    try {
        questionController.create(req.body.question, (err, data) => {
            res.render('home', {
                question: data.questionContent,
                id: data._id,
                flag:true
            });
        });
    } catch (ex) {
        console.log(ex);
    }
});
Router.get('/', (req, res) => {
    res.render('addQues');
});
module.exports = Router;