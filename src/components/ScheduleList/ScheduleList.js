import React from "react";
import "./ScheduleList.css";
import ClassItem from "./../ClassItem/ClassItem";

const ScheduleList = (props) => {
  console.log(props.data);
  return (
    <div className="list">
      <div className="list__timeline">
        <div className="list__timeline__overlay-top"></div>
        <div className="list__timeline__line"></div>
        <div className="list__timeline__overlay-bottom"></div>
      </div>
      <div className="list__container">
        {props.data.map((item, i) => {
          if (item[1] !== "Class end") {
            return (
              <ClassItem
                key={i}
                coach={item[3]}
                timeString={item[2]}
                timeObject={item[5]}
                classType={item[4]}
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
