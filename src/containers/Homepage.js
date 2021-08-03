import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import Footer from "../components/Footer";

const Homepage = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <div className="homepage-first">
        <AutoplaySlider className="slider" play={true} cancelOnInteraction={false} interval={3000}>
          <div data-src="https://www.dropbox.com/s/ebmzfal317v38er/pooja-chaudhary-q29kexdHODM-unsplash.jpg?raw=1" />
          <div data-src="https://www.dropbox.com/s/8ymfhh6qpgsmr6c/franciszek-augustyniak-82I3FAg4YtU-unsplash.jpg?raw=1" />
          <div data-src="https://www.dropbox.com/s/vpzxbai48v0y073/courtney-r-andrews-u5MXF-5y1Ck-unsplash.jpg?raw=1" />
        </AutoplaySlider>

        {/* Navbar */}

        <Navbar />

        {/* Opening Section */}

        <div className="homepage-first-heading-text offset-1 col-5">
          <h3>iDance Academy</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/services">
            <button className="register-btn p-xs-2 p-md-3">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Short Company Info Section */}

      <div className="homepage-second">
        <div>
          <div className="mission container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum.
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
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
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
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
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
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
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
          <div className="col-sm-12 col-md-5 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >BEGINNER'S BALLET</p>
              <button className="btn btn-beginner p-md-3 p-sm-2 align-self-center">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >YOUTH BALLET</p>
              <button className="btn btn-youth p-md-3 p-sm-2 align-self-center">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-around mt-md-5">
          <div className="col-sm-12 col-md-5 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >MODERN DANCE</p>
              <button className="btn btn-modern p-md-3 p-sm-2 align-self-center">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center" >JAZZ</p>
              <button className="btn btn-jazz p-md-3 p-sm-2 align-self-center">
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
          <button className="register-btn p-3">Register now!</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
