import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GlobalContext } from '../../utils/Context/globalContext.js'

import logo from '../../utils/assets/icons/logo-black.png'

export default function Navbar() {
  const { userAuth, toggleUserAuth } = useContext(GlobalContext)

  const userdeconnexion = () => {
    toggleUserAuth(false)

  }

  return (
    <header className='headerNavbar'>
      <div className="navBarContainer">
        <Link onClick={userdeconnexion} className="navbarLinkLogo" to="/" >
          <img className="navbarLogo" src={logo} alt="logo" />
        </Link>
        {userAuth ? <div className="navbarWrapperLink">
          <Link onClick={userdeconnexion} className='linkNavbar' to="/">Accueil</Link>
          <Link onClick={userdeconnexion} className='linkNavbar' to="/">Profil</Link>
          <Link onClick={userdeconnexion} className='linkNavbar' to="/">Réglage</Link>
          <Link onClick={userdeconnexion} className='linkNavbar' to="/">Communauté</Link>
        </div> : ''}

      </div>
    </header>
  )
}
