const express = require('express')
const loginController = require('../controllers/login')
const router = express.Router()

// Listens to the POST method
router.post('/login', loginController.login)

module.exports = router
