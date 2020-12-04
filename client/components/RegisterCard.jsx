import React from 'react'
import { createUser } from '../api'

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
        const { email, password } = this.state
        createUser({ email, password })
        this.setState({
          email: '',
          password: ''
          })
        }
    

    render () {
      return (
      <>
        <h1>Register page</h1>

          <div className="inputBox">

            <input
              className="input"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="inputBox">

            <input
              className="input"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <input className="btn-submit" onClick={this.handleClick} type="submit" name="" value="Submit" />
      </>
      )
    }
  }