//import express framework
const express = require('express');

// create router object
const router = express.Router();

// import image controller
const imageController = require('./controller');

// get all iamges
router.get('/', (req, res) => {
    imageController.getAllImages(req.query.page || 1)
        .then(images => res.send(images))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
            // 200
            // 300 redirect
            // 404 not found
            // 500
        });
});

// get one image
router.get('/:id', (req, res) => {
    imageController.getImage(req.params.id)
        .then(image => res.send(image))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
            // 200
            // 300 redirect
            // 404 not found
            // 500
        });
});

// create new image
router.post('/', (req, res) => {
    imageController.createImage(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// TODO update image

// TODO delete image

// TODO like image
router.put('/like/:id', (req, res) => {
    imageController.likeImage(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});


// TODO unlike image
router.put('/unlike/:id', (req, res) => {
    imageController.unlikeImage(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// TODO add comment
router.post('/:imageId/comments', (req, res) => {
    imageController.addComment(req.params.imageId)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

// TODO delete comment

// TODO update commnet


// export router
module.exports = router;