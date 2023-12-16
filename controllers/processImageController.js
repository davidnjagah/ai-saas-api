// ============ HANDLE IMAGE REQUEST
// GET : api/processimage/imagegen
// PROTECTED

const handleImageGen = (req, res, next) => {
    res.json("Get Generated Image")
}

module.exports = { handleImageGen }