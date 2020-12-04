import { createUser } from './api'

test('createUser returns a valid user', () => {
  const consume = () => Promise.resolve({
    body: {
      email: 'gmail@email.com',
      password: '12345'
    }
  })
  const user = {
    email: 'gmail@email.com',
    password: '12345'
  }

  return createUser(user, consume)
    .then((body) => {
      expect(body.email).toBe('gmail@email.com')
      return null
    })
})
