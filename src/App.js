import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
import { Schedule } from "./data/Schedule";
import Logo from "./components/Logo/Logo";
import CrossfitFinal from "./components/crossfitFinal/crossfitFinal";
import ClockView from "./components/onlyClockView/clockView";

import { Router } from "@reach/router";

function App() {
  const [todaysClasses, setTodaysClasses] = useState(Schedule[moment().day()]);
  const [clock, setClock] = useState(moment().format("HH:mm"));
  const [date, setDate] = useState(moment().format("dddd MMMM Do"));

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(moment().format("HH:mm"));
      setTodaysClasses(Schedule[moment().day()]);
      setDate(moment().format("dddd MMMM Do"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Logo />
      <Router>
        <CrossfitFinal path="/" todaysClasses={todaysClasses} clock={clock} />
        <ClockView path="/clock" clock={clock} date={date} />
      </Router>
    </div>
  );
}

export default App;
