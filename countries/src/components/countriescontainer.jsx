import React, { useState, useEffect,useRef } from "react";
import NavBar from "./navbar";
import Countrycard from "./countrycard";
import axios from "axios";
import { Atom } from "react-loading-indicators";

const Countriescontainer = () => {
    const [country, setCountry] = useState([]);
    const [IsLoaded, setIsLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef(null);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((resp) => {
                console.log(resp);
                setTimeout(() => {
                    setCountry(resp.data);
                    setIsLoaded(true);
                }, 3000);
            })
            .catch((err) => {
                console.error(err);
                setIsLoaded(true);
            });
    }, []);

    useEffect(() => {
        
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
    }, []);

    
    const filteredCountries = country.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <input
            type="text"
            placeholder="Search countries..."
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={searchInputRef}
          />
            <div className="division">
                <div className="container">
                    <div className="row justify-content-around">
                        {IsLoaded ? (
                            filteredCountries.length > 0 ? (
                                filteredCountries.map((countries, index) => (
                                    <div key={index}>
                                        <Countrycard country={countries} />
                                    </div>
                                ))
                            ) : (
                                <p>COUNTRY DOES NOT EXIST.</p>
                            )
                        ) : (
                            <Atom color="green" size="large" text="" textColor="" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Countriescontainer;
























