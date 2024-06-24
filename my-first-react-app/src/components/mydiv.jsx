import React from "react";
const Mydiv = ()=>{
    return(
      <>
      <div className='mydiv'>
        <Myhead/>
        <h2>hello react</h2>
        <p id="mypar">react is a javascript library</p>
        <h2>done</h2>
        <h3>learning components</h3>
        <h4>and components only</h4>
        < Buttonsections/>
      </div>
    </>
    )
}


  
  function Myhead(){
    return(
      <>
      <div className='zin'>
      <h1>ZINDUA SCHOOL</h1>
      </div>
     
      </>
    )
  }
  function Buttonsections(){
    return(
      <>
      <div className='button'>
      <button className='deletebutton'>delete</button>
      <button className='updatebutton'>update</button>
      </div>
     
      </>
    )
  }
  
  export default Mydiv