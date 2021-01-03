import {
  getUserBadges
} from '../../client/api/badges'

test('getUserBadges returns a badges by ID', () => {
  const consume = () => Promise.resolve({
    body: [{
      id: 1,
      name: 'Endemic badge'
    }, {
      id: 2,
      name: 'Native badge'
    }]
  })

  const id = consume.id

  return getUserBadges(id, consume)
    .then((badge) => {
      expect(badge[0].name).toBe('Endemic badge')
      return null
    })
})
