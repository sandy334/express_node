const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// @desc    Register a user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
    const user=await User.create({
        username,
        email,
        password: hashedPassword,
    });
   console.log("User Created:", user);

    // Create user (not saved in DB here, you can implement it later)
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        });
        return;
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.json({message: 'User registered successfully', });
});

// @desc    Login a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please add the  fields');
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        // Generate JWT token               
        res.status(200).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            }),
        });
    res.json({ message: 'Login User' });
});

// @desc    Get current user
// @route   GET /api/users/current
// @access  Private
const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Current User' });
});

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};
