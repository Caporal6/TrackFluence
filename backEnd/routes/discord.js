const express = require('express');
const router = express.Router();

// Exemple de route GET
router.get('/', (req, res) => {
  res.send('Discord route OK');
});

module.exports = router;