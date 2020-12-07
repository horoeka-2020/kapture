import React from 'react'
import { Link } from 'react-router-dom'

import ImageSlider from './ImageSlider'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <nav role="navigation">
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><Link to="/quiz">quiz</Link></li>
            <li><a href="#">gallery</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </nav>
        <ImageSlider />
      </>
    )
  }
}
