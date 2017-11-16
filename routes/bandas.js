'use strict'

const express = require('express');
const bandasController = require('../controllers/bandaController');

const api = express.Router();

api.get('/bandas/:id?', bandasController.getBandas)

module.exports = api;