// Define the routes for the repo
const express = require('express')
const router = express.Router()

const db = require('../db/db')
// put routes here

// Get all users from database
router.get('/', (req, res) => {
  db.getUsers()
    .then((allUsers) => {
      res.status(200).json(allUsers)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

// Create a new user in the database
router.post('/', (req, res) => {
  const user = req.body
  db.createUser(user)
    .then((user) => {
      res.status(201).json(user)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// Get an object from the database by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getObject(id)
    .then((object) => {
      res.status(201).json(object)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

// Edit an object in the database
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.updateObject(id, req.body)
    .then(() => {
      const newId = Number(id)
      return db.getObject(newId)
    })
    .then((object) => {
      res.status(200).json(object)
      return null
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

// Delete an object from the database
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log('objectRoute DELETE:', id)
  db.deleteObjectById(id)
    .then((post) => {
      return res.status(200).json(post)
    })
    .catch(err => {
      res.status(500).send('DB ERROR ' + err)
    })
})

module.exports = router
