import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { registerUser } from '../../client/components/helpers/registerHelper'
import RegisterCard from '../../client/components/RegisterCard.jsx'

jest.mock('../../client/components/helpers/registerHelper')

test('register fields update correctly on user input', () => {
  render(<RegisterCard />)
  const usernameInput = screen.getByPlaceholderText('please enter your email address')
  // need getByLabelText for password as type="hidden" hides it for getByRole
  const passwordInput = screen.getByPlaceholderText('enter your password')
  const confirmInput = screen.getByPlaceholderText('confirm your password')

  fireEvent.change(usernameInput, { target: { value: 'test username' } })
  fireEvent.change(passwordInput, { target: { value: 'test password' } })
  fireEvent.change(confirmInput, { target: { value: 'test password confirm' } })

  expect(usernameInput.value).toBe('test username')
  expect(passwordInput.value).toBe('test password')
  expect(confirmInput.value).toBe('test password confirm')
})

test('calls registerUser on register button click', () => {
  render(<RegisterCard history={[]} />)

  const registerButton = screen.getByRole('button', { name: 'Submit' })
  fireEvent.click(registerButton)
  expect(registerUser).toHaveBeenCalled()
})
