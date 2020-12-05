import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

export default class LandingCard extends React.Component {
  render () {
    return (
      <>
        <img src="../../images/apture.png" alt='logo' width='25%'></img>
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Join the Flock</h1>
          <p className='cardText'>This is the beginning of your journey to learn about birds of Aotearoa, make sure you go out and look for all our feathered little friends!</p>
          <nav>
            <Link to="/login"> <h3 className='cardText'>Login</h3></Link>
            <Link to="/register"><h3 className='cardText'>Register</h3></Link>
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
