import React from "react";
import Navbar from "./navbar";
import error from "../assets/error.jpg"
function Errorpage(){
    return(
        <>
        <Navbar/>
        <img src={error}/>
        <div><h1>PAGE NOT FOUND</h1></div>
        </>
    )
}
export default Errorpage