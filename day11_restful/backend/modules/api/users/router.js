//import express framework
const express = require('express');

// create router object
const router = express.Router();

// import image controller
const userController = require('./controller');

// TODO create user
router.post('/', (req, res) => {
    userController.createUser(req.body)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// TODO get All users
router.get('/', (req, res) => {
    userController.getAllUsers()
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// TODO get one user
router.get('/:userId', (req, res) => {
    userController.getUser(req.params.userId)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// TODO update username
router.put('/:userId/username', (req, res) => {
    userController.updateUsername(req.params.userId, req.body)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// TODO update user email
router.put('/:userId/email', (req, res) => {
    userController.updateUserEmail(req.params.userId, req.body)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// TODO update user avatar
router.put('/:userId/avatar', (req, res) => {
    userController.updateUserAvatar(req.params.userId, req.body)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// TODO delete user
router.delete('/:userId', (req, res) => {
    userController.deleteUser(req.params.userId)
        .then(data => res.send(data))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
// export user router
module.exports = router;