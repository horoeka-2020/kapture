import React from 'react'

import { isAuthenticated } from '../auth'

export function IfAuthenticated ({ children }) {
  console.log('Authenticated.jsx > ifAuthenticated > children:', children)
  return isAuthenticated()
    ? <>{children}</>
    : null
}

export function IfNotAuthenticated ({ children }) {
  console.log('Authenticated.jsx > ifNotAuthenticated > children:', children)
  return !isAuthenticated()
    ? <>{children}</>
    : null
}
