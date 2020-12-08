import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Contact extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>Contact the Flock</h1>
        </div>
        <Footer />
      </>
    )
  }
}
