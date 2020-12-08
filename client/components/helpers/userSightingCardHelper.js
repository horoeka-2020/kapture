import { dispatch } from '../../store'
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { addBirdSighting } from '../../api/birdSightings'
// import { getBirdIdByName } from '../../api/birds'
// import { getUserByName } from '../../../server/db/users'

export function addUserSighting ({ username, latitude, longitude, birdName }) {
  dispatch(setWaiting())
  return addBirdSighting(username, latitude, longitude, birdName)
    .then(birdId => {
      dispatch(clearWaiting())
      return birdId
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
