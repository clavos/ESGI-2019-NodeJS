const express = require('express');
const Review = require('../models/review');
const router = express.Router();
const verifyJWTToken = require('../libs/auth');
const User = require('../models/user');

router.get('/', (req, res) => {
    Review.find(req.query)
        .then(data =>
            res.status(200).send(data)
        ).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving reviews."
        });
    });
});

//Add review
router.post('/add', (req, res) => {
    const auth = req.get('Authorization');
    console.log("review", auth);
    if(!auth || !auth.startsWith('Bearer')){
        res.sendStatus(401);
    } else {
        verifyJWTToken.verifyToken(auth.replace('Bearer ', ''))
            .then(decodedToken => {
                console.log("enter0", decodedToken.username);
                console.log("enter");
                User.findOne({username: decodedToken.username}).then(user =>{
                    const review = new Review({
                        User: user._id,
                        comment: req.body.comment,
                        score: req.body.score
                    });
                    review.save()
                        .then(data => {
                            res.status(200).send(data);
                        }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the review."
                        });
                    });
                })
                
            })
            .catch(error => res.status(400).send({
                error: "JWT TOKEN invalid",
                details: error
            }));
    }
    
});

//Get review by id
router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Review not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving review with id " + req.params.id
        });
    });
});

//Update an review
router.put('/update/:id', (req, res) => {
    // Find note and update it with the request body
    Review.findByIdAndUpdate(req.params.id, {
        comment: req.body.comment,
        score: req.body.score
    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.id
                });
            }
            res.send(data);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Review not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating review with id " + req.params.id
        });
    });
});
//Delete a review
router.delete('/delete/:id', (req, res) => {
    Review.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Review not found with id " + req.params.id
                });
            }
            res.send({message: "Review deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Review not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete review with id " + req.params.id
        });
    });
});

module.exports = router;