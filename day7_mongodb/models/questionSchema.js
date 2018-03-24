
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const query = mongoose.Query;

const questionSchema = new Schema({
    questionContent: {
        type: String,
        default: '',
        require: true
    },
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Question", questionSchema);