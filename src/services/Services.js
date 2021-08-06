import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <Navbar />

      <div className="services-section">
        <h2>Classes</h2>
        <div className="container-fluid">
          <div className="row justify-content-around d-flex">
            <div className="service-link">
              <Link to="/beginner-ballet">Beginner's Ballet</Link>
            </div>
            <div className="service-link">
              <Link to="/youth-ballet">Youth Ballet</Link>
            </div>
            <div className="service-link">
              <Link to="/modern-dance">Modern Dance</Link>
            </div>
            <div className="service-link">
              <Link to="/jazz">Jazz</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section additionals">
        <h2>Additional Services</h2>
        <div className="container-fluid">
          <div className="row justify-content-around d-flex">
            <div className="service-link">
              <Link to="marriage-packages">Marriage Packages</Link>
            </div>
            <div className="service-link">
              <Link to="graduation-packages">Graduation Packages</Link>
            </div>
            <div className="service-link">
              <Link to="misc-services">Micellaneous Services</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
