import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOut } from './helpers/navHelper'

class Home extends React.Component {
  componentDidMount () {
  }

  render () {
    return (
      <header>
        <div className="small-logo-wrapper">
          <a href="/"><img className="small-logo" src="/images/build/kapture.png" alt='logo'></img></a>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/sightings">Sightings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <IfAuthenticated>
              <li><Link to="/" onClick={logOut}><span>Log out</span></Link></li>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <li><Link to="/" >Log In</Link></li>
            </IfNotAuthenticated>
          </ul>
        </nav>
        <hr className='nav-underline'/>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
