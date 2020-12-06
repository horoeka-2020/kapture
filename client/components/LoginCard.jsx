import React from 'react'
import { signInUser } from './loginCardHelper'

class LoginCard extends React.Component {
    state = {
      username: '',
      password: ''
    }

      handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }

      handleClick = (e) => {
        e.preventDefault()
        signInUser(this.state, this.props.history.push)
      }

      render () {
        return (
          <>
            <div className="inputBox">
              <input
                className="input"
                id="username"
                type="text"
                name="username"
                value={this.state.username}
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

export default LoginCard
