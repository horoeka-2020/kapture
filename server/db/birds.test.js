const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const birds = require('./birds')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getBirds returns our birds', () => {
  return birds.getBirds(testDb)
    .then(birds => {
      expect(birds).toHaveLength(21)
      return null
    })
})

test('getBirdById returns a bird by id', () => {
  return birds.getBirdById(12, testDb)
    .then((birds) => {
      expect(birds[0].birdName).toBe('Kingfisher')
      return null
    })
})

test('getBirdById returns a bird by name', () => {
  return birds.getBirdIdByName('Kingfisher', testDb)
    .then((bird) => {
      expect(bird[0].birdId).toBe(12)
      return null
    })
})

test('getBirdByColourAndSize returns a bird by colour and size', () => {
  return birds.getBirdsByColourAndSize('green', 'tiny', testDb)
    .then((birds) => {
      expect(birds[0].birdName).toBe('Bellbird')
      return null
    })
})
