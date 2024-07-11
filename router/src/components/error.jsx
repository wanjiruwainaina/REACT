import React from "react";
import Navbar from "./nav-bar";
import error from "../assets/error.jpg"
function ErrorPage(){
    return(
        <>
        <Navbar/>
        <img src={error}/>
        <div><h1>PAGE NOT FOUND</h1></div>
        </>
    )
}
export default ErrorPage