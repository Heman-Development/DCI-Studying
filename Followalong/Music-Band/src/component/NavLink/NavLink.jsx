import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {NavLink} from "react-router-dom";

import "./NavLink.scss"


export const Navigation = () => {
  return (
    <div className="Container">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><NavLink to="website">Pink Floyd</NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><NavLink to="/home">Home</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to="/links">Links</NavLink></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item  href="#action/3.1">     <NavLink className="font" exact={true} to="/vocals">VOCALS</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">     <NavLink to="/guitar">GUITAR</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">     <NavLink to="/bass">BASS</NavLink></NavDropdown.Item>
        
          <NavDropdown.Item href="#action/3.4"><NavLink to="/drums">DRUMS</NavLink></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
