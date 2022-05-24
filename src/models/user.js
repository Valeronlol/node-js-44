const dbClient = require('../services/db-client')

exports.createNewUser = (userData) => {
    return dbClient.user.create({
        data: userData
    })
}

exports.getUserByEmail = (email) => {
    return dbClient.user.findUnique({
        where: { email },
        select: {
            id: true,
            passwordHash: true,
        },
    })
}

exports.getUserList = ({ limit = 50 }) => {
    return dbClient.user.findMany({
        take: limit
    })
}
