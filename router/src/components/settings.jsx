import React from "react";
import Navbar from "./nav-bar";
import {useParams} from "react-router-dom"
function Settings(){
    const params = useParams()
    console.log(params)
    return(
        <>
        <Navbar/>
        <h1 className="display-6">settings page{params.settingsid}</h1>
        </>
    )
}
export default Settings