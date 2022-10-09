import React from 'react'

export default function Sayhello({userName}) {
  return (
    <div className="dashboardHeader">
      <h1> Bonjour <span className="firstname">{userName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
