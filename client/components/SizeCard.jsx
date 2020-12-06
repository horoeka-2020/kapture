import React from 'react'
// import { getSizes } from '../api'
export default class SizeCard extends React.Component {
  state = {
    id: '',
    name: '',
    height: '',
    width: ''
  }

  // componentDidMount () {
  //   getSizes()
  //     .then((res) => {
  //       console.log(res)
  //       const { id, name, height, width } = res
  //       this.setState({
  //         id,
  //         name,
  //         height,
  //         width
  //       })
  //     })
  // }

  render () {
    console.log(this.state)
    return (
      <>
        <div className='sizeCard'>
          <h2 className='cardQuiz'>What is the size of the bird?</h2>
          <p className='cardText'>Please select the size to find out what your bird might be?</p>
          <div className="colorSize">
            <label className="control control--radio">Tiny
              <input type="radio" name="radioSize" value='{this.state.size.tiny}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Small
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
