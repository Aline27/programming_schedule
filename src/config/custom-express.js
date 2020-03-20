const express = require('express');
const app = express();

require('../app/routes/routes.js');

require('marko/node-require').install();
require('marko/express');

const rotas = require('../app/routes/routes.js');
rotas(app);



module.exports = app;