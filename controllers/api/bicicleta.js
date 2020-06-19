var Bicicleta = require('../../models/bicicleta')

exports.get_list = function(req, res){
    res.status(200).send({
       bicicleta : Bicicleta.allBicis
    })}