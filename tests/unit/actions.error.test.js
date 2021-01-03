import { showError, hideError, SHOW_ERROR, HIDE_ERROR } from '../../client/actions/error'

test('showError returns the correct action', () => {
  const action = showError('Bird already in flock')

  expect(action.type).toBe(SHOW_ERROR)
  expect(action.errorMessage).toBe('Bird already in flock')
})

test('hideError returns the correct action', () => {
  const action = hideError()
  expect(action.type).toBe(HIDE_ERROR)
})
