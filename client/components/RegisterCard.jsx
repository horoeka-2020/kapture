import React from 'react'

import { registerUser } from './helpers/registerHelper'

class RegisterCard extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    registerUser(this.state, this.props.history.push)
  }

  render () {
    return (
      <>
        <div className="inputBox">

          <input
            className="input"
            id="username"
            name="username"
            type="text"
            value={this.state.email}
            placeholder="email address"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="inputBox">

          <input
            className="input"
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          ></input>
        </div>
        <input className="btn-submit" name="btn-submit" onClick={this.handleClick} type="submit" value="Submit" />
      </>
    )
  }
}

export default RegisterCard
