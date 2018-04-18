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
    userModel
        .find({
            "Active": true
        })
        .sort(
            // condition of sort 
            {
                createdAt: -1
            }
        )
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
            Active: true,
            _id: userId
        })
        .select('_id Avatar Email Username Password')
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update username
const updateUsername = (userId, {
    Username
}) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Username
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update user email
const updateUserEmail = (userId, {
    Email
}) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Email
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update user avatar
const updateUserAvatar = (userId, {
    Avatar
}) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Avatar
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO update user password
const updateUserPassword = (userId, {
    Password
}) => new Promise((resolve, reject) => {
    userModel.where({
            _id: userId
        })
        .update({
            Password
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
            Active: false
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});
// get user data for auth
const getUserForAuth = username => new Promise((resolve, reject) => {
    userModel
        .findOne({
            usename
        })
        .select("Usename Password _id")
        .then(user => resolve(user))
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
    updateUserPassword,
    deleteUser,
    getUserForAuth
};