import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import Footer from "../components/Footer";
import openingimg from "../images/morgan-petroski-LsMxdW1zWEQ-unsplash.jpg";
import openingimg1 from "../images/allef-vinicius-iNOgTXeT3OM-unsplash.jpg";
import openingimg2 from "../images/courtney-r-andrews-u5MXF-5y1Ck-unsplash.jpg";

const Homepage = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <div className="homepage-first">
        <AutoplaySlider className="slider" play={true} cancelOnInteraction={false} interval={3000}>
          <div data-src={openingimg} />
          <div data-src={openingimg1} />
          <div data-src={openingimg2} />
        </AutoplaySlider>

        {/* Navbar */}

        <Navbar />

        {/* Opening Section */}

        <div className="homepage-first-heading-text offset-1 col-5">
          <h3>iDance Academy</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/services">
            <button className="learn-more btn-outline-dark p-3">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Short Company Info Section */}

      <div className="homepage-second d-flex flex-row">
        <div>
          <div className="mission container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque blandit varius elit, nec
            dignissim massa elementum quis. Nam turpis nibh, accumsan non nisi
            et, volutpat interdum neque. Proin mollis lorem eu nisl pulvinar,
            non porta dolor sollicitudin. Donec cursus rutrum tortor eu
            imperdiet. Sed cursus ligula venenatis sollicitudin vestibulum. In
            maximus massa purus, sed venenatis arcu varius tempus
          </div>
        </div>
      </div>

      {/* Join Us */}

      <div className="container border-top pt-3">
        <div className="heading-container container mt-5">
          <h2 className="heading-border pb-5 my-3">JOIN US</h2>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-6 join-us img-1"></div>
          <div className="col-sm-12 col-md-4 offset-md-1 join-us aligner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus
          </div>
        </div>

        <div className="row justify-content-around mt-5 reverser">
          <div className="col-sm-12 col-md-4 offset-md-1 join-us aligner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus
          </div>
          <div className="col-sm-12 col-md-6 join-us img-2"></div>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-6 border join-us img-3"></div>
          <div className="col-sm-12 col-md-4 offset-md-1 join-us aligner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus
          </div>
        </div>
      </div>

      {/* Classes Section */}

      <div className="container pb-5">
        <div className="heading-container container mt-5">
          <h2 className="heading-border pb-5 my-3">OUR CLASSES</h2>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-5 p-0 border border-dark mb-5">
            <div className="class-first border"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >BEGINNER'S BALLET</p>
              <button className="btn btn-beginner p-3 align-self-center">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1 p-0 border border-dark mb-5">
            <div className="class-first border"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >YOUTH BALLET</p>
              <button className="btn btn-youth p-3 align-self-center">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-5 p-0 border border-dark mb-5">
            <div className="class-first border"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >MODERN DANCE</p>
              <button className="btn btn-modern p-3 align-self-center">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1 p-0 border border-dark mb-5">
            <div className="class-first border"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >JAZZ</p>
              <button className="btn btn-jazz p-3 align-self-center">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Sign Up Section */}

      <div className="container pb-5">
        <div className="heading-container container mt-5">
          <h2 className="heading-border pb-5 my-3">SIGN UP TODAY!</h2>
        </div>
        <div className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
        <div className="p-5">
          <button className="btn btn-border p-3">Register now!</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
