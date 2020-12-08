import React from 'react'

import { registerUser } from './helpers/registerHelper'

class RegisterCard extends React.Component {
  state = {
    username: '',
    password: '',
    confirm: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.state.password === this.state.confirm
      ? registerUser(this.state, this.props.history.push)
      : console.log('Password does not match')
  }

  render () {
    return (
      <>
        <div className="inputBox">
          <form>
            <input
              className="input"
              id="username"
              type="text"
              autoComplete="username"
              name="username"
              value={this.state.username}
              placeholder="email address"
              onChange={this.handleChange}
            ></input>

            <input
              className="input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            ></input>
            <input
              className="input"
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="current-password"
              value={this.state.confirm}
              placeholder="confirm password"
              onChange={this.handleChange}
            ></input>
          </form>
          <a className="password-forgot" href="#">Click here to go back</a>
        </div>
        <input
          className="btn-submit"
          type="submit"
          data-testid="submit-button"
          name="login-submit"
          value="Submit"
          onClick={this.handleClick}/>
      </>
    )
  }
}

export default RegisterCard
