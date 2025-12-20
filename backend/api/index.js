const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('../config/db')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: [process.env.FRONTEND_URI],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/contact', require('../routes/contactRoutes'))
app.use('/api/jobs', require('../routes/jobApplicationRoutes'))
app.use('/api/internships', require('../routes/internshipRoutes'))

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', server: 'EngineersWorld Backend' })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
