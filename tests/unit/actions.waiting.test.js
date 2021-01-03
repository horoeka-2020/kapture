import {
  setWaiting,
  clearWaiting,
  SET_WAITING,
  CLEAR_WAITING
} from '../../client/actions/waiting'

test('setWaiting returns the correct action', () => {
  const action = setWaiting()
  expect(action.type).toBe(SET_WAITING)
})

test('clearWaiting returns the correct action', () => {
  const action = clearWaiting()
  expect(action.type).toBe(CLEAR_WAITING)
})
