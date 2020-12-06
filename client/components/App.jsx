import React from 'react'
import { HashRouter as Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import ErrorMessage from './ErrorMessage'
import LandingCard from './SizeCard'
import RegisterCard from './RegisterCard'
import LoginCard from './LoginCard'
import Home from './Home'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <img className="logo" src="../../images/apture.png" alt='logo' width='25%'></img>
        <ErrorMessage />
        <LandingCard exact path="/" component={LandingCard}/>
        <Route exact path="/register" component={RegisterCard}/>
        <Route exact path="/login" component={LoginCard}/>
        <Route exact path="/home" component={Home}/>
        <p className='footer'>&#169; Kapture by Slick</p>
      </div>
    )
  }
}

export default connect()(App)
