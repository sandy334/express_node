const express = require('express');
const router = express.Router();
const {getContact} = require( getContacts,createContact,getContact,updateContact,deleteContact);

const { getContacts, createContact, updateContact, deleteContact } = require('../controllers/contactController');
// Import the controller functions from contactController.js
router.route("/").get(getContacs )

router.route("/").post(createContact )

router.route("/:id").get( getContact)

router.route("/:id").put( updateContact )

router.route("/:id").delete( deleteContact )

module.exports = router;