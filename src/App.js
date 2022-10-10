import React from 'react'
import './app.css'
import Navbar from './components/Navbar/index.js'
import VerticalMenu from './components/VerticalMenu/index.js'
import ApppRouter from './Router/index.js'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <VerticalMenu />
      <ApppRouter />
    </div>
  )
}

export default App;
