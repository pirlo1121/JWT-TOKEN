const express = require('express');
const validartoken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/protected',validartoken, (req, res) => {
  res.json({ message: 'funcionó el token'});
});

module.exports = router;