import React from 'react'
import { getSizes } from '../api'
export default class SizeCard extends React.Component {
  state = {
    sizes: [{}],
    names: []
  }

  componentDidMount () {
    getSizes()
      .then((sizes) => {
        const names = []
        names.push(sizes.map((size) => size.name))
        console.log(names)
        this.setState({
          sizes,
          names
        })
      })
  }

  render () {
    return (
      <>
        <ul>
          {this.state.sizes.map((sizes) => console.log(sizes.name))}
        </ul>
        <div className='sizeCard'>
          <h2 className='cardQuiz'>What is the size of the bird?</h2>
          <p className='cardText'>Please select the size to find out what your bird might be?</p>
          <div className="colorSize">
            <label className="control control--radio">{this.state.sizes[0].name}
              <input type="radio" name="radioSize" value='{this.state.sizes[0].name}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">small
              <input type="radio" name="radioSize" value='{this.state.size.samll}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Medium
              <input type="radio" name="radioSize" value='{this.state.size.medium}'/>
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Large
              <input type="radio" name="radioSize" value='{this.state.size.large}' />
              <div className="control__indicator"></div>
            </label>
          </div>
        </div>
      </>
    )
  }
}
