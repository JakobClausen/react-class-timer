import React, { useState, useEffect } from "react";
import "./App.css";
import moment from "moment";
import { Schedule } from "./data/Schedule";
import Logo from "./components/Logo/Logo";
import ScheduleList from "./components/ScheduleList/ScheduleList";
import Content from "./components/Content/Content";
const contentful = require("contentful");

function App() {
  const [todaysClasses, setTodaysClasses] = useState(Schedule[moment().day()]);
  const [clock, setClock] = useState(moment().format("HH:mm"));
  // CMS message
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "h69sfhlnbrtu",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "9tD-jL9WVtBVTdvP0KpYQdYP99vSF7fNqAx8zwwjFo4",
    });
    client.getEntries({ content_type: "message" }).then((res) => {
      setMessage(res.items[0].fields.message);
    });
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(moment().format("HH:mm"));
      setTodaysClasses(Schedule[moment().day()]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* <p className="App__message">{message}</p> */}
      <Logo />
      <ScheduleList data={todaysClasses} clock={clock} />
      <Content data={todaysClasses} clock={clock} />
    </div>
  );
}

export default App;
