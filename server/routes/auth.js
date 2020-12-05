const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const {
  getUsers,
  userExists,
  createUser
} = require('../db/db')

const router = express.Router()

applyAuthRoutes(router, {
  getUsers,
  userExists,
  createUser
})

module.exports = router
