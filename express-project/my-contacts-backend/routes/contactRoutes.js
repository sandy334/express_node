const express = require('express');
const router = express.Router();
const { getContacts, createContact, updateContact, deleteContact } = require('../controllers/contactController');
// Import the controller functions from contactController.js
router.route("/").get(getContacts ).post(createContact )

router.route("/:id").get( getContact).put( updateContact ).delete( deleteContact )



module.exports = router;