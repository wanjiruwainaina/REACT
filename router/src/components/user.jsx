import React from "react";
import Navbar from "./nav-bar";
import Usercard from "./usercard";
export default function Users() {
    const users = [
        {
            name: "Dan",
            age: 17,
            profession: "lawyer",
            Country: "kenya"
        },
        {
            name: "John",
            age: 20,
            profession: "Nurse",
            Country: "Tanzania"
        },
        {
            name: "yvette",
            age: 25,
            profession: "Doctor",
            Country: "Uganda"
        },
        {
            name: "James",
            age: 17,
            profession: "lawyer",
            Country: "kenya"
        },
        {
            name: "Anne",
            age: 37,
            profession: "footbaler",
            Country: "Zanzibar"
        }
    ]
    return (
        <>
            <Navbar />
            <h1>USERS</h1>
            <div className="row justify-content-around">
                {
                    users.map((user, index) => {
                        return (
                            <Usercard user={user} index={index} />
                        )
                    })
                }
            </div>
        </>
    )
}
