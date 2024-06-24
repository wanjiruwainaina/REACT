import React from "react";
import Modal from "./modal";
function Navbar() {

  return (
    <>
      <nav className="navbar  updatenav" >
        <div className="container-fluid updatenav">
          <div><Modal /></div>
          <a className="navbar-brand">PATA NYUMBA</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}
export default Navbar