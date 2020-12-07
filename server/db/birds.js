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
      'colour.id as birdColourId',
      'colour.name as birdColourName',
      'colour.hex as birdColourHex',
      'size.id as birdSize',
      'size.height as birdHeight',
      'size.width as birdWidth',
      'size.name as birdSizeName')
}

function getBirdsByColourAndSize (colour, size, db = connection) {
  return db('birds')
    .join('colour', 'birds.colour_id', 'colour.id')
    .where('colour.name', colour)
    .join('size', 'birds.size_id', 'size.id')
    .where('size.name', size)
    .select('birds.id as birdId',
      'birds.name as birdName',
      'birds.ignoa as birdIgnoa',
      'birds.description as birdDesc',
      'birds.image as birdImage',
      'birds.found_in as birdFoundIn',
      'birds.sound as birdSound',
      'birds.conservation_status as birdCons',
      'birds.threats as birdThreat',
      'colour.id as birdColourId',
      'colour.name as birdColourName',
      'colour.hex as birdColourHex',
      'size.id as birdSize',
      'size.height as birdHeight',
      'size.width as birdWidth',
      'size.name as birdSizeName')
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
  getSizes,
  getBirdsByColourAndSize
}
