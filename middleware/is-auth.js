const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {

    // get the token from the header
    const token = req.header('Authorization');

    // check if there is not a token 
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied"});
    }

    // verify token 
    try {
        const decoded = jwt.verify(token, process.env.JWTSECRECT);
        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(401).json({ msg: "token is not valid" });
    }
    
}