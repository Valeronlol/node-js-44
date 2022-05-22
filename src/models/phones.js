const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.getList = ({ limit = 50 }) => {
    return prisma.user.findMany({
        include: { posts: true },
    })
}
