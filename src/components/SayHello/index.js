/**
 * @file SayHello is a component that returns a welcome message to the user
 * @author jean-jacques BOERO
 */
import React from 'react'
import './sayHello.css'
import PropTypes from 'prop-types'
/**
 * Display welcome message with user's first name
 * @component
 * @param {String} username need user name
 * @returns {reactElement}
 */
export default function Sayhello({ username }) {
  return (
    <div className="dashboardHeader">
      <h1> Bonjour <span className="firstname">{username}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

Sayhello.propTypes = {
  username: PropTypes.string.isRequired,
}
