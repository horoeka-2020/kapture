import React from 'react'
import { connect } from 'react-redux'
import { getSpecificBird } from './helpers/quizResultHelper'

class QuizResult extends React.Component {
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
      return getSpecificBird(3)
        .then(bird => {
          this.setState(bird)
          return null
        })
    }

    // Handles click to confirm siting and navigate to badges
    handleClick = (e) => {
      e.preventDefault()
    }

    render () {
      const {
        birdName,
        birdIgnoa,
        birdDesc,
        birdImage,
        birdFoundIn,
        // birdSound,
        birdCons,
        birdThreat,
        birdColourName,
        // birdColourHex,
        // birdHeight,
        // birdWidth,
        // birdSizeId,
        birdSize

      } = this.state
      return (
        <>
          <div className='wraper'></div>
          <div className='box'>
            <h1 className='cardTitle'>Congratulations! You probably saw a:</h1>
            <div className='flex-container'>
              <div className='birdText'>
                <img className='birdImg' src={birdImage} ></img>
                <br></br>
                <input
                  className="btn-submit-bird"
                  type="submit"
                  name=""
                  value="Confirm"
                  onClick={this.handleClick}/>
              </div>
              <div>
                <h3 name='māoriname' className='birdText'>Māori Name: {birdIgnoa}</h3>
                <h3 className='birdText'>Name: {birdName}</h3>
                <h3 className='birdText'>Description: {birdDesc}</h3>
                <h3 className='birdText'>Found In: {birdFoundIn}</h3>
                <h3 className='birdText'>Conservation Status: {birdCons}</h3>
                <h3 className='birdText'>Threats: {birdThreat}</h3>
                <h3 className='birdText'>Main Colour: {birdColourName}</h3>
                <h3 className='birdText'>Size: {birdSize}</h3>
              </div>
            </div>
          </div>
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps)(QuizResult)
