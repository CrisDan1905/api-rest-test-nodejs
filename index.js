/* Conexion a la BD e inicialización de la app */
'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Bandas', { useMongoClient: true })
    .then(() => {
        console.log('todo bien pappeto');

        app.listen(port, () => {
            console.log(`conectado en el puerto ${port}`);
        })
    })
    .catch(err => console.log('baia baia, algo anda mal'));