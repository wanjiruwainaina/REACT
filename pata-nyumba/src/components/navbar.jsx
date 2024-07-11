import React from "react";
import Modal from "./modal";
import {Link} from "react-router-dom"
function Navbar() {

  return (
    <>
    <header className="site-header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: 'blue', padding: '15px' }}>
                    <div className="container">
                        <a className="navbar-brand mr-4" href="#" style={{ fontSize: '1.5em' }}>Router.com</a>
                        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggle" style={{ color: 'white' }}>
                            <div className="navbar-nav ms-auto" style={{ textAlign: 'right' }}>
                                <div className="nav-item">
                                    
                                    <Link to="/" className="mr-4 nav-link" href="#">HOME</Link>
                                </div>
                                {/* <div className="nav-item">
                                    <Link to="/Profile"className="mr-4 nav-link" href="#">PROFILE</Link>
                                </div>
                                <div className="nav-item">
                                    <Link to="/Settings"className="mr-4 nav-link" href="#">SETTINGS</Link>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </nav>
                <br />
                <br />
            </header>
      {/* <nav className="navbar  updatenav" >
        <div className="container-fluid updatenav">
          <div><Modal /></div>
          <a className="navbar-brand">PATA NYUMBA</a>
          <Link to="/">Landingpage</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <Link to="/">Landingpage</Link>
            <Link to="/">App</Link>

          </form>
        </div>
      </nav> */}
    </>
  )
}
export default Navbar