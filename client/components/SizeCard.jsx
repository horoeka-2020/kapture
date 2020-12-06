import React from 'react'
// import { Link, Route } from 'react-router-dom'
import { getSizes } from '../api'
export default class SizeCard extends React.Component {
  state = {
    id: '',
    name: '',
    height: '',
    width: ''
  }

  componentDidMount () {
    getSizes()
      .then((res) => {
        console.log(res)
        const { id, name, height, width } = res
        this.setState({
          id,
          name,
          height,
          width
        })
      })
  }

  render () {
    console.log(this.state)
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>What is the size?</h1>
          <p className='cardText'>Compared to other birds, what size was the bird you saw?</p>
          <div className="sizePick">
            <label className="control control--radio">Tiny
              <input type="radio" name="radio" value='{props.size.tiny}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Small
              <input type="radio" name="radio" value='{props.size.small}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Medium
              <input type="radio" name="radio" value='{props.size.medium}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Large
              <input type="radio" name="radio" value='{props.size.large}' />
              <div className="control__indicator"></div>
            </label>
            {/* <label className="control control--radio">Moa
              <input type="radio" name="radio" value='{props.size.moa}' />
              <div className="control__indicator"></div>
            </label> */}
          </div>
        </div>
      </>
    )
  }
}
