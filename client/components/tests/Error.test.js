import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../../test-utils'
import Error from '../Error.jsx'

jest.mock('../helpers/errorHelper')

test('shows error message if there is one in the redux store', () => {
  renderWithRedux(<Error />, {
    initialState: { error: 'mock error message' }
  })
  const error = screen.getByRole('alert')
  expect(error).toHaveTextContent('mock error')
})

test('renders null if no error in the store', () => {
  renderWithRedux(<Error />)
  const error = screen.queryByRole('alert')
  expect(error).toBeNull()
})
