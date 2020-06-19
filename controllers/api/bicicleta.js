var Bicicleta = require('../../models/bicicleta')

exports.get_list = function(req, res){
    res.status(200).send({
       bicicleta : Bicicleta.allBicis
})
}

exports.create_post = function(req, res){
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    bici.ubicacion = [req.body.lat, req.body.long]
    Bicicleta.add(bici)
    res.status(200).json({bicicleta : bici})
}

exports.delete_bicicleta = (req, res)=>{
    Bicicleta.removeById(req.body.id)
    res.status(204).json()
}
