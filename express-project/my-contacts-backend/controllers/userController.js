const asyncHandler = require('express-async-handler');
//desc Register a user
// @route POST /api/users
// @access Public   
const registerUser = asyncHandler(async (req, res) => {res.json({ message: 'Register User' })});

//desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' });
});

//desc Get current user
// @route GET /api/users/current
// @access Private
const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Current User' });
});

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};