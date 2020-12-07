// Create client portion of api functions
import requestor from '../consume'
import { dispatch } from '../store'
import { clearWaiting, setWaiting } from '../actions/waiting'

const apiUrl = '/birds'

// Bird APIs
export function getAllBirds (consume = requestor) {
  dispatch(setWaiting())
  return consume(apiUrl + '/birds', 'get', {})
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch(errorHandler)
}

export function getBirdByID (id, consume = requestor) {
  dispatch(setWaiting())
  return consume('/birds/birds/' + id, 'get')
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch(errorHandler)
}

export function getColours (consume = requestor) {
  dispatch(setWaiting())
  return consume(apiUrl + '/colour', 'get')
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch(errorHandler)
}

export function getSizes (consume = requestor) {
  dispatch(setWaiting())
  return consume(apiUrl + '/size', 'get')
    .then((res) => {
      dispatch(clearWaiting())
      return res.body
    })
    .catch(errorHandler)
}

export function getUserBadges (userId, consume = requestor) {
  dispatch(setWaiting())
  return consume(apiUrl + '/badges/' + userId)
    .then((res) => res.body)
    .catch(errorHandler)
}

export function getSightingsByUser (userId, consume = requestor) {
  dispatch(setWaiting())
  return consume(apiUrl + '/sightings/' + userId)
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
