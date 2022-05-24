const formidable = require('formidable')
const { nanoid } = require('nanoid')
const dbClient = require('../services/db-client')

exports.uploadFileToFileSys = (req) => new Promise(((resolve, reject) => {
    formidable({
        uploadDir: `${process.cwd()}/public/images/`,
        multiples: true,
        filename: ($, _, {originalFilename}) => `${nanoid()}_${originalFilename}`,
    })
        .parse(req, (err, _, { image }) => {
            err ? reject(err) : resolve(`/images/${image.newFilename}`)
        })
}))

exports.updateProductImage = (id, image) => {
    return dbClient.product.update({
        where: {
            id,
        },
        data: {
            image,
        },
    })
}
