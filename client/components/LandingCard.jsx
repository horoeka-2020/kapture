import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

export default class LandingCard extends React.Component {
  render () {
    return (
    <>
      <h1>This is Landing Card Component</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Route
        path="/login"
        component={LoginCard}
      />
      <Route
        path="/register"
        component={RegisterCard}
      />
    </>
    )
  }
}
