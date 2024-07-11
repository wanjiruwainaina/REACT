import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countriescontainer from './components/countriescontainer'
import NavBar from './components/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Countriescontainer/>
      
  
    </>
  )
}

export default App
