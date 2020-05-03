import React from "react";
import "./ScheduleList.css";
import ClassItem from "./../ClassItem/ClassItem";

const ScheduleList = (props) => {
  return (
    <div className="list">
      <div className="list__container">
        {props.data.map((item, i) => {
          if (item[1] !== "Class end") {
            return (
              <ClassItem
                key={i}
                coach={item[3]}
                timeString={item[2]}
                timeObject={item[0]}
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
