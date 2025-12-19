const express = require('express')
const { applyForInternship } = require('../controllers/internshipApplicationController')

const router = express.Router()

router.post('/apply', applyForInternship)

module.exports = router
