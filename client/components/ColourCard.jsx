import React from 'react'

export default class ColourCard extends React.Component {
  render () {
    return (
      <>
        <div className='colordCard'>
          <h2 className='cardQuiz'>What colours does the bird have?</h2>
          <p className='cardText'>Please select the main colours to find out what your bird might be?</p>
          <div className="colorPick">
            <label className="control controlColour--radio">Black
              <input type="radio" name="radioColour" value='{this.state.colour.black}'ked />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">White
              <input type="radio" name="radioColour" value='{this.state.colour.white}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Red
              <input type="radio" name="radioColour" value='{this.state.colour.red}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Green
              <input type="radio" name="radioColour" value='{this.state.colour.green}' />
              <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Brown
              <input type="radio" name="radioColour" value='{this.state.colour.brown}' />
              <div className="control__indicator"></div>
            </label>
            {/* <label className="control control--radio">Green
            <input type="radio" name="radioColour" value='{this.state.colour.green}' />
            <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Yellow
            <input type="radio" name="radioColour" value='{this.state.colour.yellow}' />
            <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Rainbow
            <input type="radio" name="radioColour" value='{this.state.colour.rainbow}' />
            <div className="control__indicator"></div>
            </label>
            <label className="control control--radio">Others
            <input type="radio" name="radioColour" value='{this.state.colour.others}' />
            <div className="control__indicator"></div>
            </label> */}
          </div>
        </div>
      </>
    )
  }
}
