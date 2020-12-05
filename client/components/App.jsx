import React from 'react'
import { HashRouter as Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import ErrorMessage from './ErrorMessage'
import LandingCard from './LandingCard'

class App extends React.Component {
  render () {
    return (
      <>
        <ErrorMessage />
        <Route
          exact path="/"
          component={LandingCard}
        />
        <LandingCard/>
        <p className='footer'>&#169; Kapture by Slick</p>
      </>
    )
  }
}

export default connect()(App)
