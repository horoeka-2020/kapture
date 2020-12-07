const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const cors = require('cors')
const express = require('express')

const authRoutes = require('./routes/auth')
const birdRoutes = require('./routes/birds')
const sightingsRoute = require('./routes/sightings')

const server = express()

server.use(express.json())
server.use(cors({ origin: 'http://localhost:8080' }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/sightings', sightingsRoute)
server.use('/api/v1/birds', birdRoutes)
server.use('/api/v1', authRoutes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
