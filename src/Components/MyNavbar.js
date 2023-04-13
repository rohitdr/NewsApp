import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Button, Dropdown,Avatar,Input, Text,Link as Linkank } from "@nextui-org/react";

// import { Layout } from "./Layout.js";
import { icons } from './Icon';
import { useState } from 'react';
import { useEffect } from 'react';

import { Logo } from "./Logo.js";

/**
 * This is a JavaScript function that creates a navbar with collapsible items and uses the useNavigate
 * hook.
 */

const MyNavbar=()=> {
  let Navigate=useNavigate();
  const collapseItems = [
    "Home",
    "Bussiness",
    "Entertainment",
    "Sports",
    "Health",
    "Technology",
    "Science",
    "Login",
   
  ];
  let Nevigate=useNavigate()
useEffect(()=>{
getuserdata();
},[])
  const [loggeduserdata,setloggeduserdata]=useState({})
  const getuserdata=async()=>{
    try{
      const response = await fetch('http://localhost:5000/api/auth/getuser',
    
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("auth-token")
        },
       
      }
    );
    
    
    
    let result = await response.json();
    if (response.status == 404) {
  
    } else if (response.status == 200) {
    setloggeduserdata(result)
     
   
    } else {
    
    }
    
    } catch (error) {
    
    console.log(error.message);
    }
  }
 
    return (
        <>
        


    
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Logo></Logo>
          <Text b color="inherit" hideIn="xs">
            NewsHub
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="error" hideIn="xs" varient="highlight-solid-rounded" >
        <Navbar.Link isActive ><Link className="navbarlink"to="/home">Home</Link> </Navbar.Link>
        <Navbar.Link> <Link className="navbarlink"to="/Monthlyhighlights">Heighlights</Link></Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/bussiness">Bussiness</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/entertainment">Entertainment</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/sports">Sports</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/health">Health</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/technology">Technology</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/science">Sceince</Link> </Navbar.Link>
         <Navbar.Link><Link className="navbarlink"to="/login"></Link></Navbar.Link>
         <Navbar.Link><Link className="navbarlink"to="/Signup"></Link></Navbar.Link>
         
         
              
        </Navbar.Content>
       
        <Navbar.Content>
        {sessionStorage.getItem("auth-token")?  <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src={loggeduserdata?.image}
                />
                
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                {loggeduserdata?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings"  withDivider>
                <div  onClick={()=>{Nevigate('/ADDNews')}}> ADD News</div>
               
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider >
              <div onClick={()=>{Navigate('/Activity')}}>News Operations</div> 
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>Help & Feedback</Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error" ><div onClick={()=>{sessionStorage.removeItem("auth-token"); Navigate('/login')}}>Log Out</div>  </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>: <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
            
            >
             
        
              <Dropdown.Item key="help_and_feedback" ><div onClick={()=>{Navigate('/login')}}> Login</div></Dropdown.Item>
              <Dropdown.Item key="logout"  ><div onClick={()=>{Navigate('/Signup')}}>Sign Up</div>  </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}
      




        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Linkank
              color="inherit"
              css={{
                minWidth: "100%",
              }}
       
            > <Link to={`/${item}`}>{item}</Link>
              
             </Linkank>
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
