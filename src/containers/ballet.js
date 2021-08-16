import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";

const Ballet = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img
          src="https://drive.google.com/uc?export=view&id=1ZmNCUzDzgtBnJc3KU6so1gN1eDIL1x0U"
          alt="ballet dancer"
          loading="lazy"
          importance="low"
        />
        <h3 className="mb-4">Ballet</h3>
        <p className="mb-4">
          We offer Classical Ballet to everyone from ages 3 and up. Our dance
          curriculum allows for our ballerinas to learn and enjoy both the
          theory and practical aspects of Ballet in a safe and creative space.
          Register for any of our Classical Ballet Classes by simply completing
          the following steps below:
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
            <span>Beginner Ballet</span>
            <span>Ages 3 – 7</span>
          </div>
          <p>
            Our Beginner Ballet Classes are targeted towards children ages 3 to
            7 years old. This level of Ballet focuses on movements, physicality
            and creativity for children. Classical Ballet is an excellent
            foundational dance for your child.
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>
              “I have known Cams since we were 5 years old and I have witnessed
              her passion and commitment to dance throughout the years. She has
              honed and perfected her craft. Her love for dance truly comes to
              life on stage as she completely immerses herself in her dance
              pieces and as a recipient of her performances, you can feel
              nothing short of exhilaration. It was only inevitable that I
              enroll my niece in the Beginner Ballet Class. My niece loves
              ballet as she practices her routines everyday and wants to become
              a Ballet Teacher like her Aunty Camara. I Dance Academy is
              definitely on the cusp of greatness.”{" "}
            </i>
            ~ Telice Maison
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Youth Ballet</span>
            <span>Ages 8 – 17</span>
          </div>
          <p>
            Targeted towards persons ranging from the ages of 8 to 17 years old,
            our Youth Ballet Classes also offers a fun-filled dance environment
            which allows for our students to become disciplined and strong
            dancers.
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>
              “Considering my age, I was not sure if there was any dance group
              who would accommodate adult classes. I joined I Dance Academy
              since they catered for a wide range of age groups. My love for
              dance has been rekindled since joining the I Dance Academy. They
              have an amazing dance instructor who is very patient,
              knowledgeable and friendly.”{" "}
            </i>
            ~ Cadija
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Adult Ballet</span>
            <span>Ages 18 and up</span>
          </div>
          <p>
            This Class is perfect for those persons 18 years and up who has a
            passion for Ballet with little to no dance experience. Our Adult
            Ballet Class emphasizes on stretching exercises, barre work, centre
            work and posture.
          </p>
          <h4>Testimonial</h4>
          <p>
            <i>
              “As a mature person, I was looking for a Ballet Class that would
              help me to maintain my flexibility, hence, I decided to join the
              Adult Ballet Class at the I Dance Academy. I was made to feel
              welcomed and be a part of this dance family.”{" "}
            </i>
            ~ Bernadine
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

export default Ballet;
