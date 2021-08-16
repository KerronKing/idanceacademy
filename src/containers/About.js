import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.scss";

const About = () => {
  return (
    <>
      <Navbar />
      {/* Banner */}

      <div className="about-us-first-section">
        <div className="about-us-banner">
          <h1>About I Dance Academy</h1>
        </div>
      </div>

      {/* Founder Section */}

      <div className="about-us-main-section d-flex">
        <div className="about-1">
          <h2>Our Mission</h2>
          <p>
            To transform our dance students into passionate, confident,
            versatile and disciplined individuals and performers in a dynamic
            environment. We seek to provide both theoretical and practical dance
            education to our students in a safe and creative space.
          </p>
          <h2>History</h2>
          <p>
            Founded in 2018, the <i>I Dance Academy</i> was created by our
            artistic director in Trinidad and Tobago. Her passion, dedication
            and commitment to dance, particularly Ballet, Modern and Jazz has
            motivated her to open this dance school to allow budding dancers in
            addition to persons who are interested in dance to learn to love and
            appreciate dance technique and form. The <i>I Dance Academy</i>{" "}
            allows for a creative space for dancers to blossom into professional
            dancers.
          </p>
        </div>
        <div className="about-2">
          <img
            src="https://drive.google.com/uc?export=view&id=1PaQ3G1gF1rdQBjFr5Zu779v8pn-Baizj"
            alt="children lifting their hands"
            loading="lazy"
            importance="low"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1LfvsBS-etXNI7d9wFI1Z_9vUwVxYOun_"
            loading="lazy"
            importance="low"
            alt="children posing"
          />
          <img
            src="https://drive.google.com/uc?export=view&id=1MCCFYW7gBf4GRitVLe1fbQMC9sphOVOo"
            loading="lazy"
            importance="low"
            alt="children posing"
          />
        </div>
      </div>

      <div className="about-founder">
        <h2>Founder</h2>
        <img
          src="https://drive.google.com/uc?export=view&id=1NyvASjXGZUa3_JI07iiy-P6gwZI4UOQw"
          alt="Camara the Founder"
          loading="lazy"
          importance="low"
        />
        <p>
          <strong>
            <i>Camara F. Johncilla</i>
          </strong>{" "}
          has been involved in dance for the past twenty-nine (29) years in
          Trinidad and Tobago. At the tender age of four (4), she was introduced
          to Ballet and immediately fell in love with this dance style. Having
          completed Ballet examinations with the Royal Academy of Dance and the
          Imperial Society of Teachers of Dancing, she broadened her formal
          dance education by also delving into Modern, Jazz, Ballroom/Latin,
          Character Dancing, Folk Dance amongst many other dance genres. Her
          drive and passion for dance has led her in several shows, dance
          workshops, advertisements and competitions. <br /> <br />
          After completing her secondary school education,{" "}
          <strong>
            <i>Ms. Johncilla</i>
          </strong>{" "}
          continued to dance with the University Dance Society at the University
          of the West Indies whilst she pursued her Bachelor of Science in
          Geology and also a Bachelor of Science in Economics. The completion of
          her Master of Business Administration in Sustainable Energy Management
          allowed{" "}
          <strong>
            <i>Ms. Johncilla</i>
          </strong>{" "}
          to use both her business background and her passion for teaching dance
          to open her dance school, <i>I Dance Academy</i>. Let’s not forget
          too, that our founder’s name literally means ‘teacher’. She often
          makes reference to this as her calling to become a dance pioneer and
          dance teacher.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
