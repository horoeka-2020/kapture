import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Import components
import LandingCard from './LandingCard'
import Home from './Home'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'

class App extends React.Component {
  render () {
    return (
      <main>
        <img className="logo" src="../../images/apture.png" alt='logo' width='25%'></img>
        {/* <Redirect from="/" to="/welcome"/> */}
        <Route path="/welcome" component={LandingCard}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/quiz" component={QuizCard}/>
        <Route exact path="/quiz/result" component={QuizResult}/>
        <p className='footer'>&#169; Kapture by Slick</p>
      </main>
    )
  }
}

export default connect()(App)
