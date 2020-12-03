import React from 'react'

export default class RegisterCard extends React.Component {
    // State to store user credentials
    state = {
        username: '',
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
     
        }
    

    render () {
      return (
      <>
        <h1>Register page</h1>
        <input
          className="input"
          name="username"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleChange}
        ></input>
        <input
          className="input"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleChange}
        ></input>
      </>
      )
    }
  }