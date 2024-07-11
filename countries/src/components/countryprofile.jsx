import React from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
const CountryProfile = () => {
    const location = useLocation()
    const country = location.state;
    console.log(location.state);
    return (
        <>
            <NavBar />


            <div className="card">

                <div className="card-body" style={{ display: "flex" }}>

                    <div>
                        <img className="card-title" src={country.flags.png} style={{ width: "80px" }} />
                        <img className="card-title" src={country.coatOfArms.png} style={{ width: "80px" }} />
                        <br />
                        <h2 className="card-title" style={{ color: "purple" }}> Country: {country.name.common}</h2>
                        <br />
                        <h4 className="card-title">Population: {country.population}</h4>

                        <br />
                        <h4 className="card-title"><i>languages: {country.languages.isl}</i></h4>
                        <h4 className="card-title"> Timezone:{country.timezones}</h4>

                        {/* <h2 className="card-title" style={{ color: "green" }}> Country: {country.name.common}</h2> */}
                        <br />
                        <h4 className="card-title">Capital : {country.capital}</h4>
                        <br />
                        {/* <h4 className="card-title">UN member : {country.unMember}</h4> */}
                        <br />
                        <h4 className="card-title">Continent: {country.continents}</h4>
                        <br />
                        {/* <h4 className="card-title">maps: {country.maps.googlemaps}</h4>
                        <br /> */}
                        <h5> NEIGHBOURS:{country.borders ? country.borders.map((border) => {
                            return (
                                <Link to='/border' state={border}>
                                    <h4>{border}</h4>
                                </Link>
                            )
                        })
                            : null}</h5>
                    </div>
                </div>
                <h4 className="card-title">{ } </h4>

            </div>
        </>
    )
}
export default CountryProfile;