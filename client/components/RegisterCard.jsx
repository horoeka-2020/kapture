import React from 'react'

export default class RegisterCard extends React.Component {
    // State to store user credentials
    state = {
        username: '',
        password: '',
        userId: null
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