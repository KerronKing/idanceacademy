import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";
import danceImg from "../images/dance-service-2.jpeg";

const Dancercise = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src={danceImg}
          alt="dancer"
          loading="lazy"
          importance="low"
          className="dancercise-2"
        />
        <h3 className="mb-4">Dancercise</h3>
        <p className="mb-4">
          Looking for a great workout whilst having a blast? Our Dancercise
          Class is the ideal workout routine for you! These classes expose you
          to a wide range of dances including Soca, Afrobeats, Modern, Jazz and
          Latin. You would be burning calories and having fun all at the same
          time! Anyone who is 16 years and up can join our invigorating
          Dancercise Classes by simply following the guidelines below:
        </p>
        <p>1. Click the ‘Register’ Button at the bottom of this page.</p>
        <br />
        <p>
          2. Fill out our registration form. Click the ‘Submit’ Button when you
          have completed the registration form.{" "}
        </p>
        <br />
        <p>
          3. You would receive a confirmation e-mail which would give you our
          bank information for you to make your payments.{" "}
        </p>
        <br />
        <p>
          4. Once your payment is completed and confirmed, a representative from
          the school would contact you.
        </p>
        <br />
        <h4>Testimonial</h4>
        <p>
          <i>
            "Your Dancercise Sessions are EVERYTHING!!!! I’m always guaranteed to
            get a great sweat while learning new dance routines! Did I mention
            how much fitter I am now? Thank you I Dance Academy!"{" "}
          </i>
          ~ Saleem
        </p>

        <Link to="/registration/">
          <button className="register-btn p-xs-2 p-md-3">Register</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Dancercise;
