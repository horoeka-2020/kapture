import React from 'react'

import ImageSlider from './ImageSlider'
import Header from './Header'
import Footer from './Footer'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <Header />
        <ImageSlider />
        <Footer />
      </>
    )
  }
}
