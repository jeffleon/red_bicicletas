var Bicicleta = require('../models/bicicleta')
// creo metodo para hacer el listado
exports.bicicletas_list = function(req, res){
    // llamo a la vista y envio lo que se va a utilizar en la vista
    res.render('bicicleta/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicleta/create')
}

exports.bicicleta_create_post = function(req, res){
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    bici.ubicacion = [req.body.lat, req.body.long]
    Bicicleta.add(bici)
    res.redirect('/bicicleta')
}
exports.bicicleta_update_get = function(req, res){
    var bici = Bicicleta.findById(req.params.id)
    res.render('bicicleta/update', {bici})
}

exports.bicicleta_update_post = function(req, res){
    var bici = Bicicleta.findById(req.params.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.long]
    
    res.redirect('/bicicleta')
}

exports.bicicleta_remove_post = function(req, res){
    Bicicleta.removeById(req.body.id)
    res.redirect('/bicicleta')
}

