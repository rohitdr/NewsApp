import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Navbar=()=> {
  
    return (
        <>
        <nav className="navbar  fixed-top navbar-expand-lg bg-light mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/bussiness">Bussiness</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link" to="/health">health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Sceince</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">technology</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>









      </>
    )
  }


export default Navbar
