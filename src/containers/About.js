import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.scss";

const About = () => (
  <>
    <Navbar />

    {/* Banner */}

    <div className="about-us-first-section">
      <div className="homepage-link">
        <Link to="/">&lt;&lt; Back to Homepage</Link>
      </div>

      <div className="about-us-banner">
        <h1>About I Dance Academy</h1>
      </div>
    </div>

    {/* Founder Section */}

    <div className="about-us-main-section d-flex">
      <div className="about-1">
        <img src="" alt="" />
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum.
        </p>
        <h2>History</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum.
        </p>
      </div>
      <div className="about-2">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>

    <div className="about-founder">
      <h2>Founder</h2>
      <img src="" alt="" />
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <Footer />
  </>
);

export default About;
