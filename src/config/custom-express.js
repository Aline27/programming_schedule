require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('src/app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const rotas = require('../app/routes/routes.js');
rotas(app);

module.exports = app;