import React from 'react'
import { postUserBadges } from '../api/badges'

export default class Footer extends React.Component {
  state = {
    userId: '',
    badgeId: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = (e) => {
    postUserBadges(this.state.userId, this.state.badgeId)
  }

  render () {
    return (
      <>
        <div className="input-wrapper">

          <input
            className="input-map"
            id="latitude"
            type="text"
            name="userId"
            value={this.state.userId}
            placeholder="user id"
            onChange={this.handleChange}
          ></input>

          <input
            className="input-map"
            id="longitude"
            name="badgeId"
            type="text"
            value={this.state.badgeId}
            placeholder="badge id"
            onChange={this.handleChange}
          ></input>

          <input
            className="btn-submit"
            type="submit"
            data-testid="submit-button"
            name="login-submit"
            value="Submit"
            onClick={this.handleClick}/>
        </div>
      </>
    )
  }
}
