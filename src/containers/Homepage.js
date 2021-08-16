import React from "react";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageDiv from "../components/ImageDiv";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Homepage.scss";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <div data-src="https://www.dropbox.com/s/0kyyvlrepi421ps/idance1.jpeg?raw=1" />
          <div data-src="https://www.dropbox.com/s/p3hn8lwnq7r5yfw/idance-2.jpeg?raw=1" />
          <div data-src="https://www.dropbox.com/s/8sq7z3soyubjmse/idance-3.jpeg?raw=1" />
        </AutoplaySlider>

        {/* Navbar */}

        <Navbar />

        {/* Opening Section */}

        <div className="homepage-first-heading-text">
          <h3>I Dance Academy</h3>

          <p className="enroll">
            Enroll in our September - December 2021 Dance Classes
          </p>
          <p className="dance-breakdown">
            Ballet &#8226; Dancercise &#8226; Jazz &#8226; Modern
          </p>
          <Link to="/services">
            <button className="register-btn p-xs-2 p-md-3">Learn more</button>
          </Link>
        </div>
      </div>

      {/* Short Company Info Section */}

      <ImageDiv
        source="https://drive.google.com/uc?export=view&id=16YcabxtLeBuOskSUFiWtzNSkfgOdRFoN"
        classType="homepage-second"
      >
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
      </ImageDiv>

      {/* Join Us */}

      <div className="container border-top pt-3 join-us-section">
        <div className="container mt-5 w-50">
          <h2 className="heading-border pb-3 my-3 text-center">JOIN US</h2>
        </div>

        <div className="row justify-content-around mt-5">
          <ImageDiv
            source="https://drive.google.com/uc?export=view&id=1r-azzAOFGDJ7frsHIjThJ6njdoejnRyr"
            classType="col-sm-12 col-md-6 join-us img-1"
          ></ImageDiv>
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
            <h4>Ballet</h4>
            <br />
            <br />
            <p>
              A classical yet dramatic style of dance which normally portrays a
              story. This artistic style of dance is performed to Classical
              music with the use of extremely precise, controlled, formalized
              movements and steps.
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
              be referred to as Lyrical or Contemporary Dance and is normally
              accompanied by lyrical and/or percussive music.
            </p>
          </div>
          <ImageDiv
            source="https://drive.google.com/uc?export=view&id=1Er74RLKsvlMbM_qlBr4392ohqLoNwyiE"
            classType="col-sm-12 col-md-6 join-us img-1"
          ></ImageDiv>
        </div>

        <div className="row justify-content-around mt-5">
          <ImageDiv
            source="https://www.dropbox.com/s/wzc0gjwluknwyem/samantha-weisburg-Vgj9bUwaqT0-unsplash.jpg?raw=1"
            classType="col-sm-12 col-md-6 border join-us img-1"
          ></ImageDiv>
          <div className="col-sm-12 col-md-4 offset-md-1 join-us-text aligner">
            <h4>Jazz</h4>
            <br />
            <br />
            <p>
              A combination of Ballet and Modern dance techniques create this
              style of dance. Jazz Dance includes strength, flexibility and
              conditioning techniques with kicks, leaps and turn combination
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
          <ImageDiv
            source="https://drive.google.com/uc?export=view&id=1s6uZ2jMH3EFLn3QVnh-zwav6lBI-BBHl"
            classType="col-sm-12 col-md-6 join-us img-1"
          ></ImageDiv>
        </div>
      </div>

      {/* Classes Section */}

      <div className="pb-5">
        <div className="heading-container container">
          <h2 className="heading-border pb-3 my-3 text-center">OUR CLASSES</h2>
        </div>

        <div className="mt-5 our-classes">
          <div className="col-md-5 p-0 mb-5 class-div">
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1dDGRTG5Zo7XcHeCyN9t7_-2CHFMM0ScU"
              classType="class-first"
            ></ImageDiv>
            <div className="class-second">
              <div className="d-flex flex-column justify-content-center">
                <p className="text-light align-self-center">
                  <strong>BALLET</strong>
                </p>
                <p className="text-light">
                  Beginner Ballet: Ages 3 – 7 <br />
                  Youth Ballet: Ages 8 – 17 <br />
                  Adult Ballet: Ages 18 and up
                </p>
              </div>

              <Link to="/ballet/" className="align-self-center">
                <button className="btn register-btn p-md-3 p-sm-2 align-self-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-5 offset-md-1 p-0 mb-5 class-div">
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1XZC-9QIho8UkuPEJIFcoKykLHaYOSiGd"
              classType="class-first"
            ></ImageDiv>
            <div className="class-second">
              <div className="d-flex flex-column justify-content-center">
                <p className="text-light align-self-center">
                  <strong>DANCERCISE</strong>
                </p>
                <p className="text-light">Ages 16 and up</p>
              </div>
              <Link to="/dancercise/" className="align-self-center">
                <button className="btn register-btn p-md-3 p-sm-2 align-self-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 our-classes mt-md-5">
          <div className="col-md-5 p-0 mb-5 class-div">
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1ARPcvRsmXc4C_LYnF3WhCPHsb2-wiD6a"
              classType="class-first"
            ></ImageDiv>
            <div className="class-second">
              <div className="d-flex flex-column justify-content-center">
                <p className="text-light align-self-center">
                  <strong>Modern Dance</strong>
                </p>
                <p className="text-light">
                  Beginner Modern: Ages 3 – 8 <br />
                  Youth Modern: Ages 9 – 17 <br />
                  Adult Modern: Ages 18 and up
                </p>
              </div>

              <Link to="/modern-dance/" className="align-self-center">
                <button className="btn register-btn p-md-3 p-sm-2 align-self-center">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-5 offset-md-1 p-0 mb-5 class-div">
            <ImageDiv
              source="https://drive.google.com/uc?export=view&id=1iNMQf8gJzPFFbKheOLtsDdNtYq6Yu_a5"
              classType="class-first"
            ></ImageDiv>
            <div className="class-second">
              <div className="d-flex flex-column justify-content-center">
                <p className="text-light align-self-center">
                  <strong>Jazz</strong>
                </p>
                <p className="text-light">
                  Beginner Jazz: Ages 3 – 8 <br />
                  Youth Jazz: Ages 9 – 17 <br />
                  Adult Jazz: Ages 18 and up
                </p>
              </div>
              <Link to="/jazz/" className="align-self-center">
                <button className="btn register-btn p-md-3 p-sm-2 align-self-center">
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
          <h2 className="heading-border pb-3 my-3 text-center">
            SIGN UP TODAY!
          </h2>
        </div>
        <div className="p-5">
          Check out our dance schedules and sign up for your favourite dance
          classes with us today! We cannot wait for you to be a part of our
          dance family. Join us!
        </div>
        <Link to="/registration/" className="align-self-center">
          <button className="btn register-btn p-md-3 p-sm-2 align-self-center">
            SIGN UP
          </button>
        </Link>
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
