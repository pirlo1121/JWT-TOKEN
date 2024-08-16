const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const protectedRoutes = require('./src/routes/protectedRoutes');
const { port } = require('./src/config/config');

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// RUTAS DE LA API
app.use('/auth', authRoutes);

// ruta para verifcar el token 
app.use('/api', protectedRoutes);



app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
