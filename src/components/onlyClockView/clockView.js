import React from "react";
import "./clockView.css";
import Date from "./../weatherAndDate/date/date";
import Weather from "./../weatherAndDate/weather/weather";

const ClockView = (props) => {
  return (
    <div className="clock__view">
      <h1 className="clock__view__clock">{props.clock}</h1>
      <div className="clock__view__date__weather">
        <Date class="clock__view__date" date={props.date} />
        <Weather class="clock__view__weather" />
      </div>
    </div>
  );
};

export default ClockView;
