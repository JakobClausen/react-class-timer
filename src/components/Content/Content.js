import React from "react";
import "./content.css";
import Timer from "./../Timer/Timer";

const Content = (props) => {
  return (
    <div className="content">
      <div className="content__container">
        <div>
          <Timer futureClasses={props.todaysClasses} clock={props.clock} />
        </div>
      </div>
    </div>
  );
};

export default Content;
