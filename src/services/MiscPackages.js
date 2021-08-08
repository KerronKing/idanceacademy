import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";

const MiscPackages = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img src="" alt="" />
        <h1>Miscellaneous Packages</h1>
        <p className="package-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </p>
        <Link to="/contact">
          <button className="register-btn p-xs-2 p-md-3">Contact us!</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default MiscPackages;
