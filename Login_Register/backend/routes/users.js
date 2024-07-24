// backend/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure this path is correct

// User registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Add your user registration logic here
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// User login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Add your user login logic here
    res.status(200).send('User logged in');
  } catch (error) {
    res.status(500).send('Error logging in user');
  }
});

module.exports = router;
