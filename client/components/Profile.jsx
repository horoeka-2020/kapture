import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component {
  render () {
    return (
      <>
        <h1>Profile hello {this.props.state.user}!</h1>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
