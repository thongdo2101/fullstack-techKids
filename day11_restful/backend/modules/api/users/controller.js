// TODO import user model
const userModel = require('./model');

// TODO create user
const createUser = ({
    Avatar,
    Email,
    Username,
    Password
}) => new Promise((resolve, reject) => {
    userModel.create({
            Avatar,
            Email,
            Username,
            Password
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO get All users
const getAllUsers = page => new Promise((resolve, reject) => {
    userModel.find()
        .where({
            active: true
        })
        .skip((page * 20) - 1)
        .limit(20)
        .select('_id Avatar Email Username Password')
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO get one user
const getUser = userId => new Promise((resolve, reject) => {
    userModel.findOne()
        .where({
            active: true,
            _id: userId
        })
        .select('_id Avatar Email Username Password')
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update username
const updateUsername = (userId, username) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Username: username
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update user email
const updateUserEmail = (userId, email) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Email: email
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update user avatar
const updateUserAvatar = (userId, avatar) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Avatar: avatar
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});
// TODO delete user
const deleteUser = userId => new Promise((resolve, reject) => {
    userModel
        .where({
            _id: userId
        })
        .update({
            active: false
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// export module
module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUsername,
    updateUserEmail,
    updateUserAvatar,
    deleteUser
};