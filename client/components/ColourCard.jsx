import React from 'react'
import { getAllColours } from './helpers/colourCardHelper'
import { dispatch } from '../store'
import { showError } from '../actions/error'
import { connect } from 'react-redux'
import { addColour } from '../actions/results'
class ColourCard extends React.Component {
  state = {
    colours: [{}, {}, {}, {}, {}],
    colour: ''
  }

  componentDidMount () {
    getAllColours()
      .then((colours) => {
        this.setState({
          colours
        })
        return null
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }

  handleClick = (e) => {
    // e.preventDefault()
    dispatch(addColour(e.target.value))
    this.setState({
      colour: e.target.value
    })
  }

  render () {
    return (
      <>
        <div className='colordCard'>
          <h4 className='cardTitleMid'>Please answer the following questions to try to discover your feathered friend:</h4>
          <h2 className='cardTitleQuiz'>What was the main colour of your bird?</h2>
          <p className='cardText'>Please select a main colour to discover what your bird might be?</p>
          <div className="colorPick">
            <label className="control controlColour--radio">{this.state.colours[0].name}
              <input type="radio" name="radioColour" onClick={this.handleClick} value={this.state.colours[0].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[1].name}
              <input type="radio" name="radioColour" onClick={this.handleClick} value={this.state.colours[1].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[2].name}
              <input type="radio" name="radioColour" onClick={this.handleClick} value={this.state.colours[2].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[3].name}
              <input type="radio" name="radioColour" onClick={this.handleClick} value={this.state.colours[3].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.colours[4].name}
              <input type="radio" name="radioColour" onClick={this.handleClick} value={this.state.colours[4].name} />
              <div className="control__indicator"></div>
            </label>
          </div>
        </div>
      </>
    )
  }
}

export default connect()(ColourCard)
