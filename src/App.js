import React, {useContext} from 'react'
import './App.css'
import Navbar from './components/Navbar/index.js'
import VerticalMenu from './components/VerticalMenu/index.js'
import ApppRouter from './Router/index.js'

import {GlobalContext} from './utils/Context/globalContext.js'

function App() {
  const {userAuth} = useContext(GlobalContext)
  return (
    <div className="App">
      {userAuth ? <Navbar /> : ''}
      {userAuth ? <VerticalMenu /> : ''}
      <ApppRouter />
    </div>
  )
}

export default App;
