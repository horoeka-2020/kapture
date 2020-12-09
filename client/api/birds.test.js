import {
  getAllBirds,
  getBirdByID,
  getBirdsByColourAndSize
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

test('getBirdByID returns a single bird by ID', () => {
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

test('getBirdByName returns a single bird by name', () => {
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

  const name = consume.name

  return getBirdByID(name, consume)
    .then((bird) => {
      expect(bird.ignoa).toBe('Tūī')
      return null
    })
})

test('getBirdsByColourAndSize returns a bird based on colour and size', () => {
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
      colour: 'brown',
      size: 'small',
      size_id: 2
    }
  })

  const colour = consume.colour
  const size = consume.size

  return getBirdsByColourAndSize(colour, size, consume)
    .then((bird) => {
      expect(bird.name).toBe('Parson Bird')
      return null
    })
})
