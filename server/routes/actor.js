const express = require('express');
const Actor = require('../models/actor');
const router = express.Router();

//Get all actors
router.get('/', (req, res) => {
    Actor.find(req.query)
        .then(data =>
            res.status(200).send(data)
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving actors."
            });
        });
});
//Add actor
router.post('/add', (req, res) => {
    // Validate request
    console.log("here");
    if(!req.body.firstName) {
        return res.status(400).send({
            message: "Firstname content can not be empty"
        });
    }
    if(!req.body.lastName) {
        return res.status(400).send({
            message: "Lastname content can not be empty"
        });
    }
    const actor = new Actor({
        firstname: req.body.firstName,
        lastname: req.body.lastName
    });
    actor.save()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Actor."
        });
    });
});
//Get actor by id
router.get('/:id', (req, res) => {
    Actor.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Actor not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Actor not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving actor with id " + req.params.id
        });
    });
});
//Update an actor
router.put('/update/:id', (req, res) => {
    // Validate request
    if(!req.body.firstname) {
        return res.status(400).send({
            message: "Firstname content can not be empty"
        });
    }
    if(!req.body.lastname) {
        return res.status(400).send({
            message: "Lastname content can not be empty"
        });
    }
    // Find note and update it with the request body
    Actor.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Actor not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Actor not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating actor with id " + req.params.id
        });
    });
});
//Delete an actor
router.delete('/delete/:id', (req, res) => {
    Actor.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Actor not found with id " + req.params.id
                });
            }
            res.send({message: "Actor deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Actor not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete actor with id " + req.params.id
        });
    });
});

module.exports = router;