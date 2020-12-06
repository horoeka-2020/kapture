import { dispatch } from '../store' // , getState
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'
import { getColours } from '../api'

export function getAllColours () {
  dispatch(setWaiting())
  return getColours
    .then(colours => {
      dispatch(clearWaiting())
      const { id, name, hex, image } = colours
      return {
        id,
        name,
        hex,
        image
      }
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
