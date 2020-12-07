import { combineReducers } from 'redux'

import error from './error'
import waiting from './waiting'
import user from './user'
import results from './results'

export default combineReducers({
  error,
  waiting,
  user,
  results
})
