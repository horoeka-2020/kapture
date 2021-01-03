import {
  getSizes
} from '../../client/api/sizes'

test('getSizes returns all sizes', () => {
  const consume = () => Promise.resolve({
    body: [
      {
        id: 1,
        name: 'tiny',
        height: 5,
        width: 5
      },
      {
        id: 2,
        name: 'small',
        height: 10,
        width: 10
      },
      {
        id: 3,
        name: 'medium',
        height: 30,
        width: 30
      }]
  })

  return getSizes(consume)
    .then((size) => {
      expect(size[2].id).toBe(3)
      expect(size).toHaveLength(3)
      return null
    })
})
