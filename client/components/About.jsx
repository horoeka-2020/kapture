import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default class About extends React.Component {
  render () {
    return (
      <>
        <Header />
        <div className='wraper-about'></div>
        <div className='box-about'>
          <div className='about-container'>
            <h1><span>About the Flock</span></h1>
            <p className='about-flock'><span>
              <img className="" src='/images/build/team.jpg' alt='Team' /></span></p>
          </div>
          <div className='about-container'>
            <h1><span>Shelly (Michelle) Mutu-Grigg | Kākā</span></h1>
            <p className='about-shelly'><span><strong>Kākā</strong> Make lots of noise....
              <br></br>

            </span></p>
          </div>
          <div className='about-container'>
            <h1><span>David Steel | Rifleman</span></h1>
            <p className='about-dave'><span><strong>Rifleman</strong> Strong and persistent</span></p>
          </div>
          <div className='about-container'>
            <h1><span>Rodrigo Diaz | Kea</span></h1>
            <p className='about-rod'><span><strong>Kea</strong> The endangered kea is the world&apos;s only alpine parrot, and one of the most intelligent birds. The kea was crowned Bird of the Year in 2017.</span></p>
          </div>
          <div className='about-container'>
            <h1><span>Kittisan P. | Chatham Islands black robin</span></h1>
            <p className='about-kitti'><span><strong>Chatham Islands black robin</strong> All of today&apos;s black robins are descended from the last breeding female, Old Blue. She was one of the longest-lived robins known, reaching 14 years old.</span></p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
