import React from "react";
import Housecard from "./housecards";

function Cardcontainer() {
    return (
        <>
        <div className="container housecontainer text-center">
            <h2>Get your dream house</h2>
            <div className="row align-items-center justify-content-around">
                <div className="col-md-4 mb-4"> 
                    <Housecard/>
                </div>
                <div className="col-md-4 mb-4"> 
                    <Housecard/>
                </div>


                <div className="col-md-4 mb-4"> 
                    <Housecard/>
                </div>
                <div className="col-md-4 mb-4"> 
                    <Housecard/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cardcontainer;
