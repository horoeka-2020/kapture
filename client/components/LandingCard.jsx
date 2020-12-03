import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

export default class LandingCard extends React.Component {
  render () {
    return (
    <>
    <div className='box'>

      <h1 className='cardTitle'>Join the Flock</h1>
      <p className='cardText'>This is the beggining of your journey to learn about all the birds of Aotearoa, go out and look for all our little feather friends!</p>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Route
        path="/login"
        component={LoginCard}
      />
      <Route
        path="/register"
        component={RegisterCard}
      />
      </nav>
    </div>
    </>
    )
  }
}
