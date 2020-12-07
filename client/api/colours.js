// Create client portion of api functions
import requestor from './consume'

const apiUrl = '/birds'

// Colour API
export function getColours (consume = requestor) {
  return consume(apiUrl + '/colour', 'get')
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
