const express = require('express')
const connectDB = require('./api/config/db')
const privateAuth = require('./api/middleware/privateAuth')
const indexRouter = require('./api/routes/indexRouter')
require('dotenv/config')

const app = express()

app.use(express.json())

app.use('/api', indexRouter)

app.use(privateAuth)

connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
