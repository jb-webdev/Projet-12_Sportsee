import React from 'react'
import './verticaleMenu.css'
import IconVerticaleMenu from './IconVerticaleMenu.js'


export default function VerticalMenu() {
  return (
    <aside className='verticalMenu'>
        <IconVerticaleMenu/>
        <div className="verticalMenuCopyright">
            <p className='rotate'>Copyright, SportSee 2022</p>
        </div>
    </aside>
  )
}
