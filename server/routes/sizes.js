const express = require('express')
const router = express.Router()

const db = require('../db/sizes')

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

module.exports = router
