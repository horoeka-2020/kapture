import { showError, hideError, SHOW_ERROR, HIDE_ERROR } from './error'

test('showError returns the correct action', () => {
  const action = showError('Houston we have a problem')

  expect(action.type).toBe(SHOW_ERROR)
  expect(action.errorMessage).toBe('Houston we have a problem')
})

test('hideError returns the correct action', () => {
  const action = hideError()
  expect(action.type).toBe(HIDE_ERROR)
})
