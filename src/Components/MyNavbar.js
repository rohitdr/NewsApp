import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Navbar, Button, Link, Text } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";

const MyNavbar=()=> {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];
    return (
        <>
        


    
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          {/* <AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs">
            NewsHub
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="error" enableCursorHighlight hideIn="xs" varient="highlight-solid-rounded" >
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link  href="#">Bussiness</Navbar.Link>
          <Navbar.Link  href="#">Entertainment</Navbar.Link>
          <Navbar.Link isActive href="#">Sports</Navbar.Link>
          <Navbar.Link  href="#">Health</Navbar.Link>
          <Navbar.Link  href="#">Technology</Navbar.Link>
          <Navbar.Link  href="#">Sceince</Navbar.Link>
          
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="secondary" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
   
  


        {/* <nav className="navbar  fixed-top navbar-expand-lg bg-light mb-2 ">
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
      </nav> */}









      </>
    )
  }


export default MyNavbar
