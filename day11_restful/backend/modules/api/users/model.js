import {
    model
} from 'mongoose';

// TODO import mongoose
const mongoose = require('mongoose');
// TODO create schema object of mongoose
const Schema = mongoose.Schema();
// TODO define user schema
const userSchema = new Schema({
    Avatar: {
        type: String,
        default: ""
    },
    Email: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: "createdAt"
    }
});

// TODO create user model
module.exports = model('users', userSchema);