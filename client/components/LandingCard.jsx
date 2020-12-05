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
          <p className='cardText'>This is the beginning of your journey to learn about birds of Aotearoa, make sure you go out and look for all our feathered little friends!</p>
          <Link to="/login"><button className="log-in">Log In</button></Link>
          <Link to="/register"><button className="register">Register</button></Link>
          <Route exact path="/login" component={LoginCard}/>
          <Route exact path="/register" component={RegisterCard}/>
        </div>
      </>
    )
  }
}
