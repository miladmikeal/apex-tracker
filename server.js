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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))

  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})