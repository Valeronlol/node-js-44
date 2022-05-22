const { Router } = require('express')
const mainController = require('./controllers/main-page')
const productsController = require('./controllers/products')
const asyncErrorHandler = require('./utils/async-error-handler')

const router = Router()

router.get('/', mainController)
router.get('/product', asyncErrorHandler(productsController.getList))
router.post('/product', asyncErrorHandler(productsController.addProduct))

module.exports = router
