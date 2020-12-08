const connection = require('./connection')

function getSizes (db = connection) {
  return db('size').select()
}

module.exports = {
  getSizes
}
