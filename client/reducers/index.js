import { combineReducers } from 'redux'

import error from './error'
import waiting from './waiting'
import user from './user'
import results from './results'
import sightings from './sightings'
import badges from './badges'

export default combineReducers({
  error,
  waiting,
  user,
  results,
  sightings,
  badges
})
