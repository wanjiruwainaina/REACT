import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar'
import Housecard from './components/housecards'
import Cardcontainer from './components/cardscontainer'
function App() {
 
return (
    <>
    <Navbar/>
    <Cardcontainer/>
    </>
  )
}

export default App
