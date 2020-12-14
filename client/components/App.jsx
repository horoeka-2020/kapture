import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../actions/user'
import { isAuthenticated, getDecodedToken } from '../auth'

// Import components
// import LandingCard from './LandingCard'
// import WaitingIcon from './WaitingIcon'
import WaitingIndicator from './WaitingIndicator'
import About from './About'
import Contact from './Contact'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'
import BirdSightings from './BirdSightings'
import Profile from './Profile'
import Gallery from './Gallery'
import BadgeForm from './BadgeForm'
import UserSightingCard from './UserSightingCard'

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
          <main>
            <WaitingIndicator />
            <Route exact path="/">
              <Redirect to="/welcome"/>
            </Route>
            <Route path="/welcome" component={Profile}/> {/* {LandingCard} */}
            <Route exact path='/profile/:username' component={Profile} />
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/quiz" component={QuizCard}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/quiz/result" component={QuizResult}/>
            <Route exact path="/sightings" component={BirdSightings}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/badgeform" component={BadgeForm}/>
            <Route exact path="/usersightingform" component={UserSightingCard}/>
          </main>
        </div>
      </>
    )
  }
}

export default connect()(App)
