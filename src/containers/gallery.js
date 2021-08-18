import React from "react";
import Carousel from "react-gallery-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-gallery-carousel/dist/index.css";
import imageLinks from "../data/imagelinks";
// import image1 from "../images/aliaksei-manlyx-YipPfXLCiUo-unsplash.jpg";
// import image2 from "../images/alireza-dolati-eqLEGlP8tO4-unsplash.jpg";
// import image3 from "../images/ballet-service-1.jpeg";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery">
        <Carousel images={imageLinks} className="gal-window" />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
