import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginCard from './LoginCard'

export default class LandingCard extends React.Component {
  render () {
    return (
    // If you click register Route to RegisterCard
    // If you click login Route to LoginCard
    <>
      <h1>This is Landing Card Component</h1>
      <LoginCard />
    </>
    )
  }
}
