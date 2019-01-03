const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// User Login
router.get('/login', (req, res) => {
  res.render('users/login');
});

// User Register
router.get('/register', (req, res) => {
  res.render('users/register');
});

// Resiter Form POST
router.post('/register', (req, res) => {
  let errors = [];

  if (req.body.password !== req.body.password2) {
    errors.push({ text: 'Passwords do not match' });
  }
  if (req.body.password < 4) {
    errors.push({ text: 'Passord must be at least 4 characters' });
  }
  if (errors.length > 0) {
    res.render('users/register', {
      errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    res.send('passed');
  }
});

module.exports = router;
