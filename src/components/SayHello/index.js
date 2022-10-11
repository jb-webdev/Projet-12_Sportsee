/**
 * @file SayHello is a component that returns a welcome message to the user
 * @author jean-jacques BOERO
 */
import React from 'react'
import './sayHello.css'
/**
 * Display welcome message with user's first name
 * @component
 * @param {String} username need user name
 * @returns {reactElement}
 */
export default function Sayhello({ userName }) {
  return (
    <div className="dashboardHeader">
      <h1> Bonjour <span className="firstname">{userName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
