require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'mysql669.umbler.com',
    port     : 41890,
    user     : 'rootrpc',
    password : 'rpctest123',
    database : 'schedulerpc'
  });
  
connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!');
})

app.use(express.static('src/app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const rotas = require('../app/routes/routes.js');
rotas(app);

module.exports = app;