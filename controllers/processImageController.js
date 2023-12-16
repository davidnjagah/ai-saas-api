// ============ HANDLE IMAGE REQUEST
// POST : api/processimage/imagegen
// PROTECTED

const handleImageGen = (req, res, next) => {
    //console.log(req)
    res.json("Get Generated Image")
}

module.exports = { handleImageGen }