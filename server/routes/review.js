const express = require('express');
const Review = require('../models/review');
const router = express.Router();

router.get('/', (req, res) => {
    Review.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});

module.exports = router;