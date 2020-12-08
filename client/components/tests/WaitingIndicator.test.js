import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux } from '../../test-utils'
import WaitingIndicator from '../WaitingIndicator'

test('shows wait indicator if waiting is true', () => {
  renderWithRedux(<WaitingIndicator />, {
    initialState: { waiting: true }
  })
  const waitingIndicator = screen.getByTestId('bird')
  expect(waitingIndicator).toBeInTheDocument()
})

test('renders null if waiting is false', () => {
  renderWithRedux(<WaitingIndicator />)
  const waitingIndicator = screen.queryByTestId('bird')
  expect(waitingIndicator).toBeNull()
})
