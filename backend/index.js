const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const multer = require('multer')
const connectDB = require('./config/db')

dotenv.config()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: process.env.FRONTEND_URI || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

connectDB()

app.get('/', (req, res) => {
  res.send('EngineersWorld Backend Running')
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', server: 'EngineersWorld Backend' })
})

app.use('/api/contact', require('./routes/contactRoutes'))
app.use('/api/jobs', require('./routes/jobApplicationRoutes'))
app.use('/api/internships', require('./routes/internshipRoutes'))

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message })
  }

  if (err.message) {
    return res.status(400).json({ message: err.message })
  }

  return res.status(500).json({ message: 'Internal Server Error' })
})

module.exports = app
