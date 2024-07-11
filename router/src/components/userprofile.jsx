import React from "react";
import Navbar from "./nav-bar";
import { useLocation } from "react-router-dom";
function Userprofile() {
    const location = useLocation()
    const user = location.state
    console.log(user)
    return (
        <>
            <Navbar/>

            <div className="userprofilecard">
                
                    <h1>{user.name}</h1>
                    <h2>{user.profession}</h2>
                    <h2>{user.age}</h2>
                    <h2>{user.country}</h2>

            </div>


        </>
    )
}
export default Userprofile