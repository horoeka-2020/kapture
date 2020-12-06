// Create database side of api functions
const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  getUsers,
  createUser,
  userExists,
  getUserByName
}

// Create getUser function for api on server/database side
function getUsers (db = connection) {
  return db('users').select()
}

// Create createUser function for api on server/database side
function createUser (user, db = connection) {
  console.log('db/users.js > createUser:', user)
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        throw new Error('Bird already in flock')
      }
      console.log('db/users.js > createUser > user does not exist:', user)
      return false
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      console.log('db/users.js > createUser > insert user:', user)
      return db('users').insert({
        username: user.username,
        hash: passwordHash,
        is_admin: false
      })
    })
}

// Create userExists function to see if user aleady exists
function userExists (username, db = connection) {
  console.log('db/users.js > userExists:', username)
  return db('users')
    .count('id as n')
    .where('username', username)
    .then((count) => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  console.log('db/users.js > getUserByName:', username)
  return db('users')
    .select('username', 'is_admin as isAdmin', 'id', 'hash')
    .where('username', username)
    .first()
}

// Test to be added back into userExists.test.js when authenticare working
// txest('createUser creates a new user', () => {
//     const user = {
//       email: 'abc@gmail.com',
//       password: '12345'
//     }
//     return users.createUser(user, testDb)
//       .then((users) => {
//         expect(user.email).toBe('abc@gmail.com')
//         return null
//       })
//   })
