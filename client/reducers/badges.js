import { GET_BADGES } from '../actions/badges'

const badges = (state = {}, action) => {
  switch (action.type) {
    case GET_BADGES:
      return action.state
    default:
      return state
  }
}

export default badges
