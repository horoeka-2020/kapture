import React from 'react'
import { getSizes } from '../api'
import { dispatch } from '../store'
import { showError } from '../actions/error'
export default class SizeCard extends React.Component {
  state = {
    sizes: [{}, {}, {}, {}]
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

  render () {
    return (
      <>
        <div className='sizeCard'>
          <h2 className='cardQuiz'>What is the size of the bird?</h2>
          <p className='cardText'>Please select the size to find out what your bird might be?</p>
          <div className="colorSize">
            <label className="control control--radio">{this.state.sizes[0].name}
              <input type="radio" name="radioSize" value={this.state.sizes[0].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.sizes[1].name}
              <input type="radio" name="radioSize" value={this.state.sizes[1].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.sizes[2].name}
              <input type="radio" name="radioSize" value={this.state.sizes[2].name} />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">{this.state.sizes[3].name}
              <input type="radio" name="radioSize" value={this.state.sizes[3].name} />
              <div className="control__indicator"></div>
            </label>
          </div>
        </div>
      </>
    )
  }
}
