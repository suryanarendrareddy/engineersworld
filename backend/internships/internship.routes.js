const express = require('express')
const { applyForInternship } = require('./internship.controller')

const router = express.Router()

router.post('/apply', applyForInternship)

module.exports = router
