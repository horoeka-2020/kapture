import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'
import ErrorMessage from './ErrorMessage'

export default class LandingCard extends React.Component {
  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Join the Flock</h1>
          <p className='cardText'>This is the beginning of your journey to learn about birds of Aotearoa, make sure you go out and look for all our feathered little friends!</p>
          <ErrorMessage />
          <Link to="/welcome/login"><button className="log-in">Log In</button></Link>
          <Link to="/welcome/register"><button className="register">Register</button></Link>
          <Route exact path="/welcome/login" component={LoginCard}/>
          <Route exact path="/welcome/register" component={RegisterCard}/>
        </div>
      </>
    )
  }
}
