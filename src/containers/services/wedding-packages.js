import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../Services.scss";
import wedImg from "../../images/wedding-service-2.jpeg";

const WeddingPackages = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src={wedImg}
          alt="wedded bliss"
        />
        <h1>Wedding Packages</h1>
        <p className="package-description">
          Looking to add a touch of unique class and flare to your wedding day?
          We offer first dance packages, dance choreographies for bridal parties
          amongst many other requested dance choreographies curated for your
          special day. Click the ‘Contact Us’ Button below as we are ready to
          speak to you on how we can help add to your special day.
        </p>
        <Link to="/contact/">
          <button className="register-btn p-xs-2 p-md-3">CONTACT US</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default WeddingPackages;
