import React from 'react'
import './error.css'
import { useNavigate } from 'react-router-dom'



export default function Error(props) {
  
  var navigate = useNavigate()

  setTimeout(() => {
    navigate(`/`)
  }, 5000)


  return (
    <main className='errorPage'>
      <h1>404</h1>
      <h2>{props.message}</h2>
      <p>Vous allez être redirigé dans 5 secondes sur la page de connexion</p>
    </main>
  )
}

Error.defaultProps = {
  message: "Oups ! la page n'éxiste pas !!!"
}