const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const employeeRoutes = require('./routes/employee')
const authRoutes = require('./routes/auth')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 4000

app.use(
  cors({
    origin: 'https://mcga-final-front-end-n353.vercel.app/'
  })
)

app.use(express.json())

// middleware
app.use('/api', employeeRoutes, authRoutes)

// Ping route
app.get('/', (req, res) => {
  res.send('welcome to my api')
})

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('🟢 mongodb connection was successful 🟢'))
  .catch((error) =>
    console.error('🔴 mongodb connection failed: ' + error + ' 🔴')
  )

app.listen(PORT, () => console.log('server listening on port', PORT))
