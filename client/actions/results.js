export const ADD_TO_COLOUR = 'ADD_TO_COLOUR'
export const ADD_TO_SIZE = 'ADD_TO_SIZE'

export const addColour = (colour) => {
  return {
    type: ADD_TO_COLOUR,
    colour: colour
  }
}

export const addSize = (size) => {
  return {
    type: ADD_TO_SIZE,
    size: size
  }
}
