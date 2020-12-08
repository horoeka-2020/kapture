import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { getBirdSightings } from '../../api/birdSightings'

export function getAllBirdSightings (userId) {
  dispatch(setWaiting())
  return getBirdSightings(userId)
    .then(sightings => {
      dispatch(clearWaiting())
      return sightings
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
