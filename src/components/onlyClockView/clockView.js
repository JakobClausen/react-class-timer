import React from "react";
import "./clockView.css";

const ClockView = (props) => {
  return (
    <div className="clock__view">
      <h1 className="clock__view__clock">{props.clock}</h1>
    </div>
  );
};

export default ClockView;
