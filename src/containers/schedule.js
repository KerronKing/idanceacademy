import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import DateBlock from "../components/DateBlock";
import { firstMonthSchedule } from "../data/first-month-data";
import { secondMonthSchedule } from "../data/second-month-data";
import { thirdMonthSchedule } from "../data/third-month-data";
import { fourthMonthSchedule } from "../data/fourth-month-data";
import "./Schedule.scss";

const Schedule = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);
  const [instrct, setInstrct] = useState(true);

  const handleClick = () => {
    const firstmonth = document.getElementById("firstmonth");
    const secondmonth = document.getElementById("secondmonth");
    const thirdmonth = document.getElementById("thirdmonth");
    const fourthmonth = document.getElementById("fourthmonth");
    const scheduleInstructions = document.getElementById(
      "schedule-instructions"
    );

    firstmonth.onclick = () => {
      setOpenFirst(true);
      setOpenSecond(false);
      setOpenThird(false);
      setOpenFourth(false);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };

    secondmonth.onclick = () => {
      setOpenFirst(false);
      setOpenSecond(true);
      setOpenThird(false);
      setOpenFourth(false);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };

    thirdmonth.onclick = () => {
      setOpenFirst(false);
      setOpenSecond(false);
      setOpenThird(true);
      setOpenFourth(false);
      scheduleInstructions.style.display = "none";
      setInstrct(!instrct);
    };

    fourthmonth.onclick = () => {
      setOpenFirst(false);
      setOpenSecond(false);
      setOpenThird(false);
      setOpenFourth(true);
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
            aria-controls="firstmonth-schedule"
            aria-expanded={openFirst}
            id="firstmonth"
          >
            January
          </Button>
          <Button
            onClick={handleClick}
            aria-controls="secondmonth-schedule"
            aria-expanded={openSecond}
            id="secondmonth"
          >
            February
          </Button>
          <Button
            onClick={handleClick}
            aria-controls="thirdmonth-schedule"
            aria-expanded={openThird}
            id="thirdmonth"
          >
            March
          </Button>
          <Button
            onClick={handleClick}
            aria-controls="fourthmonth-schedule"
            aria-expanded={openFourth}
            id="fourthmonth"
          >
            April
          </Button>
        </div>
        <div className="schedule-content">
          <div id="schedule-instructions">
            <p>
              Select any one of the ‘month’ buttons on the left or top of your
              screen to display our monthly dance schedule. Click the month that
              is currently in view again to see another month’s dance schedule.{" "}
            </p>
            <p>
              All classes for the September - December 2022 Term, will be taught
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
              .
            </p>
          </div>
          <Collapse in={openFirst}>
            <div className="schedule-breakdown" id="firstmonth-schedule">
              {firstMonthSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>

          <Collapse in={openSecond}>
            <div className="schedule-breakdown" id="secondmonth-schedule">
              {secondMonthSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>

          <Collapse in={openThird}>
            <div className="schedule-breakdown" id="thirdmonth-schedule">
              {thirdMonthSchedule.map((item) => (
                <DateBlock
                  day={item.day}
                  times={item.times}
                  classTypes={item.classTypes}
                  key={uuid()}
                />
              ))}
            </div>
          </Collapse>

          <Collapse in={openFourth}>
            <div className="schedule-breakdown" id="fourthmonth-schedule">
              {fourthMonthSchedule.map((item) => (
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
