// Create client portion of api functions
import requestor from './consume'
// import { showError } from './actions/error'
// import { dispatch } from './store'

const apiUrl = '/birds'

// Create createUser function for api on client components side
// export function createUser (user, consume = requestor) {
//   return consume('/users', 'post', user)
//     .then(res => {
//       return res.body
//     })
//     .catch((error) => {
//       dispatch(showError(error.message))
//     })
// }

// Removed from api.test.js
// txest('createUser returns a valid user', () => {
//   const consume = () => Promise.resolve({
//     body: {
//       email: 'gmail@email.com',
//       password: '12345'
//     }
//   })
//   const user = {
//     email: 'gmail@email.com',
//     password: '12345'
//   }

//   return createUser(user, consume)
//     .then((body) => {
//       expect(body.email).toBe('gmail@email.com')
//       return null
//     })
// })

// Bird APIs
export function getAllBirds (consume = requestor) {
  return consume(apiUrl + '/birds', 'get', {})
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getBirdByID (id, consume = requestor) {
  return consume('/birds/birds/' + id, 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getColours (consume = requestor) {
  return consume(apiUrl + '/colour', 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getSizes (consume = requestor) {
  return consume(apiUrl + '/size', 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

// Handle errors in application
function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
