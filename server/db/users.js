// Create database side of api functions
const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  getUsers,
  createUser,
  userExists,
  getUserInfoByName,
  getBirdsByUserID,
  getUserBadges,
  addBadgeToUser,
  getUserByName
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

function getUserInfoByName (username, db = connection) {
  return db('users')
    .select('username', 'is_admin as isAdmin', 'id', 'hash')
    .where('username', username)
    .first()
}

function getUserByName (username, db = connection) {
  return db('users')
    .select('username', 'is_admin as isAdmin', 'id', 'hash')
    .where('username', username)
    .first()
}

function getBirdsByUserID (id, db = connection) {
  return db('bird_sightings')
    .join('users', 'bird_sightings.user_id', 'users.id')
    .join('birds', 'bird_sightings.bird_id', 'birds.id')
    .join('colour', 'birds.colour_id', 'colour.id')
    .join('size', 'birds.size_id', 'size.id')
    .where('users.id', id)
    .select('bird_sightings.user_id as birdUserID',
      'users.username as birdUser',
      'bird_sightings.bird_id as birdSightingID',
      'bird_sightings.latitude as birdLat',
      'bird_sightings.longitude as birdLong', 'bird_sightings.date_of_sighting as birdDate', 'bird_sightings.time as birdTime',
      'birds.id as birdId',
      'birds.name as birdName',
      'birds.ignoa as birdIgnoa',
      'birds.description as birdDesc',
      'birds.image as birdImage',
      'birds.found_in as birdFoundIn',
      'birds.sound as birdSound',
      'birds.conservation_status as birdCons',
      'birds.threats as birdThreat',
      'colour.name as birdColourName',
      'colour.hex as birdColourHex',
      'size.name as birdSize',
      'size.height as birdHeight',
      'size.width as birdWidth',
      'birds.size_id as birdSizeId')
}

function getUserBadges (userID, db = connection) {
  return db('badges')
    .join('user_badges', 'badges.id', 'user_badges.badges_id')
    .where('user_badges.user_id', userID)
}

function addBadgeToUser (newBadge, db = connection) {
  return db('user_badges').insert(newBadge)
}
