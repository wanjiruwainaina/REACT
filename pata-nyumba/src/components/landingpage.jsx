import React from "react";
import Navbar from "./navbar";
import error from "../assets/error.jpg"

function Landingpage(){
    return(
        <>
        <Navbar/>
        <img src={error}/>
        <h1>OOPS!! TRY AGAIN</h1>
        </>
    )
}
export  default Landingpage