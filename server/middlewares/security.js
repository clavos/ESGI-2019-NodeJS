const verifyJWTToken = require('../libs/auth');

const verifyToken = (req, res, next) => {
    console.log("check");
    if(req.path === "/user/login_check" || req.path === "/user" ){
        next();
    } else {
        console.log("check2");
        const auth = req.get('Authorization');
        console.log(typeof auth ,auth);
        if(!auth || !auth.startsWith('Bearer')){
            res.sendStatus(401);
        } else {
            verifyJWTToken.verifyToken(auth.replace('Bearer ', ''))
                .then(decodedToken => {
                    console.log(decodedToken);
                    req.user = decodedToken;
                    next();
                })
                .catch(error => res.status(400).send({
                    error: "JWT TOKEN invalid",
                    details: error
                }));
        }
    }
}

module.exports = verifyToken;