const productModel = require('../models/product')

exports.getList = async (req, res) => {
    const productList = await productModel.getList({ limit: 10 })
    res.send(productList)
}

exports.addProduct = async (req, res) => {
    const newProduct = await productModel.addProduct(req.body)
    res.send(newProduct)
}
