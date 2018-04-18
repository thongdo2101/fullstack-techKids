//import express framework
const express = require('express');

// create router object
const router = express.Router();

// import image controller
const authController = require('./controller');

// user login
router.post('/', (req, res) => {
    authController.login(req.body)
        .then(userInfo => {
            req.session.userInfo = userInfo; // gán value cho session
            res.send("Logged in");
        })
        .catch(err => res.status(500).send(err));
});

// user log out
router.delete('/', (req, res) => {
    req.session.destroy();
    res.send("Logged out");
});