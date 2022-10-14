import React from 'react'
import './app.css'
import Navbar from './components/Navbar/index.js'
import VerticalMenu from './components/VerticalMenu/index.js'
import ApppRouter from './Router/index.js'

function App() {
  
  return (
    <div className="App">
        <Navbar />
      <main id="mainwrapper">
        <div className='mainVerticalMenu'>
         <VerticalMenu />
        </div>
        <div className='mainSectionPages'>
          <ApppRouter />
        </div>
      </main>
    </div>
  )
}

export default App;
