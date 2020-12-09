import React from 'react'
import { addUserSighting } from './helpers/userSightingCardHelper'

class UserSightingCard extends React.Component {
    state = {
      userId: '',
      latitude: '',
      longitude: '',
      birdId: ''
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
            <div className="input-wrapper">
              <input
                className="input-map"
                id="userId"
                type="text"
                name="userId"
                value={this.state.userId}
                placeholder="userId"
                onChange={this.handleChange}
              ></input>

              <input
                className="input-map"
                id="latitude"
                type="text"
                name="latitude"
                value={this.state.latitude}
                placeholder="latitude"
                onChange={this.handleChange}
              ></input>

              <input
                className="input-map"
                id="longitude"
                name="longitude"
                type="text"
                value={this.state.longitude}
                placeholder="longitude"
                onChange={this.handleChange}
              ></input>

              <input
                className="input-map"
                id="birdId"
                name="birdId"
                type="text"
                value={this.state.birdId}
                placeholder='bird birdId'
                onChange={this.handleChange}
              ></input>

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

export default UserSightingCard
