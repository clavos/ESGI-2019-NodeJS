const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

//Get all movies
router.get('/', (req, res) => {
    Movie.find(req.query)
        .then(data =>
            res.status(200).send(data)
        ).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving movies."
        });
    });
});

//Add movie
router.post('/add', (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Title content can not be empty"
        });
    }
    if(!req.body.description) {
        return res.status(400).send({
            message: "Description content can not be empty"
        });
    }
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description
    });
    movie.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the movie."
        });
    });
});

//Get movie by id
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Movie not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving movie with id " + req.params.id
        });
    });
});

//Update a movie
router.put('/update/:id', (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Title content can not be empty"
        });
    }
    if(!req.body.description) {
        return res.status(400).send({
            message: "Description content can not be empty"
        });
    }
    // Find note and update it with the request body
    Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description
    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Movie not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating movie with id " + req.params.id
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Movie not found with id " + req.params.id
                });
            }
            res.send({message: "Movie deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete movie with id " + req.params.id
        });
    });
});
//Get movies by year
router.get('/:year', (req, res) => {
    Movie.find({year: req.params.year})
        .then(data =>
            res.status(200).send(data)
        );
});
module.exports = router;