import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <Navbar collapseOnSelect expand="md"  variant="dark" className="py-0 bg-dark-custom">
      <Container fluid>
        
        <NavLink className={`navbar-brand logoStyle`} to="/"><img src={require("../images/rmLogoHorizontalBlack.jpg")} alt="RM logo" /></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
          
          <NavLink className='nav-link text-white menu-hover' to="products">Products</NavLink>
          <NavLink className='nav-link text-white menu-hover' to="service">Service</NavLink>
          </Nav>
          <Nav>
            <NavLink className='nav-link text-white menu-hover' to="contact">Contact</NavLink>
            <NavLink className="nav-link text-white menu-hover" to={"about"}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
