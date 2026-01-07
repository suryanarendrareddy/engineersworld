const express = require('express')
const { createContact } = require('./contact.controller')

const router = express.Router()

router.post('/', createContact)

module.exports = router
