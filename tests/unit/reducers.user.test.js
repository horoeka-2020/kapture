import { SET_USER, CLEAR_USER } from '../../client/actions/user'
import userReducer from '../../client/reducers/user'

test('returns new user object on "SET_USER"', () => {
  const oldState = {
    username: '',
    isAdmin: false,
    latitude: null,
    longitude: null
  }

  const action = {
    type: SET_USER,
    user: {
      username: 'test user',
      isAdmin: false,
      latitude: null,
      longitude: null
    }
  }
  const newState = userReducer(oldState, action)
  expect(newState.username).toBe('test user')
  expect(newState).not.toBe(oldState)
})

test('returns default empty user object on "CLEAR_USER"', () => {
  const oldState = {
    username: 'test user',
    isAdmin: false,
    latitude: null,
    longitude: null
  }
  const action = {
    type: CLEAR_USER
  }
  const newState = userReducer(oldState, action)
  expect(newState).not.toBe(oldState)
})

test('returns old state on unknown action type', () => {
  const oldState = {
    username: 'test user',
    isAdmin: false,
    latitude: null,
    longitude: null
  }
  const action = {
    type: 'RANDOM_OTHER_ACTION'
  }
  const newState = userReducer(oldState, action)
  expect(newState).toBe(oldState)
})

test('returns user location data attached to object on "USER_LOCATION"', () => {
  const oldState = {
    username: '',
    isAdmin: false,
    latitude: null,
    longitude: null
  }
  const latitude = -36.8721312
  const longitude = 174.7837615
  const location = { latitude, longitude }
  const action = {
    type: 'USER_LOCATION',
    location
  }
  const newState = userReducer(oldState, action)
  expect(newState).not.toBe(oldState)
})
