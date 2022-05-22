const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.getList = ({ limit = 50 }) => {
    return prisma.product.findMany({
        take: limit
    })
}

exports.addProduct = (data) => {
    return prisma.product.create({ data })
}
