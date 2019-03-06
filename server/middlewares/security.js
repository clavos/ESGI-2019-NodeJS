const verifyJWTToken = require('../libs/auth');

const verifyToken = (req, res, next) => {
    if(req.path === "/users/login_check" || req.path === "/users/login_check" ){
        next();
    } else {
        const auth = req.get('Authorization');
        if(!auth || !auth.startWith('Bearer')){
            res.sendStatus(401);
        } else {
            verifyJWTToken(auth.replace('Bearer ', ''))
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