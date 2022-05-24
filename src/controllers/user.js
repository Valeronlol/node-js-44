const { omit } = require('lodash')
const { createHash, createJwtTokenAsync } = require('../services/auth')
const userModel = require('../models/user')
const { AppError } = require('../utils/app-errors')

exports.createUser = async (req, res) => {
    const { email, password, name } = req.body
    if (!email || !password) {
        throw new AppError({ message: 'Login and password is required!', code: 400 })
    }
    const passwordHash = createHash(password)
    const resultData = await userModel.createNewUser({
        email,
        passwordHash,
        name,
    })
    const result = omit(resultData, ['passwordHash'])
    res.send(result)
}

exports.authenticateUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new AppError({ message: 'Login and password is required!', code: 400 })
    }
    const passwordHash = createHash(password)
    const currentUser = await userModel.getUserByEmail(email)
    if (!currentUser || passwordHash !== currentUser.passwordHash) {
        throw new AppError({ message: 'Authorized error', code: 401 })
    }
    const token = await createJwtTokenAsync({
        sub: currentUser.id,
        iat: Math.floor(Date.now() / 1000),
    })
    res.send({ token })
}
