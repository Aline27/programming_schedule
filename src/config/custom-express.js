require('marko/node-require').install();
require('marko/express');
//require('../app/routes/routes.js');

const express = require('express');
const app = express();


app.use(express.static('src/app/public'));

const rotas = require('../app/routes/routes.js');
rotas(app);



module.exports = app;