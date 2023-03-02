import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Navbar=()=> {
  
    return (
        <>
        <nav className="navbar  fixed-top navbar-expand-lg bg-light mb-2 ">
        <div className="container-fluid "><div>
          <Link className="navbar-brand" to="/home">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button></div>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
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
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Sceince</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

             <li className="nav-item">
              <Link className="nav-link" to="/login">Login/Signup</Link>
             </li>
             
            </ul>
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>









      </>
    )
  }


export default Navbar
