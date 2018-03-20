const express = require('express');
const Router = express.Router();
const fileController = require('../fileController');
Router.post('/', (req, res) => {
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
Router.get('/', (req, res) => {
    res.render('addQues');
});
module.exports = Router;