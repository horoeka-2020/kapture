import React from 'react'
import { signInUser } from './helpers/loginCardHelper'

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
              </form>
              <a className="password-forgot" href="#">Have you forgotten your password?</a>
            </div>
            <div className="input-wrapper">
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

export default LoginCard
