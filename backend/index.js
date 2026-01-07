const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: (origin, callback) => {

      if (!origin) return callback(null, true)

      if (origin === process.env.FRONTEND_URI) {
        return callback(null, true)
      }

      return callback(new Error('CORS blocked'))
    },
    credentials: true,
  })
)


app.get('/', (req, res) => {
  res.send('EngineersWorld Backend Running')
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', server: 'EngineersWorld Backend' })
})

app.use('/api/contact', require('./contact/contact.routes'))
app.use('/api/jobs', require('./jobs/jobs.routes'))
app.use('/api/internships', require('./internships/internship.routes'))

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
