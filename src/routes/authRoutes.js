const express = require('express');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

const router = express.Router();

router.post('/login', (req, res)=>{
  const data = req.body;

  if(data.username === 'BIT@JWT.com' && data.password === '123456'){
    const token = jwt.sign(data, secretKey);

    res.json({token});
    console.log(token)

  } else {
    res.status(401).json({message: "credenciales invalidas"});
  }
})

module.exports = router;

