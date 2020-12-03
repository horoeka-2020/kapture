import React from 'react'

export default class LoginCard extends React.Component {
    state = {
      username: '',
      password: ''
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
        <h1>Login page</h1>
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
        <span className='enterbtn'><a href="#" className='anchor'>
          <h3 className='enter'>Enter</h3>
        </a>
        </span>
      </>
      )
    }
}
