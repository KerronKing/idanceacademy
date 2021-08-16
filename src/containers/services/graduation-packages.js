import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../Services.scss";
import gradImg from "../../images/grad-service-2.jpeg";

const GraduationPackages = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src={gradImg}
          alt="happy graduands"
        />
        <h1>Graduation Packages</h1>
        <p className="package-description">
          We choreograph graduation dances for individuals, small and large
          groups. From pre-school to university graduation ceremonies, the I
          Dance Academy can choreograph your special graduation day dances.
          Click the ‘Contact Us’ Button below for us to speak further about your
          desired choreographed dance pieces for your graduation milestone.
        </p>
        <Link to="/contact/">
          <button className="register-btn p-xs-2 p-md-3">CONTACT US</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default GraduationPackages;
