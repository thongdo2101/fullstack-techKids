/*
    Auth
    Router
    Controller
    Model
*/
const userController = require('../users/controller');
const bcrypt = require('bcryptjs');
const login = ({
        username,
        password
    }) =>
    new Promise((resolve, reject) => {
        // Success
        // Incorrect Username
        // Incorrect Password
        // Internal Server Error
        try {
            console.log(username);
            userController
                .getUserForAuth(username)
                .then(user => {
                    if (!user || !user.Password) {
                        reject({
                            status: 400, // bad request
                            err: "Incorrect username"
                        });
                    } else {
                        console.log('begin');
                        bcrypt.compare(password, user.Password)
                            .then(result => {
                                if (result) {
                                    resolve({
                                        username: user.Username,
                                        id: user._id
                                    });
                                } else {
                                    reject({
                                        status: 400,
                                        err: "Incorrect Password"
                                    });
                                }
                            });
                    }
                })
                .catch(err => reject({
                    status: 501,
                    err: err
                }));
        } catch (err) {
            console.log(err);
        }
    });

module.exports = {
    login
};