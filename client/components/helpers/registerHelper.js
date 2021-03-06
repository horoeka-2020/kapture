import { register, isAuthenticated, getDecodedToken } from '../../auth'
import { dispatch } from '../../store'
import { setUser } from '../../actions/user'
import { setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'

export function registerUser (user, navigateTo) {
  const { username, password } = user
  dispatch(setWaiting())
  return register({
    username,
    password
  },
  { baseUrl: '/api/v1' })
    .then(() => {
      if (isAuthenticated()) {
        const { username, isAdmin } = getDecodedToken()
        dispatch(setUser({ username, isAdmin }))
        navigateTo('/profile')
      } else {
        throw new Error('Not authenticated')
      }
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
