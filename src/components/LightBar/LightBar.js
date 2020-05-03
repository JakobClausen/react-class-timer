import React from "react";
import "./lightbar.css";

const LightBar = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color ? "green" : "white" }}
      className="light__bar"
    ></div>
  );
};

export default LightBar;
