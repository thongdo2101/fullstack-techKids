const questionSchema = require("../models/questionSchema");

let create = (question, callback) => {
    let newQuestion = {
        questionContent: question
    };
    questionSchema.create(newQuestion, (err, data) => {
        callback(err, data);
    });
};

let getQuestions = (callback) => {
    questionSchema.find((err, data) => {
        callback(err, data);
    });
};

let getQuestionByID = (id, callback) => {
    questionSchema.findById(id, (err, data) => {
        callback(err, data);
    });
};

let updateQuestionByID = (id, bool, yesVal, noVal, callback) => {
    if (bool == 1) {
        questionSchema.findByIdAndUpdate(id, {
            yes: yesVal + 1
        }, (err) => {
            callback(err);
        });
    }
    if (bool == 0) {
        questionSchema.findByIdAndUpdate(id, {
            no: noVal + 1
        }, (err) => {
            callback(err);
        });
    }
};

let getRandom = (callback) => {
    questionSchema.count().exec((err, count) => {

        var random = Math.floor(Math.random() * count);

        questionSchema.findOne().skip(random).exec(
            (err, result) => {
                callback(err, result);
            });
    });
};

module.exports = {
    create,
    getQuestions,
    getQuestionByID,
    updateQuestionByID,
    getRandom
};