import React from "react";
import Footer from "../components/Footer";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-main-section">
        <div className="d-flex flex-row justify-content-center contact-inner">
          <div className="contact-1">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Visit us at:</h3>
                <span>#142 Coora Road, Siparia</span>
              </div>
              <div className="contact-item">
                <h3>Call us:</h3>
                <span><a href="tel:18687128342">1-868-712-8342</a> / <a href="tel:18683961866">1-868-396-1866</a></span>              </div>
              <div className="contact-item">
                <h3>Email us:</h3>
                <span><a href="mailto:idanceacademy868@gmail.com">idanceacademy868@gmail.com</a></span>
              </div>
            </div>
          </div>
          <form className="contact-2">
            <div class="row">
              <div class="col-md">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-md">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="subject"
                aria-describedby="subject"
                placeholder="Subject"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
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
  );
};

export default Contact;
