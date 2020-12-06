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
    .then(users => {
      expect(users).toHaveLength(4)
      return null
    })
})

test('userExists finds an existing user', () => {
  const username = 'shellymutugrigg@gmail.com'

  return users.userExists(username, testDb)
    .then(username => {
      expect(username).toBe(true)
      return null
    })
})

test('userExists does not find an existing user', () => {
  const username = 'webdev@gmail.com'

  return users.userExists(username, testDb)
    .then(username => {
      expect(username).toBe(false)
      return null
    })
})

test('createUser creates a new user', () => {
  const user = {
    username: 'abc@gmail.com',
    password: '12345'
  }
  return users.createUser(user, testDb)
    .then((users) => {
      expect(user.username).toBe('abc@gmail.com')
      return null
    })
})
