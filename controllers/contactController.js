//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
    res.status(200).json({message:'Get all contacts '});
}

//@desc Create new  contact
//@route POST /api/contact
//@access Public

const createContact = (req, res) => {
    res.status(201).json({message:'Get all contacts '});
}

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public

const getContact = (req, res) => (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}

//@desc  update contacts
//@route PUT /api/contacts/:id
//@access Public

const updateContact = (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
}

//@desc Delete contact
//@route DELETE /api/contacts
//@access Public

const deleteContact = (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id} `});
}
module.exports = {
    getContacts,createContact,getContact,updateContact,deleteContact
    // Add other controller functions here as needed
    // e.g., createContact, getContactById, updateContact, deleteContact
};