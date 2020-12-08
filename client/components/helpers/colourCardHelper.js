import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { getColours } from '../../api/colours'

export function getAllColours () {
  dispatch(setWaiting())
  return getColours()
    .then(colours => {
      dispatch(clearWaiting())
      return colours
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
