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

<nav role="navigation">
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">quiz</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">contact us</a></li>
  </ul>
</nav>
{ /* <ImageSlider /> */ }
