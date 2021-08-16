import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
    <Nav className="justify-content-between align-items-center idance-nav">
        <Link to="/" className="nav-link">
          <img
            src="https://www.dropbox.com/s/dcx7y8qu8730qa0/iDance%20Logo.jpeg?raw=1"
            alt="iDance Academy logo"
            loading="eager"
          />
        </Link>
      <div id="nav-links" className="d-flex flex-row">
        <Nav.Item>
            <Link to="/about/" className="nav-link m-3">About</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/contact/" className="nav-link m-3">Contact</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/registration/" className="nav-link m-3">Registration</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/services/" className="nav-link m-3">Services</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/schedule/" className="nav-link m-3">Schedule</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/events/" className="nav-link m-3">Events</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/gallery/" className="nav-link m-3">Gallery</Link>
        </Nav.Item>
      </div>
      <div className="menu-btn">
        <div className="burger"></div>
      </div>
    </Nav>
  );
};

export default Navbar;
