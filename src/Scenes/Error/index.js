import React from 'react'
import './error.css'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  var navigate = useNavigate()

  setTimeout(() => {
    navigate(`/`)
  }, 2000)


  return (
    <main className='errorPage'>
      <h1>404</h1>
      <h2>Oups la page n'héxiste pas !</h2>
      <p>Vous allez être redirigé dans 3 secondes sur la page de connexion</p>
    </main>
  )
}
