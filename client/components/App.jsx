import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import LandingCard from './LandingCard'
import Home from './Home'
// import WaitingIcon from './WaitingIcon'
// import WaitingIndicator from './WaitingIndicator'
import ErrorMessage from './Error'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <ErrorMessage />
        <img className="logo" src="/images/build/apture.png" alt='logo' width='25%'></img>
        <Route exact path="/">
          <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome" component={LandingCard}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/quiz" component={QuizCard}/>
        <Route exact path="/quiz/result" component={QuizResult}/>
        <p className='footer'>&#169; Kapture by Slick</p>
      </div>
    )
  }
}

export default connect()(App)
