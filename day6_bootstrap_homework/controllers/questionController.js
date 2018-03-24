const questionSchema = require("../models/questionSchema");

let create = (question, callback) => {
    let newQuestion = {
        questionContent: question
    };
    questionSchema.create(newQuestion, (err, data) => {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
};

let getQuestions = (callback) => {
    questionSchema.find((err, data) => {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
};

let getQuestionByID = (id, callback) => {
    questionSchema.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
};

let updateQuestionByID = (id, bool, yesVal, noVal, callback) => {
    if (bool == 1) {
        questionSchema.findByIdAndUpdate(id, {
            yes: yesVal + 1
        }, (err) => {
            if (err) {
                console.log(err);
            }
            callback();
        });
    }
    if (bool == 0) {
        questionSchema.findByIdAndUpdate(id, {
            no: noVal + 1
        }, (err) => {
            if (err) {
                console.log(err);
            }
            callback();
        });
    }
};

module.exports = {
    create,
    getQuestions,
    getQuestionByID,
    updateQuestionByID
};