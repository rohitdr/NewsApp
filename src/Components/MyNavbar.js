import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button, Dropdown,Avatar,Input, Text,Link as Linkank } from "@nextui-org/react";
import { SearchIcon } from './Searchicon';
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";

const MyNavbar=()=> {
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
    return (
        <>
        


    
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          {/* <AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs">
            NewsHub
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="error" enableCursorHighlight hideIn="xs" varient="highlight-solid-rounded" >
        <Navbar.Link isActive><Link className="navbarlink"to="/home">Home</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/bussiness">Bussiness</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/entertainment">Entertainment</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/sports">Sports</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/health">Health</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/technology">Technology</Link> </Navbar.Link>
        <Navbar.Link ><Link className="navbarlink"to="/science">Sceince</Link> </Navbar.Link>
         <Navbar.Link><Link className="navbarlink"to="/login"></Link></Navbar.Link>
         <Navbar.Link><Link className="navbarlink"to="/Signup"></Link></Navbar.Link>
         

          <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          
        </Navbar.Content>
       
        <Navbar.Content>
        <Dropdown placement="bottom-right">
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
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>Help & Feedback</Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error"> Log Out </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
