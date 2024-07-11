// save the downloaded image to the asset file to access
import React, { useState } from "react";
// the house bellow is a variable
import house from "../assets/house1.jpeg"
// when importing another image we use a diffrent variable
import house2 from "../assets/house2.jpeg"
import Likes from "./like";
import Cardcontainer from "./cardscontainer";

function Housecard({ house}) {
    
    let [housetitle,setTitle] = useState("mansion")
    let [location, setLocation] = useState("lavington")
    let [price, setPrice] = useState(100000)
    let [likes, setLikes] = useState(0)


    function changeprice() {
        setPrice(400000)
        setLocation("westlands")
        setTitle("4 bedroom")
    }
function addLikes(){
    setLikes(++likes)
}

    return (
        <>
        {
            house ?
            <div className="card" >
                <img src={house.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{house.type}</h5>
                    <p className="card-text">{house.cost} p.m</p>
                    <h5 className="card-title"> Location:{house.location}</h5>
                    <p>category:{house.cost>50000 ? "expensive": "cheap"}</p>
                    <h4>likes: {likes}</h4>
                    <button type="button" class="btn btn-outline-info" onClick={changeprice}>RENT HOUSE</button>
                    <button type = "button"class="btn btn-danger"onClick={addLikes}>likes</button>
                     
                </div>
            </div>
            :
            <div className="card" >
                <img src={house.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">no house</h5>
                    <p className="card-text">no price</p>
                    <h5 className="card-title">  no Location</h5>
             </div>
        </div>
        }
        </>)
}
export default Housecard