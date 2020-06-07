import React from "react";

const Date = (props) => {
  console.log(props.date);

  return (
    <div className={props.class}>
      <p>{props.date}</p>
    </div>
  );
};

export default Date;
