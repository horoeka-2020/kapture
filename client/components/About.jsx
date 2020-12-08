import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Home extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>About the Flock</h1>
        </div>
        <Footer />
      </>
    )
  }
}
