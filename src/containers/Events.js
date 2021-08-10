import React from "react";
import Navbar from "../components/Navbar";
import "./Events.scss";

const Events = () => (
  <>
    <div className="events">
      <Navbar />

      <div className="events-main-section">
        <div className="upcoming-section">
          <div className="upcoming-first"></div>
          <div className="upcoming-second d-flex align-items-center justify-content-center">
            <p>No upcoming events</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Events;
