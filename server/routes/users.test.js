const request = require('supertest')

const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

const mockUsers = [{
    id: 1,
    email: 'abc@gmail.com',
    password: '12345'
}, {
    id: 2,
    email: 'def@gmail.com',
    password: '12345'
}, {
    id: 3,
    email: 'ghi@gmail.com',
    password: '12345'
}, {
    id: 4,
    email: 'jkl@gmail.com',
    password: '12345'
}]

describe('GET /api/v1/users', () => {
    it('responds with all our users', () => {
        db.getUsers.mockImplementation(() => Promise.resolve(mockUsers))
        return request(server)
        .get('/api/v1/users')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body[3].email).toBe('jkl@gmail.com')
            return null
        })
    })
})

it('responds with 500 and correct error message', () => {
    db.getUsers.mockImplementation(() => Promise.reject(
        new Error ('mock DB error')
    ))
    return request(server)
    .get('/api/v1/users')
    //.expect('Content-Type', /json/)
    .expect(500)
    .then(res => {
        expect(res.text).toBe('DB ERROR Error: mock DB error')
        return null
    })
})