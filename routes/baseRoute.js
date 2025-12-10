const express = require('express');
const router = express.Router();

// viser 'home' view
router.get('/', (req, res) => {
  res.render('home');
});

// test-route til at fremkalde 500
router.get('/__error-test', (req, res) => {
  throw new Error('Test error for 500-side');
});

module.exports = router;
