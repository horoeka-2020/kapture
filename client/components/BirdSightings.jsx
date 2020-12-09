import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import UserSightingCard from './UserSightingCard'
import { getAllBirdSightings } from './helpers/birdSightingsHelper'

class BirdSightings extends React.Component {
    state = {
      sightings: [],
      user: {
        id: 2
      }
    }

    componentDidMount () {
      return getAllBirdSightings(this.state.user.id)
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
        sightings
      } = this.state
      return (
        <>
          <Header />
          <div className='wraper'></div>
          <div className='box'>
            <h3 className='cardTitle'>Bird Sightings</h3>
            <Map sightings={sightings} handleClick={this.handleClick} />
            <UserSightingCard />
          </div>
          <Footer />
        </>
      )
    }
}

export default connect()(BirdSightings)
