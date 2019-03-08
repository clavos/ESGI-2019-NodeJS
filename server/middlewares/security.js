const verifyJWTToken = require('../libs/auth');

const verifyToken = (req, res, next) => {

    if(req.path === "/user/login_check" || req.path === "/user" || req.path === "/movies" || req.path === "/users/add" ){
        next();
    } else {
        const auth = req.get('Authorization');
        if(!auth || !auth.startsWith('Bearer')){
            res.sendStatus(401);
        } else {
            verifyJWTToken.verifyToken(auth.replace('Bearer ', ''))
                .then(decodedToken => {
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