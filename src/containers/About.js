import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.scss";

const About = () => (
  <>
    <Navbar />

    {/* Banner */}

    <div className="about-us-first-section">
      <div className="homepage-link">
        <Link to="/">&lt;&lt; Back to Homepage</Link>
      </div>

      <div className="about-us-banner">
        <h1>About I Dance Academy</h1>
      </div>
    </div>

    {/* Founder Section */}

    <div className="about-us-main-section d-flex">
      <div className="about-1">
        <h2>Our Mission</h2>
        <p>
          To transform our dance students into passionate, confident, versatile
          and disciplined individuals and performers in a dynamic environment.
          We seek to provide both theoretical and practical dance education to
          our students in a safe space.
        </p>
        <h2>History</h2>
        <p>
          Founded in 2018, the I Dance Academy was created by our artistic
          director in Trinidad and Tobago. Her passion, dedication and
          commitment to dance, particularly Ballet, Modern and Jazz has
          motivated her to open this dance school to allow budding dancers in
          addition to persons who are interested in dance to love and appreciate
          dance technique and form. The I Dance Academy allows for a creative
          space for dancers to blossom into professional dancers.
        </p>
      </div>
      <div className="about-2">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>

    <div className="about-founder">
      <h2>Founder</h2>
      <img src="" alt="" />
      <p>
        <strong>Camara F. Johncilla</strong> has been involved in dance for twenty-nine (29)
        years. At the tender age of four (4), she was introduced to Ballet and
        immediately fell in love with this dance style. Having completed Ballet
        examinations with the Royal Academy of Dance and the Imperial Society of
        Teachers of Dancing, she broadened her formal dance education by also
        delving into Modern, Jazz, Ballroom/Latin, Character Dancing, Folk Dance
        amongst many other dance genres. Her drive and passion for dance has led
        her in several shows, dance workshops, advertisements and competitions.{" "}
        <br /> <br />
        <strong>Ms. Johncilla</strong> continued to dance with her University Dance Society at
        the University of the West Indies whilst she pursued her Bachelor of
        Science in Geology and also a Bachelor of Science in Economics. After
        the completion of her Master of Business Administration in Sustainable
        Energy Management, <strong>Camara F Johncilla</strong> decided to use her business
        background and her passion for teaching dance to open her dance school,
        I Dance Academy. Let’s not forget too that our founder’s name literally
        means ‘teacher’. She often makes reference to this as her calling to
        become a dance pioneer and dance teacher.
      </p>
    </div>

    <Footer />
  </>
);

export default About;
