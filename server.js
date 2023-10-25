const express = require('express');
const app = express();
const port = 3000;

// Import the API routes from api.js
const apiRoutes = require('./routes/api');

// Use the API routes
app.use(express.static('public'));

app.use('/', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

