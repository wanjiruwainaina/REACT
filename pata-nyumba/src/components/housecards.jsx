// save the downloaded image to the asset file to access
import React, { useState } from "react";
// the house bellow is a variable
import house from "../assets/house1.jpeg"
// when importing another image we use a diffrent variable
import house2 from "../assets/house2.jpeg"

function Housecard() {
    
    let [housetitle,setTitle] = useState("mansion")
    let [location, setLocation] = useState("lavington")
    let [price, setPrice] = useState(100000)


    function changeprice() {
        setPrice(400000)
        setLocation("westlands")
        setTitle("4 bedroom")
    }
    return (
        <>
            <div className="card" >
                <img src={house2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{housetitle}</h5>
                    <p className="card-text">{price} p.m</p>
                    <h5 className="card-title"> Location:{location}</h5>
                    <button type="button" class="btn btn-outline-info" onClick={changeprice}>RENT HOUSE</button>

                </div>
            </div>
        </>)
}
export default Housecard