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
            <div
              className="service-link ballet-link"
              id="ballet-link"
            >
              <Link to="/ballet/">Ballet</Link>
            </div>
            <div
              className="service-link"
              id="dance-link"
            >
              <Link to="/dancercise/">Dancercise</Link>
            </div>
            <div
              className="service-link"
              id="modern-link"
            >
              <Link to="/modern-dance/">Modern Dance</Link>
            </div>
            <div
              className="service-link"
              id="jazz-link"
            >
              <Link to="/jazz/">Jazz</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section additionals">
        <h2>Additional Services</h2>
        <div className="container-fluid">
          <div className="row justify-content-around d-flex">
            <div
              className="service-link"
              id="wed-link"
            >
              <Link to="/wedding-packages/">Wedding Packages</Link>
            </div>
            <div
              className="service-link"
              id="grad-link"
            >
              <Link to="/graduation-packages/">Graduation Packages</Link>
            </div>
            <div
              className="service-link"
              id="misc-link"
            >
              <Link to="/misc-packages/">Miscellaneous Packages</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
