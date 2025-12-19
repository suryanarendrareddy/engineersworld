const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('../config/db')

dotenv.config()

const app = express()

app.use(
  cors({
    origin: 'https://engineersworld.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true,
  })
)

app.use(express.json())

connectDB()

app.use('/api/contact', require('../routes/contactRoutes'))
app.use('/api/jobs', require('../routes/jobApplicationRoutes'))
app.use('/api/internships', require('../routes/internshipRoutes'))

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', server: 'EngineersWorld Backend' })
})

module.exports = app
