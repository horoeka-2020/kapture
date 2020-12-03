import React from 'react'

// Import components
import LandingCard from './LandingCard'

export default class Landing extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <LandingCard />
        <p className='footer'>&#169; Kapture by the Sleeks</p>
      </div>
    )
  }
}
