import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";
function Component5 (){
    const name=useContext(NameContext)
    return(
        <>
        <h5>COMPONENT 5</h5>
        <p>hello {name}</p>
        </>
    )
}
export default Component5