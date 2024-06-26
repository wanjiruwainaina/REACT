import React, { useState } from "react";
const Nyumba = ({ nyumba }) => {
    let [likes, setlikes] = useState(0)
    function Addlikes() {
        setlikes(++likes)
    }
    return (
        <>
            <div className="card-container ">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={nyumba.img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{nyumba.type}</h5>
                        <h6 className="card-title">Location: {nyumba.location}</h6>
                        <h6 className="card-title">cost: {nyumba.cost}</h6>
                        <button type="button" class="btn btn-danger" onClick={Addlikes}>likes</button>
                        
                        <likes />

                    </div>
                </div>
            </div>



        </>

    )
}
export default Nyumba