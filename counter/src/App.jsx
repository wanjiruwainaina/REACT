import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import Car from './components/car'
import toyota from"../src/assets/toyota.jpeg"
import isuzu from"../src/assets/isuzu.jpeg"
import benz from"../src/assets/benz.jpeg"


function App() {
  let [count,setCount]=useState(0)
// let car1 ={
//   brand: "toyota",
//   year: "2013",
//   mileage:1000,
//   img:toyota
// }
// let car2 ={
//   brand: "Isuzu",
//   year: "2013",
//   mileage:3000,
//   img:isuzu
// }
// let car3 ={
//   brand: "Benz",
//   year: "1990",
//   mileage:2000,
//   img: benz
// }


  function increase() {
      setCount(prevCount =>prevCount + 1)
      setCount(prevCount =>prevCount + 1)
      
  }
  function decrease() {
      setCount(prevCount =>prevCount - 1)
      setCount(prevCount =>prevCount - 1)

  }
  function reset() {
      setCount(0)
  }
  return (
    <>

<Counter count={count} increasefunction={increase} decreasefunction={decrease}resetfunction={reset}/>
    </>
  
  )
}



export default App
