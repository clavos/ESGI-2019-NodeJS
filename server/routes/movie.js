const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

//Get all movies
router.get('/', (req, res) => {
    Movie.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});
//Get movies by year
router.get('/:year', (req, res) => {
    Movie.find({year: req.params.year})
        .then(data =>
            res.status(200).send(data)
        );
});
module.exports = router;