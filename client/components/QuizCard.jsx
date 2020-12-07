import React from 'react'
import ColourCard from './ColourCard'
import SizeCard from './SizeCard'
import { connect } from 'react-redux'

class QuizCard extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    Object.keys(this.props.results).length === 2
      ? this.props.history.push('/quiz/result')
      : console.log('Error')
  }

  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <div> <ColourCard /> </div>
          <div> <SizeCard /> </div>
          <input
            className="btn-submit"
            name="btn-submit"
            onClick={this.handleClick}
            type="submit"
            value="Submit"
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps)(QuizCard)
