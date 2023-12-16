const { Router } = require('express')
const authMiddleware = require('../middleware/authMiddleware')

const { handleImageGen } = require('../controllers/processImageController')

const router = Router();

router.post('/', authMiddleware, handleImageGen)

module.exports = router
