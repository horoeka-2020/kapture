import React from 'react'
import { getSizes } from '../api/sizes'
import { dispatch } from '../store'
import { showError } from '../actions/error'
import { addSize } from '../actions/results'
export default class SizeCard extends React.Component {
  state = {
    sizes: [{}, {}, {}, {}],
    size: ''
  }

  componentDidMount () {
    getSizes()
      .then((sizes) => {
        this.setState({
          sizes
        })
        return null
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }

  handleClick = (e) => {
    // e.preventDefault()
    dispatch(addSize(e.target.value))
    this.setState({
      size: e.target.value
    })
  }

  render () {
    return (
      <>
        <div className='sizeCard'>
          <h2 className='cardTitleQuiz'>What was the size of your bird?</h2>
          <p className='cardText'>Please select a size to find out what your bird might be?</p>
          <div className="colorSize">
            <label className="control control--radio">{this.state.sizes[0].name}
              <input type="radio" name="radioSize" onClick={this.handleClick} value={this.state.sizes[0].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.sizes[1].name}
              <input type="radio" name="radioSize" onClick={this.handleClick} value={this.state.sizes[1].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.sizes[2].name}
              <input type="radio" name="radioSize" onClick={this.handleClick} value={this.state.sizes[2].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.sizes[3].name}
              <input type="radio" name="radioSize" onClick={this.handleClick} value={this.state.sizes[3].name} />
              <div className="control__indicator"></div>
            </label>
          </div>
        </div>
      </>
    )
  }
}
