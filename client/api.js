// Create client portion of api functions
import requestor from './consume'
import { showError } from './actions/error'
import { dispatch } from './store'

const apiUrl = '/api/v1/birds'

// Create createUser function for api on client components side
export function createUser (user, consume = requestor) {
  return consume('/users', 'post', user)
    .then(res => {
      return res.body
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}

// Bird APIs
export function getAllBirds (consume = requestor) {
  return consume(apiUrl + '/bird/', 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getBirdByID (id, consume = requestor) {
  return consume(apiUrl + '/birds/' + id, 'get')
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

// // Create getObjects function for api on client components side
// export function getObjects () {
//   return request
//     .get(objectUrl)
//     .then(response => response.body)
//     .catch(errorHandler('GET', '/'))
// }

// // Create getObject function for api on client components side
// export function getObject (objectId) {
//   return request.get(`/api/v1/objects/${objectId}`)
//     .then(res => {
//       return res.body
//     })
//     .catch(errorHandler('GET', '/:id'))
// }

// // Create updateObject function for api on client components side
// export function updateObject (object) {
//   return request.patch(`/api/v1/objects/${object.id}`)
//     .send(object)
//     .then(res => {
//       return res.body
//     })
//     .catch(errorHandler('PATCH', `/objects/${object.id}`))
// }

// // Create deleteObject function for api on client components side
// export function deleteObject (objectId) {
//   console.log("api.js deleteObject:", objectId)
//   return request.del(`/api/v1/objects/${objectId}`)
//     .then(res => {
//       return res.body
//     })
//     .catch(errorHandler('DELETE', '/api/v1/objects/:id'))
// }

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
