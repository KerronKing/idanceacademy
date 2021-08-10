import React from "react";
import Carousel from "react-gallery-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-gallery-carousel/dist/index.css";
import imageLinks from "../data/imagelinks";
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
