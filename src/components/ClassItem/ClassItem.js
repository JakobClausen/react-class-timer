import React, { useState, useEffect } from "react";
import "./classitem.css";
import moment from "moment";

const ClassItem = (props) => {
  const [classedPassed, setClassedPassed] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (moment(props.timeObject).format("HH:mm") < props.clock) {
        setClassedPassed("class__passed");
      } else {
        setClassedPassed(null);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={`class ${classedPassed}`}>
      <div className="class__dot"></div>
      <p className="class__info">
        {props.classType} - {props.timeString}
      </p>
    </div>
  );
};

export default ClassItem;
