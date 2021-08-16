import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import DateBlock from "../components/DateBlock";
import { septemberSchedule } from "../data/sept-data";
import { octoberSchedule } from "../data/oct-data";
import { novemberSchedule } from "../data/nov-data";
import { decemberSchedule } from "../data/dec-data";
import "./Schedule.scss";

const Schedule = () => {
  const [openSept, setOpenSept] = useState(false);
  const [openOct, setOpenOct] = useState(false);
  const [openNov, setOpenNov] = useState(false);
  const [openDec, setOpenDec] = useState(false);
  const [instrct, setInstrct] = useState(true);

  const handleClick = () => {
    const september = document.getElementById("september");
    const october = document.getElementById("october");
    const november = document.getElementById("november");
    const december = document.getElementById("december");
    const scheduleInstructions = document.getElementById(
      "schedule-instructions"
    );

    september.onclick = () => {
      setOpenSept(true);
      setOpenOct(false);
      setOpenNov(false);
      setOpenDec(false);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };

    october.onclick = () => {
      setOpenSept(false);
      setOpenOct(true);
      setOpenNov(false);
      setOpenDec(false);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };

    november.onclick = () => {
      setOpenSept(false);
      setOpenOct(false);
      setOpenNov(true);
      setOpenDec(false);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };

    december.onclick = () => {
      setOpenSept(false);
      setOpenOct(false);
      setOpenNov(false);
      setOpenDec(true);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };
  };

  useEffect(() => {
    handleClick();
  });

  return (
    <>
      <Navbar />
      <div className="schedule-section">
        <div className="schedule-links">
          <Button
            onClick={handleClick}
            aria-controls="september-schedule"
            aria-expanded={openSept}
            id="september"
          >
            September
          </Button>
          <Button
            onClick={handleClick}
            aria-controls="october-schedule"
            aria-expanded={openOct}
            id="october"
          >
            October
          </Button>
          <Button
            onClick={handleClick}
            aria-controls="november-schedule"
            aria-expanded={openNov}
            id="november"
          >
            November
          </Button>
          <Button
            onClick={handleClick}
            aria-controls="december-schedule"
            aria-expanded={openDec}
            id="december"
          >
            December
          </Button>
        </div>
        <div className="schedule-content">
          <div id="schedule-instructions">
            <p className="my-5">
              Select any one of the ‘month’ buttons on the left or top of your
              screen to display our monthly dance schedule. Click the month that
              is currently in view again to see another month’s dance schedule.{" "}
            </p>
            <p>
              All classes for the September - December 2021 Term, will be taught
              via{" "}
              <a className="zoom-link" href="https://zoom.us/">
                ZOOM
              </a>{" "}
            </p>
            <p>
              Should you require alternative arrangements, feel free to{" "}
              <Link to="/contact" className="zoom-link">
                contact us
              </Link>
            </p>
          </div>
          <Collapse in={openSept}>
            <div className="schedule-breakdown" id="september-schedule">
              {septemberSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>

          <Collapse in={openOct}>
            <div className="schedule-breakdown" id="october-schedule">
              {octoberSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>

          <Collapse in={openNov}>
            <div className="schedule-breakdown" id="november-schedule">
              {novemberSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>

          <Collapse in={openDec}>
            <div className="schedule-breakdown" id="december-schedule">
              {decemberSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
