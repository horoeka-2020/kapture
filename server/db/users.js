// Create database side of api functions
const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  getUsers,
  createUser,
  userExists,
  getUserByName,
  getBirdsByUserID
}

// Create getUser function for api on server/database side
function getUsers (db = connection) {
  return db('users').select()
}

// Create createUser function for api on server/database side
function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        throw new Error('Bird already in flock')
      }
      return false
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      return db('users').insert({
        username: user.username,
        hash: passwordHash,
        is_admin: false
      })
    })
}

// Create userExists function to see if user aleady exists
function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then((count) => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .select('username', 'is_admin as isAdmin', 'id', 'hash')
    .where('username', username)
    .first()
    .then((user) => {
      return user
    })
}

function getBirdsByUserID (id, db = connection) {
  return db('bird_sightings')
    .join('users', 'bird_sightings.user_id', 'users.id')
    .where('users.id', id)
    .select('bird_sightings.user_id as birdUserID',
      'bird_sightings.bird_id as birdSightingID',
      'bird_sightings.latitude as birdLat',
      'bird_sightings.longitude as birdLong', 'bird_sightings.date_of_sighting as birdDate', 'bird_sightings.time as birdTime')
}
