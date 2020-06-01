import React from "react";
import ScheduleList from "../ScheduleList/ScheduleList";
import Content from "../Content/Content";
import "./crossfitFinal.css";

const CrossfitFinal = (props) => {
  return (
    <div className="crossfitFinal">
      <ScheduleList todaysClasses={props.todaysClasses} clock={props.clock} />
      <Content todaysClasses={props.todaysClasses} clock={props.clock} />
    </div>
  );
};

export default CrossfitFinal;
