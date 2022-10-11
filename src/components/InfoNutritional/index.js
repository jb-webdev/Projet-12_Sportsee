import React from 'react'
import './infonutrional.css'

export default function InfoNutritional({ image, title, value, unit }) {
  return (
    <div className="boxNutritional">
      <img src={image} alt={title} />
      <div className="textBoxNutritional">
        <div className="value">{value} {unit}</div>
        <p className='paraphNutritional'>{title}</p>
      </div>
    </div>
  )
}
