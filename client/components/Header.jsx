import React from 'react'

import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/sightings">Sightings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <hr className='nav-underline'/>
      </>
    )
  }
}
