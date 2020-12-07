const express = require('express')
const router = express.Router()

const db = require('../db/birdSightings')

router.get('/sightings/:id', (req, res) => {
  const userId = req.params.id
  console.log('userId:', userId)
  db.getBirdSightings(userId)
    .then((sighting) => {
      res.status(200).json(sighting)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

module.exports = router
