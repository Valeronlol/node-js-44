const { Router } = require('express')
const mainController = require('./controllers/main-page')
const userController = require('./controllers/user')
const productsController = require('./controllers/products')
const uploadController = require('./controllers/upload')
const asyncErrorHandler = require('./utils/async-error-handler')
const { checkAuth } = require('./services/auth')

const router = Router()

router.get('/', mainController)
router.post('/user', asyncErrorHandler(userController.createUser))
router.post('/login', asyncErrorHandler(userController.authenticateUser))
router.get('/product', asyncErrorHandler(productsController.getList))
router.post('/product', checkAuth, asyncErrorHandler(productsController.addProduct))
router.post('/upload', checkAuth, asyncErrorHandler(uploadController.uploadImage))

module.exports = router
