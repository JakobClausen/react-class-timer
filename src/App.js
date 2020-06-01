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

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(moment().format("HH:mm"));
      setTodaysClasses(Schedule[moment().day()]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  document.title = "Class-timer";

  return (
    <div className="App">
      <Logo />
      <Router>
        <CrossfitFinal path="/" todaysClasses={todaysClasses} clock={clock} />
        <ClockView path="/clock" clock={clock} />
      </Router>
    </div>
  );
}

export default App;
