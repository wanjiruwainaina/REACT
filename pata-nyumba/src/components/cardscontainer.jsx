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
  let houses = [
    {
      type: "one bedroom",
      location: "Westi",
      cost: 10000,
      img: onebedroom
    },
    {
      type: "two bedroom",
      location: "Mirema",
      cost: 30000,
      img: twobedroom
    },
    {
      type: "Three bedroom",
      location: "packlands",
      cost: 200000,
      img: threebedroom
    },
    {
      type: "four bedroom",
      location: "Membly",
      cost: 1000000,
      img: fourbedroom
    },
    {
      type: "mansion",
      location: "Kilimani",
      cost: 3000000,
      img: mansion
    },
    {
      type: "bungalow",
      location: "Karen",
      cost: 2000000,
      img: bungalow
    }
  ]
  return (
    <>
      <div className="container housecontainer text-center">
        <h2>Get your dream house</h2>
        {
          houses.map((house,index) => {
            return (
              <div className="col-md-3">
                <Housecard house={house} />

              </div>
            )
          })


        }
      </div>
    </>
  );
}

export default Cardcontainer;
