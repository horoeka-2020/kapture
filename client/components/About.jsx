import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default class About extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper'></div>
        <div className='about-container'>
          <h1><span>About the Flock</span></h1>
          <p className='about-flock'><span>
            <img className="" src='/images/build/team.jpg' alt='Team' /></span></p>
        </div>
        <div className='about-container'>
          <h1><span>Shelly (Michelle) Mutu-Grigg | Tui</span></h1>
          <p className='about-shelly'><span><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
        </div>
        <div className='about-container'>
          <h1><span>David Steel | Tui</span></h1>
          <p className='about-dave'><span><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
        </div>
        <div className='about-container'>
          <h1><span>Rodrigo Diaz | Kea</span></h1>
          <p className='about-rod'><span><strong>Kea</strong> The endangered kea is the world&aposs only alpine parrot, and one of the most intelligent birds. The kea was crowned Bird of the Year in 2017.</span></p>
        </div>
        <div className='about-container'>
          <h1><span>Kittisan P. | Chatham Islands black robin</span></h1>
          <p className='about-kitti'><span><strong>Chatham Islands black robin</strong> All of today&aposs black robins are descended from the last breeding female, Old Blue. She was one of the longest-lived robins known, reaching 14 years old.</span></p>
        </div>
        <Footer />
      </>
    )
  }
}
