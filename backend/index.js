const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const allowedOrigins = [
  'http://localhost:3000',
  'https://engineersworld.in',
  'https://www.engineersworld.in',
]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)
      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }
      return callback(new Error('CORS not allowed'), false)
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
)
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
console.log('ADMIN_MAIL:', process.env.ADMIN_MAIL)


app.get('/', (req, res) => {
  res.send('EngineersWorld Backend Running')
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', server: 'EngineersWorld Backend' })
})

app.use('/api/contact', require('./routes/contactRoutes'))
app.use('/api/jobs', require('./routes/jobApplicationRoutes'))
app.use('/api/internships', require('./routes/internshipRoutes'))

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectDB()
    console.log('MongoDB Connected')
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`)
    })
  } catch (err) {
    console.error('Failed to start server:', err.message)
    process.exit(1)
  }
}

startServer()

module.exports = app
