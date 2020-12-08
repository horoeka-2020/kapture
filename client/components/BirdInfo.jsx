import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class BirdInfo extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>About the BIRD NAME</h1>
        </div>
        <Footer />
      </>
    )
  }
}
