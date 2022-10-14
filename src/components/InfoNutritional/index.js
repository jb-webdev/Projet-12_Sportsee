import React from 'react'
import './infonutrional.css'
import PropTypes from 'prop-types'

export default function InfoNutritional({ image, title, value, unit }) {
  
  return (
    <div className="boxNutritional">
      <img src={image} alt={title} />
      <div className="textBoxNutritional">
        <p className="textvalue">{value} {unit}</p>
        <p className='paraphNutritional'>{title}</p>
      </div>
    </div>
  )
}

InfoNutritional.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}
