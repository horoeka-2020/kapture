const connection = require('./connection')

function getBirds (db = connection) {
  return db('birds').select()
}

function getBirdsById (id, db = connection) {
  return db('birds')
    .where('id', id)
    .first()
}

function getColours (db = connection) {
  return db('colour').select()
}

function getSizes (db = connection) {
  return db('size').select()
}

module.exports = {
  getBirds,
  getBirdsById,
  getColours,
  getSizes
}
