import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer d-flex flex-md-row justify-content-md-between border">
        <Link to="/">
          <img
            src="iDance Logo.png"
            alt="iDance Academy logo"
            className="footer-logo"
            height="200"
            width="200"
          />
        </Link>
        <p></p>
        <div className=" d-flex align-items-center justify-content-md-between mr-4 footer-links">
          <Link to="/contact">
            <button className="btn btn-info p-3">Contact Us</button>
          </Link>
          <a href="https://www.facebook.com/idanceacademytt868">
            <img src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png" alt="facebook" />
          </a>
          <a href="https://twitter.com/">
            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v2.png" alt="twitter" />{" "}
          </a>
          <a href="https://www.instagram.com/idanceacademytt868/">
            <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" alt="instagram" />{" "}
          </a>
        </div>
      </div>
      <div className="border">{year}. Made in Trinidad and Tobago. All rights reserved.</div>
    </>
  );
};

export default Footer;
