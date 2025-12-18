const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db.js')
dotenv.config()

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
)
app.use(express.json())
connectDB()
const PORT = process.env.PORT || 8000

app.use('/api/contact', require('./routes/contactRoutes'))

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
