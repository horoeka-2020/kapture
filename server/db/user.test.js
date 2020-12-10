const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const users = require('./users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUsers returns our users', () => {
  return users.getUsers(testDb)
    .then(allUsers => {
      expect(allUsers).toHaveLength(1)
      return null
    })
})

test('userExists finds an existing user', () => {
  const username = 'this@email.com'

  return users.userExists(username, testDb)
    .then(usersUsername => {
      expect(usersUsername).toBe(true)
      return null
    })
})

test('userExists does not find an existing user', () => {
  const username = 'webdev@gmail.com'

  return users.userExists(username, testDb)
    .then(usersUsername => {
      expect(usersUsername).toBe(false)
      return null
    })
})

test('createUser creates a new user', () => {
  const user = {
    username: 'abc@gmail.com',
    password: '12345'
  }
  return users.createUser(user, testDb)
    .then((allUsers) => {
      expect(user.username).toBe('abc@gmail.com')
      return null
    })
})

// txest('getBirdsByUserID brings back the bird sightings', () => {
//   return users.getBirdsByUserID(2, testDb)
//     .then((sightings) => {
//       expect(sightings[0].birdName).toBe('Bellbird')
//       return null
//     })
// })

test('getUserBadges returns all user badges', () => {
  return users.getUserBadges(2, testDb)
    .then((badges) => {
      expect(badges).toHaveLength(6)
      return null
    })
})

test('addBadgeToUser adds a badge to the db', () => {
  const badge = {
    user_id: 2,
    badges_id: 3
  }
  return users.addBadgeToUser(badge, testDb)
    .then(() => {
      return users.getUserBadges(2, testDb)
    }).then((badges) => {
      expect(badges).toHaveLength(7)
      return null
    })
})
