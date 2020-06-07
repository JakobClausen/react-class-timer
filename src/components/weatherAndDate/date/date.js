import React from "react";

const Date = (props) => {
  return (
    <div className={props.class}>
      <p>{props.date}</p>
    </div>
  );
};

export default Date;
