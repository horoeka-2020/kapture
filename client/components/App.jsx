import React from 'react'
import { HashRouter as Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import ErrorMessage from './ErrorMessage'
import LandingCard from './LandingCard'
import RegisterCard from './RegisterCard'
import LoginCard from './LoginCard'
import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <ErrorMessage />
        <h1 className="logo"><Link to="/">Kapture</Link></h1>
        <LandingCard exact path="/welcome" component={LandingCard}/>
        <Route exact path="/register" component={RegisterCard}/>
        <Route exact path="/login" component={LoginCard}/>
        <Route exact path="/home" component={Home}/>
        <p className='footer'>&#169; Kapture by Slick</p>
      </div>
    )
  }
}

export default connect()(App)
