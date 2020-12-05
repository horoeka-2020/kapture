import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { isAuthenticated, logIn, getDecodedToken } from 'authenticare/client'
import { connect } from 'react-redux'
import { setUser } from '../actions/user'

class LoginCard extends React.Component {
    state = {
      email: '',
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
      const { email, password } = this.state
      return logIn({ email, password }, { baseUrl: '/api/v1' })
        .then(() => {
          if (isAuthenticated()) {
            const { email } = getDecodedToken()
            this.props.dispatch(setUser({ email }))
            return this.props.history.push('/home')
          }
          return null
        })
    }

    render () {
      return (
        <>
          <h1 className='cardText'>Login page</h1>
          <form action="">

            <div className="inputBox">

              <input
                className="input"
                name="email"
                value={this.state.email}
                placeholder="email address"
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
            <input className="btn-submit" type="submit" name="" value="Submit" />
          </form>
        </>
      )
    }
}

export default connect()(LoginCard)
