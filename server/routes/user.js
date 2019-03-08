const express = require('express');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const webtoken = require('../libs/auth').createToken;
var bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    User.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});

router.post('/login_check', (req, res) => {
    User.findOne({username: req.body.username}).then(user => {
        if(!user){
            return res.status(400).json("Invalid credentials");
        }
        else if(bcrypt.compareSync(req.body.password, user.password)){
            const {password, ...payload} = user.toJSON();
            res.json({
                        success: true,
                        token: `Bearer ${webtoken(payload)}`
                    });
            // jwt.sign(payload, "MyBestToken",  {expiresIn: 3600}, (err, token)=>{
            //     if(err){
            //         console.error('cha mache pas', err);
            //     }else{
            //         res.json({
            //             success: true,
            //             token: `Bearer ${token}`
            //         });
            //     }
            // });

        }
        else{
            return res.status(400).json("Marlène Marche pas");
        }
    });
});
//Register
router.post('/add', (req, res) => {
    // Validate request
    if(!req.body.username) {
        return res.status(400).send({
            message: "Username content can not be empty"
        });
    }
    if(!req.body.password) {
        return res.status(400).send({
            message: "Password content can not be empty"
        });
    }

    const newUser = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, process.env.SALT)
    });
    User.findOne({username: req.body.username}).then(user => {
        if(!user){
            newUser.save()
                .then(data => {
                    const {password, ...payload} = data.toJSON();
                    res.json({
                        success: true,
                        token: `Bearer ${webtoken(payload)}`
                    });
                }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the user."
                });
            });
        } else {
            return res.status(401).json("Username already taken !");
        }
    });
});
module.exports = router;