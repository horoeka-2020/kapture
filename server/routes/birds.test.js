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

// const mockBirdsUser = {
//   id: 2,
//   name: 'Bellbird',
//   ignoa: 'Korimako',
//   date: 'Wed, 28 Sep 2020 20:00:00 GMT',
//   description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.'
// }

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

describe('GET /birds/name/:birdName', () => {
  it('Responds with bird by birdname', () => {
    db.getBirdIdByName.mockImplementation(() => Promise.resolve(mockBirds))
    const name = 'Bellbird'
    return request(server)
      .get(`/api/v1/birds/birds/name/${name}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toHaveLength(2)
        return null
      })
  })
})

// dxescribe('GET /birds/:id', () => {
//   ixt('Responds with bird by id', () => {
//     db.getBirdById.mockImplementation((id) => {
//       expect(id).toBe(2)
//       return Promise.resolve(mockBirdsUser)
//     })
//     return request(server)
//       .get('/api/v1/birds/birds/2')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .then(res => {
//         console.log(res.body)
//         expect(res.body).toHaveLength(2)
//         return null
//       })
//   })
// })

// dxescribe('GET /birds/:id returns a error', () => {
//   ixt('responds with 500 and correct error object on DB error', () => {
//     db.getBirdById.mockImplementation(() => Promise.reject(
//       new Error('mock DB error')
//     ))
//     return request(server)
//       .get('/api/v1/birds/birds/500')
//       .expect('Content-Type', /json/)
//       .expect(500)
//       .then(res => {
//         return expect(res.body.error).toBe('mock DB error')
//       })
//   })
// })
