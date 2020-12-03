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
      )
    }
  }