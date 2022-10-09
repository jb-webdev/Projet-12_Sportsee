import React from 'react'
import './infoNutritional.css'

export default function InfoNutritional({ image, title, value, unit }) {
    return (
      <div className="count">
        <img src={image} alt={title} />
        <div className="textCount">
          <div className="value">
            {value}
            {unit}
          </div>
          <p>{title}</p>
        </div>
      </div>
    )
  }
