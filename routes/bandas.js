'use strict'

const express = require('express');
const bandasController = require('../controllers/bandaController');

const api = express.Router();

api.get('/bandas/:id?', bandasController.getBandas);
api.post('/bandas', bandasController.saveBanda);
api.put('/bandas/:id', bandasController.updateBanda);
api.delete('/bandas/:id', bandasController.deleteBanda);

module.exports = api;