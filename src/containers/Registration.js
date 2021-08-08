import React from "react";
import Navbar from "../components/Navbar";
import "./App.scss";

const Registration = () => (
  <div>
    <Navbar />
    <div className="registration-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc9_c8YzZJAnGGsXe2vaocOVupO-5j-c-nOpI1_J_t7FzSO2w/viewform?embedded=true"
        width="640"
        height="3026"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Registration Form"
      >
        Loading…
      </iframe>
    </div>
  </div>
);

export default Registration;
