const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const sighting = require('./birdSightings')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

// txest('getBirdSightings returns all sightings by user Id', () => {
//   return sighting.getBirdSightings(2, testDb)
//     .then(birds => {
//       expect(birds[0].birdId).toBe(2)
//       return null
//     })
// })

test('addUserSighting adds a bird sighting', () => {
  return sighting.addUserSighting(1, -36.86075837230193, 174.77430096271627, 4, testDb)
    .then(() => {
      return sighting.getBirdSightings(1, testDb)
    }).then((birds) => {
      expect(birds).toHaveLength(5)
      return null
    })
})
