import React from "react";
import onebedroom from "../assets/onebedroom.jpeg"
import twobedroom from "../assets/twobedroom.jpeg"
import threebedroom from "../assets/threebedroom.jpeg"
import fourbedroom from "../assets/fourbedroom.jpeg"
import bungalow from "../assets/bungalow.jpeg"
import mansion from "../assets/mansion.jpeg"
import Nyumba from "./nyumba";
import Housecard from "./housecards"



function Cardcontainer() {
    let nyumba1 ={
        type: "one bedroom",
        location: "Westi",
        cost:10000,
        img:onebedroom
      }
      let nyumba2 ={
        type: "two bedroom",
        location: "Mirema",
        cost:30000,
        img:twobedroom
      }
      let nyumba3 ={
        type: "Three bedroom",
        location: "packlands",
        cost:200000,
        img: threebedroom
      }
      let nyumba4 ={
        type: "four bedroom",
        location: "Membly",
        cost:1000000,
        img:fourbedroom
      }
      let nyumba5 ={
        type: "mansion",
        location: "Kilimani",
        cost:3000000,
        img:mansion
      }
      let nyumba6 ={
        type: "bungalow",
        location: "Karen",
        cost:2000000,
        img: bungalow
      }
    return (
        <>
        <div className="container housecontainer text-center">
            <h2>Get your dream house</h2>
            <div className="row align-items-center justify-content-around">
                <div className="col-md-4 mb-4"> 
                    <Housecard house={nyumba1}/>
                </div>
                <div className="col-md-4 mb-4"> 
                    <Housecard house={nyumba2}/>
                </div>


                <div className="col-md-4 mb-4"> 
                    <Housecard house={nyumba3}/>
                </div>
                <div className="col-md-4 mb-4"> 
                    <Housecard house={nyumba4}/>
                </div>
                <div className="col-md-4 mb-4"> 
                    <Housecard house={nyumba5}/>
                </div>
                <div className="col-md-4 mb-4"> 
                    <Housecard house={nyumba6}/>
                </div>
                







            </div>
        </div>
        </>
    );
}

export default Cardcontainer;
