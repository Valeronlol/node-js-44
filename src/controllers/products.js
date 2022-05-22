const productController = require('../models/product')

exports.getList = async (req, res) => {
    const productList = await productController.getList({ limit: 10 })
    res.send(productList)
}

exports.addProduct = async (req, res) => {
    const newProduct = await productController.addProduct(req.body)
    res.send(newProduct)
}
