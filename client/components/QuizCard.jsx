import React from 'react'
import Header from './Header'
import Questions from './Questions'
import Footer from './Footer'
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
        <Header />
        <div> <Questions handleClick={this.handleClick}/> </div>
        <Footer />
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
