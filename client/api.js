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
