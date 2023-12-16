const { Router } = require('express')
const authMiddleware = require('../middleware/authMiddleware')

const { handleImageGen } = require('../controllers/processImageController')

const router = Router();

router.get('/', authMiddleware, handleImageGen)

module.exports = router