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
            <p className='about-shelly'><span><strong>Kākā</strong>  - Hardworking and strong character that is happy with noise</span></p>
            <br></br>
          </div>
          <div className='about-container'>
            <h1><span>David Steel | Rifleman</span></h1>
            <p className='about-dave'><span><strong>Raiwhara</strong> - Dedicated, hardworking and strong character</span></p>
          </div>
          <div className='about-container'>
            <h1><span>Rodrigo Diaz | Kea</span></h1>
            <p className='about-rod'><span><strong>Kea</strong> - Endangered, intelligent and cheeky character.</span></p>
          </div>
          <div className='about-container'>
            <h1><span>Kittisan P. | Chatham Islands black robin</span></h1>
            <p className='about-kitti'><span><strong>Kakaruia</strong> - Small, strong, fun and full of personality.</span></p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
