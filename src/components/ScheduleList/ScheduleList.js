import React from "react";
import "./ScheduleList.css";
import ClassItem from "./../ClassItem/ClassItem";

const ScheduleList = (props) => {
  return (
    <div className="list">
      <div className="list__timeline">
        <div className="list__timeline__overlay-top"></div>
        <div className="list__timeline__line"></div>
        <div className="list__timeline__overlay-bottom"></div>
      </div>
      <div className="list__container">
        {props.todaysClasses.map((item, i) => {
          if (item[1] !== "Class end") {
            return (
              <ClassItem
                key={i}
                timeString={item[2]}
                timeObject={item[4]}
                classType={item[3]}
                clock={props.clock}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};

export default ScheduleList;
