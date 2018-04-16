const express = require('express');
const router = express.Router();
const imageController = require('./controller').default;

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

router.post('/', (req, res) => {
    imageController.createImage(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

module.exports = router;