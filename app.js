/* Configuraciones para toda la app */

'use strict'

const bodyParser = require('body-parser');
const api = require('./routes/bandas');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/principal', api);

module.exports = app;