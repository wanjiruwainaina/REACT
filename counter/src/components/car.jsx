import React from "react";

function Car({car}) {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={car.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{car.brand}</h5>
                    <h6 className="card-title">Year: {car.year}</h6>
                    <h6 className="card-title">Ml: {car.mileage}</h6>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>


        </>
    )
}

export default Car;