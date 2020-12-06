import {
  createUser,
  getAllBirds,
  getBirdByID,
  getColours,
  getSizes
} from './api'

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

test('getAllBirds returns all birds', () => {
  const consume = () => Promise.resolve({
    body: [{
      id: 1,
      name: 'Parson Bird',
      ignoa: 'Tūī',
      description: 'Tūī are unique to New Zealand and belong to the honeyeater family',
      image: '/images/tui.jpg',
      found_in: 'North, South and Stewart Islands, and their offshore islands',
      sound: '',
      conservation_status: 'Not Threatened',
      threats: 'Predation, habitat loss',
      colour_id: 1,
      size_id: 2
    },
    {
      id: 2,
      name: 'Bellbird',
      ignoa: 'Korimako',
      description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.',
      image: '/images/bellbird.jpg',
      found_in: 'North, South, Stewart and Auckland Islands and many offshore islands',
      sound: '',
      conservation_status: 'Not Threatened',
      threats: 'Predation',
      colour_id: 4,
      size_id: 1
    }]
  })
  return getAllBirds(consume)
    .then((body) => {
      expect(body[0].description).toBe('Tūī are unique to New Zealand and belong to the honeyeater family')
      expect(body[1].name).toBe('Bellbird')
      expect(body).toHaveLength(2)
      return null
    })
})

test('getBirdByID returns a single bird', () => {
  const consume = () => Promise.resolve({
    body: {
      id: 1,
      name: 'Parson Bird',
      ignoa: 'Tūī',
      description: 'Tūī are unique to New Zealand and belong to the honeyeater family',
      image: '/images/tui.jpg',
      found_in: 'North, South and Stewart Islands, and their offshore islands',
      sound: '',
      conservation_status: 'Not Threatened',
      threats: 'Predation, habitat loss',
      colour_id: 1,
      size_id: 2
    }
  })

  const id = consume.id

  return getBirdByID(id, consume)
    .then((bird) => {
      expect(bird.id).toBe(1)
      return null
    })
})

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
