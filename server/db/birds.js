const connection = require('./connection')

function getBirds (db = connection) {
  return db('birds').select()
}

function getBirdsById (id, db = connection) {
  return db('birds')
    .join('colour', 'birds.colour_id', 'colour.id')
    .join('size', 'birds.size_id', 'size.id')
    .where('birds.id', id)
    .select('birds.id as birdId',
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

function getColours (db = connection) {
  console.log(db('colour'))
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
