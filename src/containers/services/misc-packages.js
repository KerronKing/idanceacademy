import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../Services.scss";
import miscImg from "../../images/misc-service-2.jpeg";


const MiscPackages = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src={miscImg}
          alt="old couple slow dancing"
          loading="eager"
        />
        <h1>Miscellaneous Packages</h1>
        <p className="package-description">
          Whether you would like to learn to dance on a one-on-one basis, a
          couple who loves to dance, a family who would like to learn to dance
          together or any other dance choreography service, we are here to
          provide you with our choreography services. Click the ‘Contact Us’
          button below and let us know how best we can accommodate and assist
          you with your specialized dance package.
        </p>
        <h4 className="text-left">Testimonial</h4>
        <p>
          <i>
            “I always had a desire to learn to dance, however, the stars never
            quite aligned for me. This all changed for me when I met Ms.
            Johncilla, a consummate dance professional and dancer
            extraordinaire. She converted a mere dream of mine into reality with
            focused one-on-one training, flexible working hours, patience and a
            passion for dancing that I have never seen before. She created a
            comfortable workspace and environment where I was able to learn
            dance steps comfortably that I once thought were complicated. I
            would recommend training at the I Dance Academy to anyone who has a
            dream to dance. If my dream to dance came through at the I Dance
            Academy, the same can happen for you.”{" "}
          </i>
          ~ AJ
        </p>
        <Link to="/contact/">
          <button className="register-btn p-xs-2 p-md-3">CONTACT US</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default MiscPackages;
