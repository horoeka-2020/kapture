import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../actions/user'
import { isAuthenticated, getDecodedToken } from '../auth'

// Import components
import LandingCard from './LandingCard'
import Home from './Home'
// import WaitingIcon from './WaitingIcon'
import WaitingIndicator from './WaitingIndicator'
import ErrorMessage from './Error'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'

class App extends React.Component {
  componentDidMount () {
    if (isAuthenticated()) {
      const { username, isAdmin } = getDecodedToken()
      this.props.dispatch(setUser({ username, isAdmin }))
    }
  }

  render () {
    return (
      <>
        <div className='app'>
          <ErrorMessage />
          <WaitingIndicator />
          <img className="logo" src="/images/build/apture.png" alt='logo' width='25%'></img>
          <Route exact path="/">
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome" component={LandingCard}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/quiz" component={QuizCard}/>
          <Route exact path="/quiz/result" component={QuizResult}/>
        </div>
      </>
    )
  }
}

export default connect()(App)
