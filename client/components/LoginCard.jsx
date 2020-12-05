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
