import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { registerUser } from '../helpers/registerHelper'
import RegisterCard from '../RegisterCard.jsx'

jest.mock('../helpers/registerHelper')

test('register fields update correctly on user input', () => {
  render(<RegisterCard />)
  const usernameInput = screen.getByPlaceholderText('email address')
  // need getByLabelText for password as type="hidden" hides it for getByRole
  const passwordInput = screen.getByPlaceholderText('password')
  const confirmInput = screen.getByPlaceholderText('confirm password')

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
