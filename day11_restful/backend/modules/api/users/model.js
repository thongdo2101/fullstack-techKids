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
        unique: true,
        validate: {
            validator: function (value) {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(value);
            },
            message: "{VALUE} is not a valid email address"
        }
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
    if (!this.isModified('Password')) {
        return next();
    }
    bcrypt
        .genSalt(12)
        .then(salt => bcrypt.hash(this.Password, salt))
        .then(hash => {
            this.Password = hash;
            next();
        })
        .catch(err => next(err));
});

// TODO create user model
module.exports = mongoose.model('users', userSchema);