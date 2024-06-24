import { useState } from 'react'
import './App.css'
import Mydiv from './components/mydiv'
import Navigation from './components/mynavbar'
import Footer from './components/footer'


function App() {
  
return (
    <>
    <div>
      <Navigation/>
    </div>
    <br />
    <div className='arrangerows'> 
      <Mydiv/>
      <Mydiv/>
      <Mydiv/>
      <Mydiv/>
    </div>
    <Footer/>
    </>
  )
}
export default App
