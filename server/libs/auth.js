const jwt = ('jsonwebtoken');

const createToken = function(user={}){
    return jwt.sign({
        firstName: user.firstName,
        lastName: user.lastName
    }, 'MyBestToken', {
        expireIn: 3600,
        algorithm: "HS256"
    });
};

const verifyToken = function (token){
    return new Promise((resolve, reject) =>
        jwt.verify(token, 'MyBestToken', (err, decodedToken) =>{
            if(err || !decodedToken){
                reject(err);
            }
            resolve(decodedToken);
        })
    );
};

module.exports = {
    createToken,
    verifyToken
};