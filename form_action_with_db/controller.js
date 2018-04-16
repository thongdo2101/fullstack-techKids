const imageModel = require("./model");
const createImage = ({
    ImageUrl,
    title,
    description,
    createdBy
}) => new Promise((resolve, reject) => {
    imageModel.create({
            ImageUrl,
            title,
            description,
            createdBy
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err));
});

const getAllImages = page => new Promise((resolve, reject) => {
    imageModel.find({
            "active": true
        })
        .sort({
            createdAt: -1
        })
        .skip((page - 1) * 20)
        .limit(20)
        .select("_id ImageUrl title description createdAt createdBy view like")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

const getImage = id => new Promise((resolve, reject) => {
    //TODO homework
    imageModel.findOne({
            active: true,   
            _id: id
        })
        .select("_id ImageUrl title description createdAt createdBy view like comment")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO like image
// TODO unlike image
// TODO comment
// TODO delete comment


const updateImage = (id, {
    ImageUrl,
    title,
    description
}) => new Promise((resolve, reject) => {
    imageModel.update({
            _id: id
        }, {
            ImageUrl,
            title,
            description,
            createdBy
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err));
});

const deleteImage = id => new Promise((resolve, reject) => {
    imageModel.update({
            _id: id
        }, {
            active: false
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err));
});



module.exports = {
    createImage,
    deleteImage,
    updateImage,
    getAllImages,
    getImage
};