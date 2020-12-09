const request = require('supertest')

const server = require('../server')
const db = require('../db/birds')

jest.mock('../db/birds')

const mockBirds = [{
  id: 1,
  name: 'Parson Bird',
  ignoa: 'Tūī',
  description: 'Tūī are unique to New Zealand and belong to the honeyeater family, which means they feed mainly on nectar from flowers of native plants.'
},
{
  id: 2,
  name: 'Bellbird',
  ignoa: 'Korimako',
  date: 'Wed, 28 Sep 2020 20:00:00 GMT',
  description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.'
}
]

describe('GET /api/v1/birds', () => {
  it('Responds with all birds on res.body', () => {
    db.getBirds.mockImplementation(() => Promise.resolve(mockBirds))
    return request(server)
      .get('/api/v1/birds/birds')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveLength(2)
        return null
      })
  })
})
