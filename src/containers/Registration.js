import React from "react";
import Navbar from "../components/Navbar";
import "./App.scss";

const Registration = () => (
  <>
    <Navbar />
    <div className="registration-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfaoKuik8PJIAvgh6y6JCzIrh0pSvpZXqLT8f9JLAnpusSjKg/viewform?embedded=true"
        width="640"
        height="3026"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="RegistrationForm"
      >
        Loading…
      </iframe>
    </div>
  </>
);

export default Registration;
