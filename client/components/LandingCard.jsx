import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

export default class LandingCard extends React.Component {
  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Join the Flock</h1>
          <p className='cardText'>This is the beggining of your journey to learn about all the birds of Aotearoa, go out and look for all our little feather friends!</p>
          <nav>
            <Link to="/login"> <h3 className='cardText'>Login</h3></Link>
            <Link to="/register"><h3 className='cardText'>Register</h3></Link>
            <Route path="/login" component={LoginCard}/>
            <Route path="/register"component={RegisterCard}/>
          </nav>
        </div>
      </>
    )
  }
}
