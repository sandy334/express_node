const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // ✅ Use correct secret env name
            req.user = decoded.user;
            next(); // ✅ proceed to next middleware/route handler
        } catch (error) {
            res.status(401);
            throw new Error('Token is not valid');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, token missing');
    }
});

module.exports = validateToken;
