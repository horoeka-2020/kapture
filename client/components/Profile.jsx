import { getDecodedToken } from 'authenticare/client/auth'
import React from 'react'
import { connect } from 'react-redux'
// import { getUserDetails } from '../api/user'
// import { dispatch } from '../store'
// import { getBirdByID } from '../api/birds.js'
import { dispatch } from '../store'
import { showError } from '../actions/error'
import { getUserSightings } from '../api/user.js'
import { getUserBadges } from '../api/badges'

class Profile extends React.Component {
  state = {
    id: '',
    bird: [{}],
    badges: [{}]
  }

  componentDidMount () {
    const id = getDecodedToken().id
    this.setState({
      id: id
    })
    getUserSightings(2)
      .then((user) => {
        return this.setState({
          bird: user
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
    getUserBadges(2)
      .then((badges) => {
        console.log(badges)
        return this.setState({
          badges: badges
        })
      })
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }

  render () {
    // console.log(this.state.id)
    // console.log(this.state.bird)
    console.log(this.state)
    return (
      <div className="profile-card">
        <h1>Hello {this.state.bird[0].birdUser}!</h1>
        <h1>{this.state.bird[0].birdUser}</h1>
        <h2>You have had {this.state.bird.length} bird sightings!</h2>
        <h2>You have earnt {this.state.badges.length} badges</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
