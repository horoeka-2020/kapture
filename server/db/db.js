// Create database side of api functions
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  createUser,
  userExists
}

// Create getUser function for api on server/database side
function getUsers (db = connection) {
  return db('users').select()
}

// Create createUser function for api on server/database side
function createUser (user, db = connection) {
  return userExists (user.email, db)
  .then((exists) => {
    if (exists) {
      throw new Error ('Bird already in flock')
    }
    return db('users').insert({
      email: user.email,
      password: user.password
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

// Create addObjects function for api on server/database side
// function addObject (newObject, db = connection) {
//   return db('object').insert(newObject)
// }

// // Create getObject function for api on server/database side
// function getObject (id, db = connection) {
//   return db('object').where('object.id', id).select('id', 'name', 'description')
// }

// // Create updateObject function for api on server/database side
// function updateObject (id, update, db = connection) {
//   return db('object').where('object.id', id).update(update)
// }

// // Create deleteObjectById function for api on server/database side
// function deleteObjectById(id, db = connection) {
//   console.log("db.js deleteObject:", id)
//   return db('object').where('object.id', id).delete()
// }