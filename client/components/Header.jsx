import React from 'react'

import { Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'
import { logOut } from './helpers/navHelper'

export default class Home extends React.Component {
  render () {
    return (
      <header>
        <img className="logo" src="/images/build/apture.png" alt='logo' width='15%'></img>
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/sightings">Sightings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <IfAuthenticated>
              <li><Link to="/" onClick={logOut}><span>Log out</span></Link></li>
            </IfAuthenticated>
          </ul>
        </nav>
        <hr className='nav-underline'/>
      </header>
    )
  }
}
