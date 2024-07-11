
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
import Countrycard from "./countrycard";

const Continents = () => {
    

    const location = useLocation()
    const continentname = location.state
    const [countries, setCountry] = useState([])
    console.log(continentname)

   

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => {
                response.json().then((resp) => {
                    console.log(resp)
                    setCountry(resp)
                })
            }).catch((err) => {
                console.err(err);
            })
    }, [])

    return <>
        <NavBar />
        <div className="container">
            <h1>COUNTRIES IN {continentname}</h1>
            <div className="row justify-content-around">
                {
                    countries.filter(country => country.continents.includes(continentname)).map((country, index) => {
                        return (
                            <Link to ='/countryprofile' state = {country}>
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card countrycontainer">
                                    <img src={country.flags.png} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">COUNTRY:{country.altSpellings[1]}</h5>
                                        <h5>CAPITAL:{country.capital}</h5>
                                        <h5>CONTINENT:{country.continents}</h5>
                                        
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
</>

}
export default Continents