var express = require('express')
var router = express.Router()
var apiController = require('../../controllers/api/bicicleta')


router.get('/', apiController.get_list)
router.post('/create', apiController.create_post)
router.delete('/delete', apiController.delete_bicicleta)

module.exports = router;