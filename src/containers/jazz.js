import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";
import jazzImg from "../images/jazz-service-2.jpeg";

const Jazz = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src={jazzImg}
          alt="interpretive dancer"
          loading="lazy"
          importance="low"
        />
        <h3 className="mb-4">Jazz</h3>
        <p className="mb-4">
          Our Jazz Dance Classes are offered to anyone from ages 3 and up. The
          Jazz Dance Curriculum allows for our students to learn and enjoy the
          theory and practical aspects of Jazz Dance. Register for any of our
          Jazz Dance Classes by simply completing the following steps below:
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

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Beginner Jazz</span>
            <span>Ages 3 – 8</span>
          </div>
          <p>
            Come and join us as we learn the basic movements and steps of Jazz
            Dance. Our little ones ranging from ages 3 to 8 years old enjoy the
            fun Jazz Music that accompanies these classes.
          </p>
          <h4 className="mb-4">Testimonial</h4>
          <p>
            <i>“Amazing dance tutor! Great with the kids and they love her!”</i>{" "}
            ~ Johanna Brijmohan
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Youth Jazz</span>
            <span>Ages 9 – 17</span>
          </div>
          <p>
            These classes teach the fundamental positions of the feet in Jazz
            Dance, Jazz arm positions amongst various Jazz movements to upbeat
            and up-tempo Jazz Music. Anyone who falls within the age range of 9
            to 17 years are invited to join this class!
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>“Great workout!!!!” </i>~ Anonymous
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Adult Jazz</span>
            <span>Ages 18 and up</span>
          </div>
          <p>
            If you love to dance to smooth and upbeat Jazz Music, then this
            Adult Jazz Class is definitely for you! Our students learn the
            fundamental positions of feet and arms, movements and routines to
            Jazz Music. This class is catered especially for those who are 18
            years and older.
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>
              “Talented and creative dance instructor who understands her
              students and pushes them to their full potential. Living abroad
              was no obstacle as classes were offered online and personal
              attention was given. I would highly recommend I Dance Academy for
              anyone no matter their age, location and dance experience. Dancing
              would become your second nature when trained at this school.”{" "}
            </i>
            ~ Makeda from The United Kingdom
          </p>
        </div>

        <Link to="/registration/">
          <button className="register-btn p-xs-2 p-md-3">Register</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Jazz;
