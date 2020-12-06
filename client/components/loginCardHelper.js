import { isAuthenticated, signIn, getDecodedToken } from '../auth'
import { dispatch } from '../store'
import { setUser } from '../actions/user'
import { setWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

export function signInUser (user, navigateTo) {
  const { username, password } = user
  dispatch(setWaiting())
  console.log('loginCardHelper.js > signInUser > BEFORE signIn:', user)
  return signIn({ username, password }, { baseUrl: '/api/v1' })
    .then(() => {
      console.log('loginCardHelper.js > signInUser > BEFORE isAuthenticated:', user)
      if (isAuthenticated()) {
        console.log('loginCardHelper.js > signInUser > AFTER isAuthenticated:', user)
        const { username, isAdmin, gardenId } = getDecodedToken()
        dispatch(setUser({ username, isAdmin, gardenId }))
        navigateTo('/garden')
      } else {
        throw new Error('Not authenticated')
      }
      return null
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
