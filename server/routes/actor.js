const express = require('express');
const Actor = require('../models/actor');
const router = express.Router();

router.get('/', (req, res) => {
    Actor.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});

module.exports = router;