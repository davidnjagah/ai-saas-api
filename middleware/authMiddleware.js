const jwt = require('jsonwebtoken')
const HttpError = require('../models/errorModel')
require('dotenv').config()

const authMiddleware = async (req, res, next) => {
    const Authorization = req.headers.Authorization || req.headers.authorization;
    const PUB_KEY = process.env.JWT_SECRET;
    console.log("This is the PUB KEY", PUB_KEY);

    if(Authorization && Authorization.startsWith("Bearer")) {
        const token = Authorization.split(' ')[1]
        console.log(token)
        jwt.verify(token, PUB_KEY, (err, info) => {
            if(err) {
                console.error("JWT Verification Error:", err);
                return next(new HttpError("Unauthorized. Invalid Token.", 403));
            }

            req.user = info;
            console.log("Decoded JWT:", info);
            next()
        })
    } else {
        return next(new HttpError("Unauthorized. No token", 401))
    }
};

module.exports = authMiddleware