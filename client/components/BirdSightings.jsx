import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import { getAllBirdSightings } from './helpers/birdSightingsHelper'

class BirdSightings extends React.Component {
    state = {
      sightings: []
    }

    componentDidMount () {
      return getAllBirdSightings(2)
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
          <div className='wraper-sightings'></div>
          <div className='box-sightings'>
            <h2 className='cardTitle'>Bird Sightings</h2>
            <div className='about-contrainer'>
              <Map sightings={sightings} handleClick={this.handleClick} />
            </div>
          </div>
          <Footer />
        </>
      )
    }
}

export default connect()(BirdSightings)
