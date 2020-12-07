import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { getBirdSightings } from '../../api/birdSightings'

export function getAllBirdSightings (user) {
  dispatch(setWaiting())
  return getBirdSightings(user)
    .then(sightings => {
      dispatch(clearWaiting())
      return sightings
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
