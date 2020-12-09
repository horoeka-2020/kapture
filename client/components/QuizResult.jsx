import React from 'react'
import { connect } from 'react-redux'

import Bird from './Bird'
import Header from './Header'
import Footer from './Footer'
import { getBirds } from './helpers/quizResultHelper'

class QuizResult extends React.Component {
    state = {
      birds: []
    }

    componentDidMount () {
      return getBirds(this.props.results.colour, this.props.results.size)
        .then(birds => {
          this.setState({ birds: birds })
          return birds
        })
    }

    // Handles click to confirm siting and navigate to badges
    handleClick = (e) => {
      e.preventDefault()
    }

    render () {
      const {
        birds
      } = this.state
      return (
        <>
          <Header />
          {/* <div className='box-quiz-results'>
            <h2 className='cardTitle'>Congratulations! You probably saw:</h2>
            {birds.map((bird, i) =>
              <Bird key={i} bird={bird} handleClick={this.handleClick} />
            )}
            <a className="password-forgot" href="/quiz">Return to quiz</a> */}
          <div className='box-quiz-wraper'>
            <div className='box-quiz-results'>
              <h2 className='cardTitle'>Congratulations! You probably saw:</h2>
              {birds.map((bird, i) =>
                <Bird key={i} bird={bird} handleClick={this.handleClick} />
              )}
            </div>
          </div>
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

export default connect(mapStateToProps)(QuizResult)
