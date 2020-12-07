import { ADD_TO_COLOUR, ADD_TO_SIZE } from '../actions/results'

const results = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_COLOUR:
      return {
        colour: action.colour,
        size: state.size
      }

    case ADD_TO_SIZE:
      return {
        colour: state.colour,
        size: action.size
      }
    default:
      return state
  }
}

export default results
