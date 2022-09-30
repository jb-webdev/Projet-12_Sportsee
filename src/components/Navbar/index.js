import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../utils/assets/icons/logo-black.png'

export default function Navbar() {
  return (
    <header className='headerNavbar'>
      <div className="navBarContainer">
        <Link className="navbarLinkLogo" to="/" >
          <img className="navbarLogo" src={logo} alt="logo" />
        </Link>
        <div className="navbarWrapperLink">
          <Link className='linkNavbar' to="/">Accueil</Link>
          <Link className='linkNavbar' to="/">Profil</Link>
          <Link className='linkNavbar' to="/">Réglage</Link>
          <Link className='linkNavbar' to="/">Communauté</Link>
        </div>
      </div>
    </header>
  )
}
