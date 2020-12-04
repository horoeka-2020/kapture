const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const users = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUsers returns our users', () => {
  return users.getUsers(testDb)
    .then(users => {
      return expect(users).toHaveLength(4)
    })
})

test('createUser creates a new user', () => {
  const user = {
    email: 'abc@gmail.com',
    password: '12345'
  }
  return users.createUser(user, testDb)
    .then((users) => {
      return expect(user.email).toBe('abc@gmail.com')
    })
})

test('userExists finds an existing user', () => {
  const email = 'shellymutugrigg@gmail.com'

  return users.userExists(email, testDb)
    .then(email => {
      return expect(email).toBe(true)
    })
})

test('userExists does not find an existing user', () => {
  const email = 'webdev@gmail.com'

  return users.userExists(email, testDb)
    .then(email => {
      return expect(email).toBe(false)
    })
})
