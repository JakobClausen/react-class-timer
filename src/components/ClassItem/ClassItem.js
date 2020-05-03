import React, { useState, useEffect } from "react";
import "./classitem.css";
import moment from "moment";

const ClassItem = (props) => {
  const [classedPassed, setClassedPassed] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (moment(props.timeObject).format("HH:mm") < props.clock) {
        setClassedPassed("class__passed");
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={`class ${classedPassed}`}>
      <p className="class__time">{props.timeString}</p>
      <p className="class__coach">{props.coach}</p>
    </div>
  );
};

export default ClassItem;
