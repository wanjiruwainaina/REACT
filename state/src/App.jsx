import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/component1'
import { createContext } from 'react'

export const NameContext= createContext();

function App() {
  const [name, setName] = useState("john")

  return (
    <>
    <button onClick={()=>setName("sam")}>change name</button>
<NameContext.Provider value={name}>
<Component1/>
</NameContext.Provider>
    </>
  )
}

export default App
