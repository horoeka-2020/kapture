import {
  getColours
} from './colours'

test('getColours returns all colours', () => {
  const consume = () => Promise.resolve({
    body: {
      id: '1',
      name: 'white',
      hex: '#FFFFFF'
    }

  })
  return getColours(consume)
    .then((colour) => {
      expect(colour.name).toBe('white')
      return null
    })
})
