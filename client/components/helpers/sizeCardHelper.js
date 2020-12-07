import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { getSizes } from '../../api/api'

export function getAllSizes () {
  dispatch(setWaiting())
  return getSizes
    .then(sizes => {
      dispatch(clearWaiting())
      const { id, name, height, width } = sizes
      return {
        id,
        name,
        height,
        width
      }
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
