const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc    Create new contact
// @route   POST /api/contacts
// @access  Public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    // ✅ Create and save contact in MongoDB
    const contact = await Contact.create({
        name,
        email,
        phone
    });

    // ✅ Respond with the created document
    res.status(201).json(contact);
});
