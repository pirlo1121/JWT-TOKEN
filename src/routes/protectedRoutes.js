const express = require('express');
const validartoken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/protected',(req, res) => {
  res.json({ message: 'funcionó el token'});
});

module.exports = router;