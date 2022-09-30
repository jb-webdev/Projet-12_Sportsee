import React, {useContext} from 'react'
import Navbar from './components/Navbar/index.js'
import ApppRouter from './Router/index.js'

import {GlobalContext} from './utils/Context/globalContext.js'

function App() {
  const {userAuth} = useContext(GlobalContext)
  return (
    <div className="App">
      {userAuth ? <Navbar /> : ''}
      <ApppRouter />
    </div>
  )
}

export default App;
