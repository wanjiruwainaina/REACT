
import React from "react";
import { Link } from "react-router-dom";

const Countrycard = ({ country }) => {
  return (
    <>
      <Link to="/countryprofile" state={country} >

        <div className="card" style={{margin:"0px 0px"}}>

          <div className="card-body" style={{ display: "flex",justifyContent:"space-around" }}>

            <div>
            
              <img className="card-title" src={country.flags.png}/>
              <br />
              {/* <img className="card-title" src={country.coatOfArms.png}/> */}
              <br />
              {/* <h4 className="card-title" style={{width:"60%"}}>{country.timezones}</h4> */}

            </div>
            <div>
              <h2 className="card-title" style={{color:"red"}}>{country.name.common}</h2>
              <br />
              
              <h4 className="card-title">Continent: {country.continents}</h4>
            </div>

          </div>
        </div>

      </Link>



    </>
  )
}
export default Countrycard;

    