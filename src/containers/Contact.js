import React, { useState } from "react";
import { useHistory } from 'react-router'
import Footer from "../components/Footer";
import "./Contact.scss";

const Contact = () => {
  const history = useHistory()

  const [mail, setMail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setMail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(mail);
    await fetch("https://idance-email-api.herokuapp.com/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mail }),
    })
      .then((res) => res.json())
      .then((res) => {
        const resData = res;

        if (resData.status === "success") {
          alert("Email sent! We'll reach out to you soon.");
        } else {
          alert("An error occurred. Email was not sent.");
        }
      })
      .then(() => {
        setMail({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });

        // navigate("/");
        history.push("/");

      });
  };

  return (
    <>
      <div className="contact">
        <div className="contact-main-section">
          <div className="contact-inner">
            <div className="contact-1">
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Visit us at:</h3>
                  <span>#142 Coora Road, Siparia, T'dad, WI</span>
                </div>
                <div className="contact-item">
                  <h3>Call us:</h3>
                  <span>
                    <a href="tel:18687128342">1-868-712-8342</a> /{" "}
                    <a href="tel:18683961866">1-868-396-1866</a>
                  </span>{" "}
                </div>
                <div className="contact-item">
                  <h3>Email us:</h3>
                  <span>
                    <a href="mailto:idanceacademy868@gmail.com">
                      idanceacademy868@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <form className="contact-2" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="firstName"
                    value={mail.firstName}
                    placeholder="First name"
                  />
                </div>
                <div className="col-md">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="lastName"
                    value={mail.lastName}
                    placeholder="Last name"
                  />
                </div>
              </div>
              <input
                type="email"
                className="form-control"
                onChange={handleChange}
                name="email"
                value={mail.email}
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="subject"
                  value={mail.subject}
                  id="subject"
                  aria-describedby="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="message"
                  value={mail.message}
                  id="message"
                  rows="8"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <input
                type="submit"
                name="submit"
                id="submit-message"
                placeholder="submit"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
