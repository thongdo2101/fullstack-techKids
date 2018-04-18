// TODO import mongoose
const mongoose = require('mongoose');
// TODO create schema object of mongoose
const Schema = mongoose.Schema;
// import bcript
const bcrypt = require('bcryptjs');
// TODO define user schema
const userSchema = new Schema({
    Avatar: {
        type: String,
        default: ""
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Username: {
        type: String,
        required: true,
        unique: true
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
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(12)
        .then(salt => bcrypt.hash(this.Password, salt))
        .then(result => next())
        .catch(err => next(err));
});

// TODO create user model
module.exports = mongoose.model('users', userSchema);