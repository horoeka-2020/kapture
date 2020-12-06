import { Link } from 'react-router-dom'
import React from 'react'
import ColourCard from './ColourCard'
import SizeCard from './SizeCard'
// import { navigateToResult } from './quizCardHelper'
export default class QuizCard extends React.Component {
  // Create a function called handleClick to link us to the QuizResult component
  // handleClick = (e) => {
  //   // e.preventDefault()
  //   navigateToResult()
  // }

  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <div> <ColourCard /> </div>
          <div> <SizeCard /> </div>
          <Link to="/quiz/result"><input className="btn-submit" name="btn-submit" onClick={this.handleClick} type="submit" value="Submit" /></Link>
        </div>
      </>
    )
  }
}
