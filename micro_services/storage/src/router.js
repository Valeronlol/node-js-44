const Router = require('@koa/router')
const productHandlers = require('./handlers/product')
const userHandlers = require('./handlers/user')
const uploadHandlers = require('./handlers/upload')

const router = new Router()

router.get('/product', productHandlers.getList)
router.post('/product', productHandlers.addProduct)
router.post('/login', userHandlers.getUserByEmail)
router.post('/user', userHandlers.createNewUser)
router.put('/product/:id/image', uploadHandlers.updateProductImage)

module.exports = router
