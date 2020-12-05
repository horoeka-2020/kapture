import React from 'react'
import { registerUser } from './registerHelper'

export default class RegisterCard extends React.Component {
  // State to store user credentials
  state = {
    email: '',
    password: ''
    // Do we need to link a userId??
    // userId: null
  }

  // Handles our inputs to change state
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Handles our click to fire off our
      handleClick = () => {
        registerUser(this.state, this.props.history.push)
      }

      render () {
        return (
          <>
            <h1>Register page</h1>

            <div className="inputBox">

              <input
                className="input"
                id="email"
                name="email"
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
