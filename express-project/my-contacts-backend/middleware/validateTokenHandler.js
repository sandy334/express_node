const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken= asyncHandler(async (req, res, next) )=> {
    let token;

    // Check if token is in the headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Attach user to the request object
            req.user = decoded.user;
            next(); 
        }