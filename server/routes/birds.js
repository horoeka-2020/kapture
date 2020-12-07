const express = require('express')
const router = express.Router()

const db = require('../db/birds')
const user = require('../db/users')

router.get('/birds', (req, res) => {
  db.getBirds()
    .then((allBirds) => {
      res.status(200).json(allBirds)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

router.get('/birds/:id', (req, res) => {
  const id = req.params.id
  db.getBirdsById(id)
    .then((bird) => {
      res.status(200).json(bird)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

router.get('/birds/:colour/:size', (req, res) => {
  const colour = req.params.colour
  const size = req.params.size
  db.getBirdsByColourAndSize(colour, size)
    .then((birds) => {
      res.status(200).json(birds)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

router.get('/colour', (req, res) => {
  db.getColours()
    .then((colour) => {
      res.status(200).json(colour)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

router.get('/size', (req, res) => {
  db.getSizes()
    .then((size) => {
      res.status(200).json(size)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

// router.get('/sightings/:id', (req, res) => {
//   const id = req.params.id
//   user.getBirdsByUserID(id)
//     .then((sighting) => {
//       res.status(200).json(sighting)
//       return null
//     })
//     .catch(err => {
//       res.status(500).send('SERVER SIDE API ERROR ' + err)
//     })
// })

router.get('/badges/:id', (req, res) => {
  const id = req.params.id
  user.getUserBadges(id)
    .then((badges) => {
      res.status(200).json(badges)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

// Route needs a bit of work to post
// router.post('/badges/:id', (req, res) => {
//   const id = req.params.id
//   user.addBadgeToUser(id)
//     .then((badges) => {
//       res.status(200).json(badges)
//       return null
//     })
//     .catch(err => {
//       res.status(500).send('SERVER SIDE API ERROR ' + err)
//     })
// })

module.exports = router
