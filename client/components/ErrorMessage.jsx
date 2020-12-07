import React from 'react'
import { connect } from 'react-redux'

import { hide } from './helpers/errorHelper'

function errorMessage ({ error }) {
  return (
    error
      ? <div className="message-error">
        {error}
        <a className="button-cancel" onClick={hide}>&#10005;</a>
      </div>
      : null
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(errorMessage)
