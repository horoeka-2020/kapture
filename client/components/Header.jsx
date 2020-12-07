import React from 'react'

import { Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'
import { logOut } from './helpers/navHelper'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <IfAuthenticated>
              <li><Link to="/" onClick={logOut}>Log out</Link></li>
            </IfAuthenticated>
          </ul>
        </nav>
        <hr className='nav-underline'/>
      </>
    )
  }
}
