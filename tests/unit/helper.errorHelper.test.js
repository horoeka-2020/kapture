import { HIDE_ERROR } from '../../client/actions/error'
import { hide } from '../../client/components/helpers/errorHelper'
import { dispatch } from '../../client/store'

jest.mock('../../client/store')

afterEach(() => {
  return jest.resetAllMocks()
})

test('hide dispatches the hideError action', () => {
  hide()
  expect(dispatch).toHaveBeenCalledWith({ type: HIDE_ERROR })
})
