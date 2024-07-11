import React from "react";
import{Link} from "react-router-dom"
function Usercard({user}){
    return(
        <>
          <div className="col-md-3 card" style={{ margin: "5px" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{user.age}</h6>
                                    <h5 className="card-title">{user.profession}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{user.Country}</h6>
                                    <Link to='/userprofile' state={user} className="card-link">VIEW MORE</Link>
                                    <a href="#" className="card-link">Contact</a>
                                </div>
                            </div>
        </>
    )
}
export default Usercard