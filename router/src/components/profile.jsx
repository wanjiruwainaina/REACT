import React from "react";
import Navbar from "./nav-bar";
import { Link, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Profile() {
    const profiles = ["Ian", "dan", "james", "Caro"]
    const params = useParams()
    console.log(params)
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-md-5">
                    {
                        profiles.map((profile, index) => {
                            return (
                                <h1>
                                    <Link to={'/profile/' + profile} className="mr-4 nav-link">{profile}</Link>
                                    <br/>
                                </h1>
                            )
                        })
                    }
                </div>
                <div className="col-md-6">
                    <Outlet/>
                </div>

            </div>


        </>
    )
}
export default Profile