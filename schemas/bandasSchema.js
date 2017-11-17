'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandaSchema = Schema({
    name: String,
    genere: String,
    image: String
});


module.exports = mongoose.model('banda', bandaSchema);