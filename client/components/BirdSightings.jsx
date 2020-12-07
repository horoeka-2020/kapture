import React from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import { getBirdSightings } from './helpers/birdSightingsHelper'

class BirdSightings extends React.Component {
    state = {
      sightings: [],
      user: null
    }

    componentDidMount () {
      return getBirdSightings(this.props.user)
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
          <div className='box-sightings'>
            <h2 className='cardTitle'>Bird Sightings</h2>
            {sightings.map((sighting, i) =>
              <Map key={i} sighting={sighting} handleClick={this.handleClick} />
            )}
          </div>
          <Footer />
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    sightings: state.sightings,
    user: state.user
  }
}

export default connect(mapStateToProps)(BirdSightings)
