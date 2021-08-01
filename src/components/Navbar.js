import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.scss";

const Navbar = () => {
  const menu = () => {
    const navLinks = document.getElementById("nav-links");
    const menuBtn = document.querySelector(".menu-btn");

    let menuToggle = false;

    menuBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!menuToggle) {
        menuBtn.classList.add("open");
        navLinks.classList.add("responsive");
        menuToggle = true;
      } else {
        menuBtn.classList.remove("open");
        navLinks.classList.remove("responsive");
        menuToggle = false;
      }
    });
  };

  useEffect(() => {
    menu();
  });

  return (
    <Nav className="justify-content-between align-items-center idance-nav w-100">
      <img
        src="https://www.dropbox.com/s/dcx7y8qu8730qa0/iDance%20Logo.jpeg?raw=1"
        alt="iDance Academy logo"
      />
      <div id="nav-links" className="d-flex flex-row">
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
          <LinkContainer to="/Events">
            <Nav.Link className="m-3">Events</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/gallery">
            <Nav.Link className="m-3">Gallery</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </div>
      <div className="menu-btn">
        <div className="burger"></div>
      </div>
    </Nav>
  );
};

export default Navbar;
