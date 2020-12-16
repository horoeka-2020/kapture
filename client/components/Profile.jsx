// import { getDecodedToken } from 'authenticare/client/auth'
import React from 'react'
import { connect } from 'react-redux'
import { dispatch } from '../store'
import { showError } from '../actions/error'
import { getUserSightings } from '../api/user.js'
import { getUserBadges } from '../api/badges'

import Header from './Header'
import Footer from './Footer'

class Profile extends React.Component {
  state = {
    username: '',
    id: '',
    sightings: [],
    badges: []
  }

  componentDidMount () {
    const id = 1
    const username = 'kakaruia@kapture.com'
    // const id = getDecodedToken().id
    // const username = getDecodedToken().username
    this.setState({
      username,
      id
    })
    getUserSightings(id)
      .then((sightings) => {
        return this.setState({
          sightings: sightings
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
    getUserBadges(id)
      .then((badges) => {
        return this.setState({
          badges: badges
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }

  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='profile-wrapper'>
          <Header />
          <h1 className='cardTitleProfile'>Welcome {this.state.username}!</h1>
          <div className="flex-wrapper">

            {/* Bird Sightings Card */}
            <div className='user-card col'>
              <h1 className='userCardTitle'>Birds you have found!</h1>
              <p className='userText'>You have had <span className="proud">{this.state.sightings.length}</span> bird sightings!</p>
              {this.state.sightings.map((bird) => (
                <div key={bird.birdId}>
                  <span className="mapText">{bird.birdName}</span>
                  <span className="mapText">{bird.birdIgnoa}</span>
                  <span className="mapText">Kaptured on the {bird.birdDate}</span>
                  <span className="mapText">Found in {bird.birdFoundIn}</span>
                </div>
              ))}
            </div>

            {/* Badges Card */}
            <div className='user-card col'>
              <h1 className='userCardTitle'>Badges you have collected!</h1>
              <p className='userText'>You have earnt <span className="proud">{this.state.badges.length}</span> badges</p>
              {this.state.badges.map((badge) => (
                <div className="badge-container" key={badge.id}>
                  <img className="badge" src={badge.image} alt=""/>
                  <p className="badge-description">Congratulations you have earned the {badge.name}!</p>
                </div>
              ))}
            </div>

          </div>
          <Footer />
        </div>
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
