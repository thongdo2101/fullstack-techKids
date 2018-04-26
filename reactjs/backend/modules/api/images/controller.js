// import image model
const imageModel = require("./model");

// create function: createImage
const createImage = (
    // parameters(tham số truyền vào)
    {
        ImageUrl,
        title,
        description,
        id
    }
    // return a promise
) => new Promise(
    // callback
    (resolve, reject) => { // two params @resolve and @reject if type of function
        imageModel
            .create({
                ImageUrl,
                title,
                description,
                id
            })
            .then(
                data => resolve({
                    id: data._id
                })
            )
            .catch(
                err => reject(err)
            );
    }
);

const getAllImages = page => new Promise((resolve, reject) => {
    imageModel
        .find(
            // condition of finding
            {
                "active": true
            }
        )
        .sort(
            // condition of sort 
            {
                createdAt: -1
            }
        )
        // specifies the number of documents to skip: from
        .skip((page - 1) * 20)
        // specifies the number of documents wil return : to
        .limit(20)
        // specifies which fields to include or exclude 
        .select("_id ImageUrl title description createdAt createdBy view like")
        // execute the query
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

const getImage = id => new Promise((resolve, reject) => {
    //TODO homework
    imageModel
        .findOne({
            active: true,
            _id: id
        })
        .select("_id ImageUrl title description createdAt createdBy view like comment")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
});

const updateImage = (
    // id param
    id,
    // value param
    {
        ImageUrl,
        title,
        description
    }
) => new Promise((resolve, reject) => {
    imageModel
        .where({
            _id: id
        }).update({
            ImageUrl,
            title,
            description,
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err));
});

const deleteImage = id => new Promise((resolve, reject) => {
    imageModel
        .where({
            _id: id
        }).update({
            active: false
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err));
});

// TODO add comment
const addComment = (
    imageId, {
        createdBy,
        content
    }
) => new Promise((resolve, reject) => {
    imageModel
        .where({
            _id: imageId
        })
        .update({
            $push: {
                comment: {
                    createdBy,
                    content
                }
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
});

// TODO like image
const likeImage = imageId => new Promise((resolve, reject) => {

    imageModel
        .findOne({
            active: true,
            _id: imageId
        })
        .select("like")
        .exec()
        .then(data => {
            imageModel
                .where({
                    _id: imageId
                })
                .update({
                    $inc: {
                        like: 1
                    }
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
        .catch(err => reject(err));
});
// TODO unlike image
const unlikeImage = imageId => new Promise((resolve, reject) => {

    imageModel
        .findOne({
            active: true,
            _id: imageId
        })
        .select("like")
        .exec()
        .then(data => {
            if (Number(data["like"]) == 0) {
                return;
            }
            imageModel
                .where({
                    _id: imageId
                })
                .update({
                    $inc: {
                        like: -1
                    }
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
        .catch(err => reject(err));
});

// TODO delete comment
const deleteComment = (imageId, commnetId) => new Promise((resolve, reject) => {
    imageModel.where({
            _id: imageId
        })
        .update({
            $pull: {
                comment: {
                    _id: commnetId
                }
            }
        })
        .then(data =>
            resolve(data)
        )
        .catch(err => reject(err));
});

// export model
module.exports = {
    createImage,
    deleteImage,
    updateImage,
    getAllImages,
    getImage,
    addComment,
    likeImage,
    unlikeImage,
    deleteComment
};