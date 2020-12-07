import { GET_SIGHTINGS } from '../actions/sightings'

const sightings = (state = {}, action) => {
  switch (action.type) {
    case GET_SIGHTINGS:
      return action.state
    default:
      return state
  }
}

export default sightings
