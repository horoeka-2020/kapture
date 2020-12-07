import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { registerUser } from '../helpers/registerHelper'
import RegisterCard from '../RegisterCard.jsx'

jest.mock('./registerHelper')

test('register fields update correctly on user input', () => {
  render(<RegisterCard />)
  const usernameInput = screen.getByPlaceholderText('email address')
  // need getByLabelText for password as type="hidden" hides it for getByRole
  const passwordInput = screen.getByPlaceholderText('password')

  fireEvent.change(usernameInput, { target: { value: 'test username' } })
  fireEvent.change(passwordInput, { target: { value: 'test password' } })

  expect(usernameInput.value).toBe('test username')
  expect(passwordInput.value).toBe('test password')
})

test('calls registerUser on register button click', () => {
  render(<RegisterCard history={[]} />)

  const registerButton = screen.getByRole('button', { name: 'Submit' })
  fireEvent.click(registerButton)
  expect(registerUser).toHaveBeenCalled()
})
