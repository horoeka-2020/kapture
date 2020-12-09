import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class About extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper-nonLanding'></div>
        <div className='box-nonLanding'>
          <h1 className='cardTitle'>About the Flock</h1>
        </div>
        <Footer />
      </>
    )
  }
}
