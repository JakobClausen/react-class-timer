import React from "react";
import "./clock.css";

const Clock = (props) => {
  return (
    <p
      style={{ display: props.hide ? "none" : "unset" }}
      className={props.className}
    >
      {props.clock}
    </p>
  );
};

export default Clock;
