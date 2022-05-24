const { uploadFileToFileSys, updateProductImage } = require('../models/upload')

exports.uploadImage = async (req, res) => {
    const productId = parseInt(req.params.id)
    const imagePath = await uploadFileToFileSys(req)
    await updateProductImage(productId, imagePath)
    res.send({ imagePath })
}
