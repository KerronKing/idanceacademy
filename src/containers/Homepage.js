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
        <AutoplaySlider
          className="slider"
          play={true}
          cancelOnInteraction={false}
          interval={3000}
        >
          <div data-src="https://drive.google.com/uc?export=view&id=1cC_rfY4kilPjLJ8_5wkavrWQS_fLmrij" />
          <div data-src="https://www.dropbox.com/s/8ymfhh6qpgsmr6c/franciszek-augustyniak-82I3FAg4YtU-unsplash.jpg?raw=1" />
          <div data-src="https://www.dropbox.com/s/vpzxbai48v0y073/courtney-r-andrews-u5MXF-5y1Ck-unsplash.jpg?raw=1" />
        </AutoplaySlider>

        {/* Navbar */}

        <Navbar />

        {/* Opening Section */}

        <div className="homepage-first-heading-text offset-1 col-5">
          <h3>I Dance Academy</h3>

          <p className="enroll">Enroll in our September 2021 Dance Classes</p>
          <p className="dance-breakdown">
            Ballet &#8226; Modern &#8226; Jazz &#8226; Dancercise
          </p>
          <Link to="/services">
            <button className="register-btn p-xs-2 p-md-3">Learn more</button>
          </Link>
        </div>
      </div>

      {/* Short Company Info Section */}

      <div className="homepage-second">
        <div>
          <div className="mission container">
            Founded in 2018, the I Dance Academy was created by our artistic
            director in Trinidad and Tobago. Her passion, dedication and
            commitment to dance, particularly Ballet, Modern and Jazz has
            motivated her to open this dance school to allow budding dancers in
            addition to persons who are interested in dance to love and
            appreciate dance technique and form. The I Dance Academy allows for
            a creative space for dancers to blossom into professional dancers.
          </div>
        </div>
      </div>

      {/* Join Us */}

      <div className="container border-top pt-3">
        <div className="heading-container container mt-5">
          <h2 className="heading-border pb-5 my-3 text-center">JOIN US</h2>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-6 join-us img-1"></div>
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
            <h4>Ballet</h4>
            <br />
            <br />
            <p>
              A classical yet dramatic style of dancing which normally portrays
              a story. This artistic style of dance is performed to music with
              the use of extremely precise, controlled, formalized movements and
              steps.
            </p>
          </div>
        </div>

        <div className="row justify-content-around mt-5 reverser">
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
            <h4>Modern</h4>
            <br />
            <br />
            <p>
              Modern Dance is often described as ‘a rebellious form of Ballet’
              due to its highly expressive style and movement, unlike Ballet
              which is a more structured dance technique. Modern Dance can often
              be referred to as Lyrical or Contemporary Dance.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 join-us img-2"></div>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-6 border join-us img-3"></div>
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
            <h4>Jazz</h4>
            <br />
            <br />
            <p>
              A combination of Ballet and Modern dance techniques create this
              style of dance. Jazz Dance includes strength, flexibility and
              conditioning techniques with kicks, leaps and turns combination
              exercises. This dance genre is accompanied by Jazz Music.
            </p>
          </div>
        </div>

        <div className="row justify-content-around mt-5 reverser">
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
            <h4>Dancercise</h4>
            <br />
            <br />
            <p>
              A fun and exhilarating combination of aerobics and dance!
              Dancercise keeps you fit and healthy whilst learning the movements
              and steps of various dance genres all at the same time. These
              classes are designed for those who would like to learn to dance in
              a more relaxed setting. Soca, Afrobeats, Modern, Jazz and Latin
              dance movements and step combinations are all used in Dancercise
              Routines.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 join-us img-2"></div>
        </div>
      </div>

      {/* Classes Section */}

      <div className="container pb-5">
        <div className="heading-container container mt-5">
          <h2 className="heading-border pb-5 my-3 text-center">OUR CLASSES</h2>
        </div>

        <div className="row justify-content-around mt-5">
          <div className="col-sm-12 col-md-5 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center">BEGINNERS' BALLET</p>
              <Link to="/beginner-ballet" className="align-self-center">
                <button className="btn btn-beginner p-md-3 p-sm-2 align-self-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center">YOUTH BALLET</p>
              <Link to="/youth-ballet" className="align-self-center">
                <button className="btn btn-youth p-md-3 p-sm-2 align-self-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-around mt-md-5">
          <div className="col-sm-12 col-md-5 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center">MODERN DANCE</p>
              <Link to="/modern-dance" className="align-self-center">
                <button className="btn btn-modern p-md-3 p-sm-2">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 offset-md-1 p-0 mb-5 class-div">
            <div className="class-first"></div>
            <div className="class-second d-flex flex-row justify-content-around">
              <p className="text-light align-self-center">JAZZ</p>
              <Link to="/jazz" className="align-self-center">
                <button className="btn btn-jazz p-md-3 p-sm-2 align-self-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Sign Up Section */}

      <div className="container pb-5">
        <div className="heading-container container mt-5">
          <h2 className="heading-border pb-5 my-3 text-center">
            SIGN UP TODAY!
          </h2>
        </div>
        <div className="p-5">
          Check out our dance schedules and sign up for your favourite dance
          classes with us today! We cannot wait for you to be a part of our
          dance family. Join us!
        </div>
        <div className="p-5">
          <button className="register-btn p-3">Register now!</button>
        </div>
      </div>

      <iframe
        src="https://embed.waze.com/iframe?zoom=16&lat=10.123833&lon=-61.502514&ct=livemap"
        width="600"
        height="450"
        title="I Dance Location"
      ></iframe>

      <Footer />
    </>
  );
};

export default Homepage;
