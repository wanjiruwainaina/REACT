import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Navbar from './components/nav-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Home/>
    </>
  )
}

export default App
