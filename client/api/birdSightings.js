// Create client portion of api functions
import requestor from './consume'

// Bird Sightings APIs
export function getBirdSightings (userId, consume = requestor) {
  return consume(`/sightings/${encodeURIComponent(userId)}`, 'get', {})
    .then((res) => {
      console.log('api/birdSightings.js > res.body:', res.body)
      return res.body
    })
    .catch(errorHandler)
}

// Bird Sightings APIs
export function addBirdSighting (username, latitude, longitude, birdName, consume = requestor) {
  return consume(`/sightings/${encodeURIComponent(username)}/${encodeURIComponent(latitude)}/${encodeURIComponent(longitude)}/${encodeURIComponent(birdName)}`, 'post', { username, latitude, longitude, birdName })
    .then((res) => (res.body))
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
