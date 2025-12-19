const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('../config/db')

dotenv.config()

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.use(async (req, res, next) => {
  try {
    await connectDB()
    next()
  } catch (err) {
    console.error('DB error:', err)
    res.status(500).json({ message: 'Database connection failed' })
  }
})

app.use('/api/contact', require('../routes/contactRoutes'))
app.use('/api/jobs', require('../routes/jobApplicationRoutes'))
app.use('/api/internships', require('../routes/internshipRoutes'))

module.exports = app
