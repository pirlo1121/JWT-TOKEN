const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const validartoken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; //aqui obtenemos el token

  if (token == null) return res.status(401).json({ok: "el token no existe o no está"});



  // next()
};

module.exports = validartoken;
