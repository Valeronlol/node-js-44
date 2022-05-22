const { Router } = require('express')
const mainController = require('./controllers/main-page')
const phonesController = require('./controllers/phones')

const router = Router()

router.get('/', mainController)
router.get('/phones', phonesController.getList)

module.exports = router
