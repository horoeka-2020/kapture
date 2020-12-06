import React from 'react'
import { connect } from 'react-redux'

const WaitingIcon = (props) => {
  return props.waiting
    ? <div className="bird"></div>
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.pending
  }
}

export default connect(mapStateToProps)(WaitingIcon)
