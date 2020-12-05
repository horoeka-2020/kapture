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
        <h1 className="logo">Kapture</h1>
        <Route
          path="/"
          component={LandingCard}
        />
        <p className='footer'>&#169; Kapture by Slick</p>
      </>
    )
  }
}

export default connect()(App)
