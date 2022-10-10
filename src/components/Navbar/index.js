import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GlobalContext } from '../../utils/Context/globalContext.js'

import logo from '../../utils/assets/icons/logo-black.png'

export default function Navbar() {
  const { userAuth } = useContext(GlobalContext)

  return (
    <header className='headerNavbar'>
      <div className="navBarContainer">
        <Link className="navbarLinkLogo" to="/" >
          <img className="navbarLogo" src={logo} alt="logo" />
        </Link>
        {userAuth ? <div className="navbarWrapperLink">
          <Link className='linkNavbar' to="/">Accueil</Link>
          <Link className='linkNavbar' to="/">Profil</Link>
          <Link className='linkNavbar' to="/">Réglage</Link>
          <Link className='linkNavbar' to="/">Communauté</Link>
        </div> : ''}

      </div>
    </header>
  )
}
