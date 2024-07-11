import React from "react";
import {useParams} from "react-router-dom"

function ProfileChild(){
    const params= useParams()
    return(
        <h1>profile {params.profileid}</h1>
    )
}
export default ProfileChild