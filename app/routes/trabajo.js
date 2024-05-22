const express = require('express')
const router = express.Router()
const { getTrabajos } = require('../controllers/trabajos')

router.get('/', getTrabajos)

module.exports = router
