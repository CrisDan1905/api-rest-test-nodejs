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
            if (err)
                res.status(500).send({message: 'Hubo un error al traer el registro'});
            else
                if (!banda)
                    res.status(200).send('El registro no existe');
                else
                    res.status(200).send(banda);
        });
}

function saveBanda(req, res) {
    const banda = new Banda();
    const requestData = req.body;

    Object.assign(banda, requestData);

    banda.save((err, BandaStore) => {
        if (err) {
            res.status(500).send('hubo un error');
        }
        else
            res.status(200).send({data: BandaStore});
    });

}

function updateBanda(req, res) {
    const id = req.params.id;
    const requestData = req.body;
    Banda.findByIdAndUpdate(id, requestData, { new: true } , (err, bandaStore) => {
        if (err)
            console.log('hubo un error actualizando');
        else
            if (!bandaStore)
                res.status(404).send('Banda no encontrada');
            else
                res.status(200).send(bandaStore);
            
    });
    
}

function deleteBanda(req, res) {
    const id = req.params.id;
    Banda.findByIdAndRemove(id, err => {
        if (err)
            res.status(500).send({message: 'Hubo un error'});            
        else
            res.status(200).send({message: 'Se ha eliminado el registro exitosamente'});
            
    })

}

module.exports = {
    getBandas,
    saveBanda,
    updateBanda,
    deleteBanda
}