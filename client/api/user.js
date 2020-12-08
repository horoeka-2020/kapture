// Create client portion of api functions
import requestor from './consume'

// const apiUrl = '/birds/user'

// User APIs
export function getUserDetails (username, consume = requestor) {
  return consume(`/birds/user/${encodeURIComponent(username)}`, 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getUserSightings (id, consume = requestor) {
  return consume(`/birds/sightings/${encodeURIComponent(id)}`, 'get')
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
