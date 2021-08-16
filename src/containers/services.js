import React from "react";
import { Link } from "react-router-dom";
import ImageDiv from "../components/ImageDiv";
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
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1JQa2NYGJPfbwC_q0IaIMa6_nha-TvpZp"
              classType="service-link"
            >
              <Link to="/ballet/">Ballet</Link>
            </ImageDiv>
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1Ys4s6C3o2TLc0U-5s3Kq8kkbMU8ghacL"
              classType="service-link"
            >
              <Link to="/dancercise/">Dancercise</Link>
            </ImageDiv>
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1ENNP6asuoLVb5OZV8WwUMUSWy1tGwJp0"
              classType="service-link"
            >
              <Link to="/modern-dance/">Modern Dance</Link>
            </ImageDiv>
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1IUSA3PcjQHpiCt_j3RtvOwjiT8yOeRb3"
              classType="service-link"
            >
              <Link to="/jazz/">Jazz</Link>
            </ImageDiv>
          </div>
        </div>
      </div>

      <div className="services-section additionals">
        <h2>Additional Services</h2>
        <div className="container-fluid">
          <div className="row justify-content-around d-flex">
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1MpHPa_GfUXO8ImS_w81EvMXJfukNjQir"
              classType="service-link"
            >
              <Link to="/wedding-packages/">Wedding Packages</Link>
            </ImageDiv>
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1RphSZVCeZ0HG7Uu7F2QJwRTp9fa91xU3"
              classType="service-link"
            >
              <Link to="/graduation-packages/">Graduation Packages</Link>
            </ImageDiv>
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1dxaS5wG60bvjiA7JfrLDPH7aPq6Rn3T0"
              classType="service-link"
            >
              <Link to="/misc-packages/">Miscellaneous Packages</Link>
            </ImageDiv>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
