import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer d-flex flex-column">
        <div className="d-flex flex-row justify-content-between align-items-top p-3 footer-first">
          <div>
            <Link to="/">
              <img
                src="https://www.dropbox.com/s/dcx7y8qu8730qa0/iDance%20Logo.jpeg?raw=1"
                alt="iDance Academy logo"
                className="footer-logo"
                height="100"
                width="100"
              />
            </Link>
            <div className="footer-contact">
              <img
                src="https://img.icons8.com/cotton/20/000000/worldwide-location--v2.png"
                alt="location"
              />
              <span>#142 Coora Road, Siparia</span>
            </div>
            <div className="footer-contact">
              <img
                src="https://img.icons8.com/fluent/20/000000/ringing-phone.png"
                alt="phone"
              />
              <span><a href="tel:18687128342">1-868-712-8342</a> / <a href="tel:18683961866">1-868-396-1866</a></span>
            </div>
            <div className="footer-contact">
              <img
                src="https://img.icons8.com/fluent/20/000000/email-open.png"
                alt="email"
              />{" "}
              <span><a href="mailto:idanceacademy868@gmail.com">idanceacademy868@gmail.com</a></span>
            </div>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <strong>About I Dance</strong>
              </li>
              <li>Mission</li>
              <li>Events</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <strong>Programs</strong>
              </li>
              <li>Youth</li>
              <li>Teens</li>
              <li>Adults</li>
            </ul>
          </div>
          <div className="footer-list">
            <ul>
              <li>
                <button className="register-btn p-xs-1 p-sm-3">
                  Register Now!
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between p-2 border-top border-light">
          <div className="d-flex align-items-center">
            {year}. I Dance Academy. Made in Trindad and Tobago.
          </div>
          <div className=" d-flex align-items-center justify-content-md-between footer-links">
            <a
              href="https://www.facebook.com/idanceacademytt868"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png"
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/idanceacademytt868/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
                alt="instagram"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
