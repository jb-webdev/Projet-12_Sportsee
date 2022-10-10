import React, { useContext } from 'react'
import './verticaleMenu.css'
import IconVerticaleMenu from './IconVerticaleMenu.js'
import { GlobalContext } from '../../utils/Context/globalContext.js'


export default function VerticalMenu() {
  const { userAuth } = useContext(GlobalContext)
  return (
    <aside className='verticalMenu'>
      {userAuth ? <IconVerticaleMenu /> : ''}
      <div className="verticalMenuCopyright">
        <p className='verticalCopyright'>Copyright, SportSee 2022</p>
      </div>
    </aside>
  )
}
