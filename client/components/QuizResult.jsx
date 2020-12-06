import React from 'react'
import { getSpecificBird } from './quizResultHelper'

class LandingCard extends React.Component {
    state = {
      birdName: '',
      birdIgnoa: '',
      birdDesc: '',
      birdImage: '',
      birdFoundIn: '',
      birdSound: '',
      birdCons: '',
      birdThreat: '',
      birdColourName: '',
      birdColourHex: '',
      birdSize: '',
      birdHeight: '',
      birdWidth: '',
      birdSizeId: ''
    }

    componentDidMount () {
    // if (isAuthenticated()) {
    //   const { username, isAdmin, gardenId } = getDecodedToken()
    //   this.props.dispatch(setUser({ username, isAdmin, gardenId }))
      return getSpecificBird(1)
        .then(bird => {
          this.setState(bird)
          return null
        })
    }
    // }

    render () {
      const {
        birdName,
        birdIgnoa,
        birdDesc,
        birdImage,
        birdFoundIn,
        birdSound,
        birdCons,
        birdThreat,
        birdColourName,
        birdColourHex,
        birdSize,
        birdHeight,
        birdWidth,
        birdSizeId
      } = this.state
      return (
        <>
          {/* <nav role="navigation">
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">quiz</a></li>
            <li><a href="#">gallery</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </nav> */}
          <div className='wraper'></div>
          <div className='box'>
            <h1 className='cardTitle'>Congratulations! You probably saw a:</h1>
            <p className='cardText'>Name: {birdName}</p>
            <p className='cardText'>{birdIgnoa}</p>
            <p className='cardText'>{birdDesc}</p>
            <p className='cardText'>{birdImage}</p>
            <p className='cardText'>{birdFoundIn}</p>
            <p className='cardText'>{birdSound}</p>
            <p className='cardText'>{birdCons}</p>
            <p className='cardText'>{birdThreat}</p>
            <p className='cardText'>{birdColourName}</p>
            <p className='cardText'>{birdColourHex}</p>
            <p className='cardText'>{birdSize}</p>
            <p className='cardText'>{birdHeight}</p>
            <p className='cardText'>{birdWidth}</p>
            <p className='cardText'>{birdSizeId}</p>
            <div className="colorPick">
            </div>
          </div>
        </>
      )
    }
}

export default LandingCard
