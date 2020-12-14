// import { getDecodedToken } from 'authenticare/client/auth'
import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import { getAllBirdSightings } from './helpers/birdSightingsHelper'
import { setUserLocation } from '../actions/user'

class BirdSightings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      sightings: [],
      userCoordinates: []
    }
  }

  componentDidMount () {
    const setLocation = (location) => {
      this.props.dispatch(setUserLocation(location))
      this.setState({ userCoordinates: [{ latitude: location.latitude, longitude: location.longitude }] })
    }
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      })
    }
    const id = 2
    // const id = getDecodedToken().id
    return getAllBirdSightings(id)
      .then(sightings => {
        this.setState({ sightings: sightings })
        return sightings
      })
  }

    // Handles click to confirm siting and navigate to badges
    handleClick = (e) => {
      e.preventDefault()
    }

    render () {
      const {
        sightings,
        userCoordinates
      } = this.state
      return (
        <>
          <Header />
          <div className='map-container'>
            <Map sightings={sightings} userCoordinates={userCoordinates} handleClick={this.handleClick} />
          </div>
          <Footer />
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(BirdSightings)
