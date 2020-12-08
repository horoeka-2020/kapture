import requestor from './consume'

export function getUserBadges (id, consume = requestor) {
  return consume(`/birds/badges/${encodeURIComponent(id)}`, 'get')
    .then((res) => res.body)
    .catch(errorHandler)
}

function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
