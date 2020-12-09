import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class About extends React.Component {
  render () {
    return (
      <>

        <Header />
        <div className='wraper-about'></div>
        <div className='box-about'>
          <h1 className='cardTitle'>About the Flock</h1>
          <div className='about-contrainer'>
            <h1><span>About the Flock</span></h1>
            <p className='about-flock'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
          </div>
          <div className='about-contrainer'>
            <h1><span>Some of New Zealand&apos;s native birds</span></h1>
            <p className='about-bird'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
          </div>
        </div>
        <Footer />

      </>
    )
  }
}
