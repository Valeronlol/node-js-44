const dbClient = require('../services/db-client')

exports.getList = ({ limit = 50 }) => {
    return dbClient.product.findMany({
        take: limit
    })
}

exports.addProduct = (data) => {
    return dbClient.product.create({ data })
}
