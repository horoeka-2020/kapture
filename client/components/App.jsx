import React from 'react'
import Landing from './Landing'
// import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import ErrorMessage from './ErrorMessage'

class App extends React.Component {
  render () {
    return (
      <>
        <ErrorMessage />
        <h1 className="logo">Kapture</h1>
        <Landing />
      </>
    )
  }
}

export default connect()(App)
