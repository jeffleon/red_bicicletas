var express = require('express')
var router = express.Router()
var apiController = require('../../controllers/api/bicicleta')


router.get('/', apiController.get_list)

module.exports = router;