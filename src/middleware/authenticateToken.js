const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const validartoken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; //aqui obtenemos el token

  if (token == null) return res.status(401).json({ok: "el token no existe o no está"});

  jwt.verify(token, secretKey, (err, data)=>{
    if( err) return console.log("el token es invalido")

    console.log(data);

  })


  next()
};

module.exports = validartoken;
