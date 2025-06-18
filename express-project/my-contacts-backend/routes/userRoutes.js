const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(201).json({ message: ' register the user' });
});
router.post('/login', (req, res) => {
  res.status(200).json({ message: 'log in the user' });
});
router.get('/current', (req, res) => {
  res.status(200).json({ message: 'get the current user' });
});

module.exports = router;