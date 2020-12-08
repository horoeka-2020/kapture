import { getDecodedToken } from 'authenticare/client/auth'
import React from 'react'
import { connect } from 'react-redux'
import { dispatch } from '../store'
import { showError } from '../actions/error'
import { getUserSightings } from '../api/user.js'
import { getUserBadges } from '../api/badges'
import { setUserLocation } from '../actions/user'

import Header from './Header'
import Footer from './Footer'

class Profile extends React.Component {
  state = {
    username: '',
    id: '',
    sightings: [],
    badges: [],
    userCoordinates: []
  }

  componentDidMount () {
    const id = getDecodedToken().id
    const username = getDecodedToken().username
    this.setState({
      username,
      id
    })
    getUserSightings(5)
      .then((sightings) => {
        return this.setState({
          sightings: sightings
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
    getUserBadges(5)
      .then((badges) => {
        return this.setState({
          badges: badges
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })

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
    console.log('Profile.jsx > user cords: ', this.state.userCoordinates)
    this.state.sightings.map((sighting) => console.log(sighting.birdName))
    return (
      <>
        <Header />
        <div className="flex-wrapper">

          {/* Bird Sightings Card */}
          <div className='user-card col'>
            <h1 className='userTitle'>Birds you have found!</h1>
            <p className='userText'>You have had {this.state.sightings.length} bird sightings!</p>
            {this.state.sightings.map((bird) => (
              <div key={bird.birdId}>
                <span className="userText">{bird.birdName}</span>
                <span className="userText">{bird.birdIgnoa}</span>
                <span className="mapText">Kaptured on the {bird.birdDate}</span>
                <span className="mapText">Conservation status: {bird.birdCons}</span>
                <span className="mapText">Found in {bird.birdFoundIn}</span>
              </div>
            ))}
          </div>

          {/* Username Card */}
          <div className='user-card col'>
            <h1 className='userTitle'>Welcome {this.state.username}!</h1>
          </div>

          {/* Badges Card */}
          <div className='user-card col'>
            <h1 className='userTitle'>Badges you have collected!</h1>
            <p className='userText'>You have earnt {this.state.badges.length} badges</p>
            {this.state.badges.map((badge) => (
              <span className="userText" key={badge.name}>{badge.name}</span>
            ))}
          </div>

        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userCoordinates: state.userCoordinates
  }
}

export default connect(mapStateToProps)(Profile)
