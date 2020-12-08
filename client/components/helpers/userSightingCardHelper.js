import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { addBirdSighting } from '../../api/birdSightings'
// import { getBirdIdByName } from '../../api/birds'
// import { getUserByName } from '../../../server/db/users'

export function addUserSighting (username, latitude, logitude, birdName) {
  dispatch(setWaiting())
  return addBirdSighting(username, latitude, logitude, birdName)
    .then(birdId => {
      dispatch(clearWaiting())
      return birdId
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
