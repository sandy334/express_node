const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
//desc Register a user
// @route POST /api/users
// @access Public   
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw 
        new Error('Please add all fields');
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    res.json({
        message: 'User registered successfully',
    });
    // Create user  


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