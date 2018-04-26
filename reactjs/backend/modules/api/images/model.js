// import mongoose
const mongoose = require('mongoose');

// create Schema object to manipulate with collections
const Schema = mongoose.Schema;

// define comment schema
const commentSchema = new Schema({
    createdBy: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
});

// define image schema
const imageSchema = new Schema({
    ImageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,

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
        type: [commentSchema],
        default: []
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
});


// create image model
module.exports = mongoose.model("images", imageSchema); // images is the name of collection in db