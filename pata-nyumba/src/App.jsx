import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nyumba from './components/nyumba'
import Cardcontainer from './components/cardscontainer'
import Navbar from './components/navbar'

function App() {
  const [count,setCount]= useState(0)


 
return (
    <>
    <Navbar/>
   <Cardcontainer/>
   
    </>
  )
}
export default App
