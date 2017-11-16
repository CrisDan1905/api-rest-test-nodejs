'use strict'

const Banda = require('../schemas/bandasSchema');

function getBandas(req, res) {
    console.log(req.params);
    if (!req.params.id)
        Banda.find({}, (err, bandasArray) => {
            if (err) 
                return res.status(500).send('Error en la peticion');
            else
                if (!bandasArray)
                    res.status(404).send('No hay nada por acá');
                else
                    res.status(200).send(bandasArray);
        });
    else
        Banda.findById(req.params.id, (err, banda) => {
            console.log(banda);
        });
}

module.exports = {
    getBandas
}