const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res) => {
    Movie.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});

router.get('/:year', (req, res) => {
    Movie.findOne({year: req.params.year})
        .then(data =>
            res.status(200).send(data)
        );
});
module.exports = router;