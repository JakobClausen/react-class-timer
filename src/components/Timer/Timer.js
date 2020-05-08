import React, { useState, useEffect } from "react";
import moment from "moment";
import LightBar from "./../LightBar/LightBar";
import Clock from "./../Clock/Clock";
import "./timer.css";

const Timer = (props) => {
  const [timer, setTimer] = useState("00:00");
  const [text, setText] = useState("Fysiken Crossfit");
  const [classMode, setClassMode] = useState(true);

  useEffect(() => {
    // If there is any classes left today
    console.log(props.futureClasses);
    try {
      if (
        moment(props.futureClasses[props.futureClasses.length - 1][0]).format(
          "HH:mm"
        ) > props.clock ||
        props.futureClasses == 0
      ) {
        let filteredClasses = props.futureClasses.filter((x) => {
          return moment(x[0]).format("HH:mm") > props.clock;
        });

        // Countdown timer
        let distance =
          moment(filteredClasses[0][0]).format("x") - moment().format("x");

        // Hour
        let scheduleHours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        // Minutes
        let scheduleMinutes =
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + 1;

        // Makes double digits
        if (scheduleHours < 10) {
          scheduleHours = "0" + scheduleHours;
        }
        if (scheduleMinutes < 10) {
          scheduleMinutes = "0" + scheduleMinutes;
        }

        // DOM manipulation
        if (filteredClasses[0][1] === "Class" && scheduleHours === "00") {
          setText("Next class starts in:");
          setTimer(`${scheduleMinutes} min`);
          setClassMode(false);
        } else if (filteredClasses[0][1] === "Class") {
          setText("Next class starts:");
          setTimer(moment(filteredClasses[0][0]).format("HH:mm"));
          setClassMode(false);
        } else if (filteredClasses[0][1] === "Class end") {
          setText("Crossfit class");
          setTimer(`${scheduleMinutes} min`);
          setClassMode(true);
        }
      } else {
        setTimer(null);
        setText("No more classes today");
        setClassMode(false);
      }
    } catch (error) {
      setTimer(null);
      setText("No more classes today");
      setClassMode(false);
    }
  }, [props.futureClasses, props.clock]);

  return (
    <>
      <div className="clock">
        <p
          style={{ display: classMode ? "unset" : "none" }}
          className="small__clock"
        >
          {props.clock}
        </p>
      </div>
      <LightBar color={classMode} />
      <Clock className="content__clock" hide={classMode} clock={props.clock} />
      <div className="timer">
        <h1
          style={{ fontSize: classMode ? "4vw" : "50px" }}
          className="timer__text"
        >
          {text}
        </h1>
        <h1
          style={{ fontSize: classMode ? "14vw" : "50px" }}
          className="timer__time"
        >
          {timer}
        </h1>
      </div>
    </>
  );
};

export default Timer;
