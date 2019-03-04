const express = require('express');
const MovieDetail = require('../models/movie');
const router = express.Router();

router.get('/', (req, res) => {
    MovieDetail.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});

router.get('/:year', (req, res) => {
    MovieDetail.findOne({year: req.params.year})
        .then(data =>
            res.status(200).send(data)
        );
});
module.exports = router;