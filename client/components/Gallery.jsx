import React from 'react'
import { getDecodedToken } from 'authenticare/client/auth'
import { dispatch } from '../store'
import { showError } from '../actions/error'
import { getUserSightings } from '../api/user.js'

import ImageSlider from './ImageSlider'
import Header from './Header'
import Footer from './Footer'

class Gallery extends React.Component {
  state = {
    username: '',
    id: '',
    birds: []
  }

  componentDidMount () {
    const id = getDecodedToken().id
    const username = getDecodedToken().username
    this.setState({
      username,
      id
    })
    getUserSightings(2)
      .then((sightings) => {
        return this.setState({
          birds: sightings
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }

  render () {
    return (
      <>
        <Header />
        <div className='wraper-nonLanding'></div>
        <div className='box-nonLanding'>
          <ImageSlider birds={this.state.birds}/>

        </div>
        <Footer />
      </>
    )
  }
}

export default Gallery
