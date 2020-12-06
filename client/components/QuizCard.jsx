import React from 'react'
import ColourCard from './ColourCard'
import SizeCard from './SizeCard'
export default class LandingCard extends React.Component {
  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <div> <ColourCard /> </div>
          <div> <SizeCard /> </div>
        </div>
      </>
    )
  }
}
