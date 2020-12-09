import React from 'react'
import { addUserSighting } from './helpers/userSightingCardHelper'

class UserSightingCard extends React.Component {
    state = {
      username: 2,
      latitude: '',
      longitude: '',
      birdName: ''
    }

      handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }

      handleClick = (e) => {
        e.preventDefault()
        addUserSighting(this.state)
      }

      render () {
        return (
          <>

            <div className="inputBox">
              <input
                className="input"
                id="latitude"
                type="text"
                name="latitude"
                value={this.state.latitude}
                placeholder="latitude"
                onChange={this.handleChange}
              ></input>

              <input
                className="input"
                id="longitude"
                name="longitude"
                type="text"
                value={this.state.longitude}
                placeholder="longitude"
                onChange={this.handleChange}
              ></input>

              <input
                className="input"
                id="birdName"
                name="birdName"
                type="text"
                value={this.state.birdName}
                placeholder='bird name'
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

export default UserSightingCard
