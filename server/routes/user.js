const express = require('express');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const webtoken = require('../libs/auth').createToken;

router.get('/', (req, res) => {
    User.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
});

router.post('/login_check', (req, res) => {
    console.log(req.body.username, req.body.password);
    User.findOne({username: req.body.username}).then(user => {
        console.log(user)
        if(!user){
            return res.status(400).json("Invalid credentials");
        }
        else if(req.body.password == user.password){
            
            const {password, ...payload} = user;
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
module.exports = router;