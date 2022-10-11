import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Data from './data'

function App() {

  const journal = Data.map((items) =>{
    return(
      <Body 
        key = {items.id}
        {...items}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <div className='body-frame'>
        {journal}
      </div>
      
    </div>
  )
}

export default App
