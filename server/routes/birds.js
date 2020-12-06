const express = require('express')
const router = express.Router()

const db = require('../db/birds')

router.get('/birds', (req, res) => {
  db.getBirds()
    .then((allBirds) => {
      res.status(200).json(allBirds)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
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
      res.status(500).send('DB ERROR ' + err)
    })
})

router.get('/size', (req, res) => {
  db.getSizes()
    .then((size) => {
      res.status(200).json(size)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

module.exports = router
