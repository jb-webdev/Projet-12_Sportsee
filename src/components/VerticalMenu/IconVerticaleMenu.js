import React from 'react'
import swim from '../../utils/assets/icon-svg/icon-swim.svg';
import yoga from '../../utils/assets/icon-svg/icon-yoga.svg'
import fitness from '../../utils/assets/icon-svg/icon-fitness.svg';
import bike from '../../utils/assets/icon-svg/icon-bike.svg';

export default function IconVerticaleMenu(props) {
  return (
    <div className='wrapper-icons'>
      <img className='iconVerticalMenu' src={swim} alt="icon-swim" />
      <img className='iconVerticalMenu' src={yoga} alt="icon-yoga" />
      <img className='iconVerticalMenu' src={fitness} alt="icon-fitness" />
      <img className='iconVerticalMenu' src={bike} alt="icon-bike" />
    </div>
  )
}
