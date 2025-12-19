const express = require('express')
const router = express.Router()
const upload = require('../middlewares/upload')
const { applyForJob } = require('../controllers/jobApplicationController')

router.post('/apply', upload.single('resume'), applyForJob)

module.exports = router
