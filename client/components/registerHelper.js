import { register, isAuthenticated, getDecodedToken } from '../auth'
import { dispatch } from '../store'
import { setUser } from '../actions/user'
import { setWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

export function registerUser (user, navigateTo) {
  const { email, password } = user
  dispatch(setWaiting())
  return register({
    email,
    password
  },
  { baseUrl: '/api/v1' })
    .then(() => {
      if (isAuthenticated()) {
        const { email } = getDecodedToken()
        dispatch(setUser({ email }))
        navigateTo('/home')
      } else {
        throw new Error('Not authenticated')
      }
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
