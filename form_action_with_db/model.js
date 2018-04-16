const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentModel = new Schema({
    createdBy: {
        type: String
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
});
const imageModel = new Schema({
    ImageUrl: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ''
    },
    createdBy: {
        type: String,
        require: true
    },
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
    comment: {
        type: [commentModel],
        default: []
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
});



module.exports = mongoose.model("images", imageModel);