import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOut } from './helpers/navHelper'
import { setUserLocation } from '../actions/user'

class Home extends React.Component {
  componentDidMount () {
    const setLocation = (location) => {
      this.props.dispatch(setUserLocation(location))
      this.setState({ userCoordinates: [{ lat: location.latitude, lon: location.longitude }] })
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      })
    }
  }

  render () {
    return (
      <header>
        <nav className="navbar">
          <ul>
            {/* <li><Link to="/home">Home</Link></li> */}
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/sightings">Sightings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
