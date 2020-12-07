import {
  getAllBirds,
  getBirdByID
} from './birds'

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
