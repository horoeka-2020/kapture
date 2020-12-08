import React from 'react'
import ColourCard from './ColourCard'
import SizeCard from './SizeCard'

function Questions (props) {
  return (
    <>
      <div className='box-quiz'>
        <div> <ColourCard /> </div>
        <div> <SizeCard /> </div>
        <input
          className="btn-submit"
          name="btn-submit"
          onClick={props.handleClick}
          type="submit"
          value="Submit"
        />
      </div>
    </>
  )
}

export default Questions
