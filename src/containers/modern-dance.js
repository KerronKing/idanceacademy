import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";
import modernImg from "../images/modern-service-2.jpg";

const ModernDance = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src={modernImg}
          alt="modern dancers"
          loading="lazy"
          importance="low"
        />
        <h3 className="mb-4">Modern</h3>
        <p className="mb-4">
          We offer Modern Dance Classes to everyone from ages 3 and up. Our
          dance curriculum allows for our students to learn and enjoy the
          theory, practical and different techniques used in Modern Dance.
          Register for any of our Modern Dance Classes by simply completing the
          following steps below:
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
            <span>Beginner Modern Dance</span>
            <span>Ages 3 – 8</span>
          </div>
          <p>
            These classes are offered to the little ones from ages 3 to 8 years
            old. Our Modern Dance Classes are always accompanied by fun music
            for our students to dance to. The foundation steps and movements are
            taught at this level. This style of dance is catered for those
            little ones who enjoy doing free movement while dancing.
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>
              "It has been very rewarding to see Ramiya so passionate about
              dance class. She is quite assertive now and I could never imagine
              that she will actually perform in front of others. So thanks to
              you"{" "}
            </i>
            ~ Radika
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Youth Modern Dance</span>
            <span>Ages 9 – 17</span>
          </div>
          <p>
            This is a fun and exhilarating dance class as each class is
            accompanied by fun and contemporary music. Targeted towards anyone
            from ages 9 to 17 years old, our Youth Modern Dance Programme
            follows a syllabus which looks at the different positions, rhythms,
            techniques and flexibility in Modern Dance.
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>
              “I Dance Academy is an AMAZING school for beginners who are
              interested in learning Modern Dance. The founder is very skilled,
              patient, QUALIFIED and helpful. Even through the pandemic, we had
              sessions via ZOOM to keep us active and connected. She is an
              honest and responsible person who you can trust that your kids
              will be SAFE and well taken care of in their sessions.”{" "}
            </i>
            ~ Petra from The Bahamas
          </p>
          <p>
            <i>
              “Amazing dance tutor! Great with the kids and they love her!”{" "}
            </i>
            ~ Johanna Brijmohan
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Adult Modern Dance</span>
            <span>Ages 18 and up</span>
          </div>
          <p>
            Our Adult Modern Classes are for everyone 18 years and up who may
            have dance experience ranging from little to no experience to
            advanced. Our students are exposed to a wide range of music genres
            for each class learning how to apply Modern Dance Steps, movements
            and techniques to different genres of music. Dance improvisation is
            also learned at these classes.
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

export default ModernDance;
