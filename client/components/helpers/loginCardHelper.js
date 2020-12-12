import { isAuthenticated, signIn, getDecodedToken } from '../../auth'
import { dispatch } from '../../store'
import { setUser } from '../../actions/user'
import { setWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'

export function signInUser (user, navigateTo) {
  const { username, password } = user
  dispatch(setWaiting())
  return signIn({ username, password }, { baseUrl: '/api/v1' })
    .then(() => {
      console.log('helpers/loginCardHelper.js > signInUser > username:', username)
      if (isAuthenticated()) {
        const { username, isAdmin } = getDecodedToken()
        console.log('helpers/loginCardHelper.js > signInUser > isAuthenticated:', username)
        dispatch(setUser({ username, isAdmin }))
        navigateTo('/profile')
      } else {
        throw new Error('Not authenticated')
      }
      return null
    })
    .catch((error) => {
      console.log(error.message)
      dispatch(showError(error.message))
    })
}
