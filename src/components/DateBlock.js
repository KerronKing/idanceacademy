import React from "react";
import uuid from "react-uuid";
import "../containers/Schedule.scss";

const DateBlock = ({ day, times, classTypes }) => {
  return (
    <>
      <div className="schedule-info">
        <button className="btn btn-outline-secondary schedule-btn-sizer">{day}</button>
        <div className="border-bottom border-secondary d-flex justify-content-around schedule-times-sizer">
          <div className="d-flex flex-column">
            {classTypes.map((type) => (
              <p key={uuid()}>{type}</p>
            ))}
          </div>
          <div className="d-flex flex-column">
            {times.map((time) => (
              <p key={uuid()}>{time}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateBlock;
