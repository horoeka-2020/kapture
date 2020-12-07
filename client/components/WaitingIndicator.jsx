import React from 'react'
import { connect } from 'react-redux'
import WaitingIcon from './WaitingIcon'

const WaitingIndicator = ({ waiting }) => {
  return waiting
    ? <WaitingIcon />
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitingIndicator)
