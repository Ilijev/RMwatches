import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import ChangeLanguage from "./changeLanguage/ChangeLanguage";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <Navbar collapseOnSelect expand="md"  variant="dark" className="py-0 bg-dark-custom ">
      <Container fluid>
        
        <NavLink className={`navbar-brand logoStyle`} to="/">
          <img src={require("../images/rmLogoHorizontalBlack.jpg")} alt="RM logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="text-center align-items-center">
            <NavLink className='nav-link text-white hover-underline-animation' to="products">Products</NavLink>
            <NavLink className='nav-link text-white hover-underline-animation' to="contact">Sell your watch</NavLink>
            <NavLink className="nav-link text-white hover-underline-animation" to="about">About</NavLink>
            <ChangeLanguage/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
