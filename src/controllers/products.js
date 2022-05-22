const product = require('../models/product')

exports.getList = async (req, res) => {
    const productList = await product.getList({ limit: 10 })
    res.send(productList)
}

exports.addProduct = async (req, res) => {
    const product = await product.addProduct(req.body)
    res.send(product)
}
