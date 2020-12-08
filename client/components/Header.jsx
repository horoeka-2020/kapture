import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'
import { logOut } from './helpers/navHelper'
class Home extends React.Component {
  render () {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to={`/profile/${this.props.user.username}`}>Profile</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/sightings">Sightings</Link></li>
            <li><Link to="/about">About</Link></li>
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
