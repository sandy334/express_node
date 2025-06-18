const express = require('express');
const {
  registerUser,
  loginUser,
  getCurrentUser
} = require('../controllers/userController');

const validateToken = require('../middleware/validateTokenHandler'); // ✅ Import middleware

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken, getCurrentUser); // ✅ Use middleware here

module.exports = router;
