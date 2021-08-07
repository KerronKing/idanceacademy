import React, { useState } from "react";
import uuid from "react-uuid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import DateBlock from "../components/DateBlock";
import {
  septemberSchedule,
  octoberSchedule,
  novemberSchedule,
  decemberSchedule,
} from "../data/dancetimes";
import "./Schedule.scss";

const Schedule = () => {
  const [openSept, setOpenSept] = useState(false);
  const [openOct, setOpenOct] = useState(false);
  const [openNov, setOpenNov] = useState(false);
  const [openDec, setOpenDec] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="schedule-section">
        <div className="schedule-links">
          <Button
            onClick={() => setOpenSept(!openSept)}
            aria-controls="september-schedule"
            aria-expanded={openSept}
          >
            September
          </Button>
          <Button
            onClick={() => setOpenOct(!openOct)}
            aria-controls="october-schedule"
            aria-expanded={openOct}
          >
            October
          </Button>
          <Button
            onClick={() => setOpenNov(!openNov)}
            aria-controls="november-schedule"
            aria-expanded={openNov}
          >
            November
          </Button>
          <Button
            onClick={() => setOpenDec(!openDec)}
            aria-controls="december-schedule"
            aria-expanded={openDec}
          >
            December
          </Button>
        </div>
        <div className="schedule-content">

          <Collapse in={openSept}>
            <div
              className="schedule-breakdown"
              id="september-schedule"
            >
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
              <p>test-2</p>
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
              <p>test-3</p>
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
              <p>test-4</p>
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
    </div>
  );
};

export default Schedule;
