const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const profileRouter = require('./routes/profile')

dotenv.config({ path: './config.env' })

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/profile', profileRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})