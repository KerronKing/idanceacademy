import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <Nav className="justify-content-between align-items-center">
      <img
        src="iDance Logo.png"
        alt="iDance Academy logo"
        height="125"
        width="125"
      />
      <div className="d-flex flex-row">
        <Nav.Item>
          <LinkContainer to="/about">
            <Nav.Link className="m-3">About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link className="m-3">Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/registration">
            <Nav.Link className="m-3">Registration</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/services">
            <Nav.Link className="m-3">Services</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/schedule">
            <Nav.Link className="m-3">Schedule</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/gallery">
            <Nav.Link className="m-3">Gallery</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navbar;
