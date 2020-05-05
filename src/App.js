import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
import { Schedule } from "./data/Schedule";
import Logo from "./components/Logo/Logo";
import ScheduleList from "./components/ScheduleList/ScheduleList";
import Content from "./components/Content/Content";

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
      <ScheduleList data={todaysClasses} clock={clock} />
      <Content data={todaysClasses} clock={clock} />
    </div>
  );
}

export default App;
