const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  getUsers,
  getUserByName,
  userExists,
  createUser
} = require('../db/users')

const router = express.Router()

applyAuthRoutes(router, {
  getUsers,
  userExists,
  getUserByName,
  createUser
})

module.exports = router
