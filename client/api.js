// Create client portion of api functions
// import request from 'superagent'
import requestor from './consume'
import { showError } from './actions/error'
import { dispatch } from './store'

// Create createUser function for api on client components side
// export function createUser (user, consume = requestor) {
//   return consume('/users', 'post', user)
//     .then(res => {
//       return res.body
//     })
//     .catch(errorHandler('POST', '/'))
// }
// import request from 'superagent'

// const userUrl = 'http://localhost:3000/api/v1/users'

// Create createUser function for api on client components side
export function createUser (user, consume = requestor) {
  return consume('/users', 'post', user)
    .then(res => {
      return res.body
    })
    .catch((error) => {
      console.log(error.message)
      dispatch(showError(error.message))
    })
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
<<<<<<< HEAD
// function errorHandler (method, route) {
//   return (err) => {
//     if (err.message === 'Not Found') {
//       throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
//     } else {
//       throw Error(`${err.message} on ${method} ${route}`)
//     }
//   }
// }
=======
function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
>>>>>>> b2411ad3bb71ba6976ccc4dddcb1cda8b382418d
