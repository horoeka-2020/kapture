import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

export default class LandingCard extends React.Component {
  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <h1 className='cardTitle'>What colours are the bird?</h1>
          <p className='cardText'>Please select the one maian colour(s) to find out what your bird might be?</p>
          <div className="colorPick">
            <label className="control control--radio">Black
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">White
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Brown
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Blue
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Red
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Green
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Yellow
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Rainbow
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Others
              <input type="radio" name="radio" checked />
              <div className="control__indicator"></div>
            </label>
          </div>
        </div>
      </>
    )
  }
}

<nav role="navigation">
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">quiz</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">contact us</a></li>
  </ul>
</nav>
{ /* <ImageSlider /> */ }
