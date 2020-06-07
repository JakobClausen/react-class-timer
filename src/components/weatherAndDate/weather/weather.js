import React, { useState, useEffect } from "react";
import "./waether.css";
import weatherIcon from "./weatherIcon";

const Weather = (props) => {
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await fetch(
        "https://fysiken-weather.herokuapp.com/data"
      );
      const data = await response.json();
      const path = weatherIcon(data.weather[0].description);
      setWeather({ ...data, icon: path });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
    const interval = setInterval(() => {
      getWeather();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return <></>;
  } else {
    return (
      <div className={props.class}>
        <p className="temp">
          {Math.floor(weather.main.temp)}
          <span className="temp__celsius">°C</span>
        </p>
        <img className="temp__img" src={weather.icon} alt="" />
      </div>
    );
  }
};

export default Weather;

// const getWeather = async () => {
//   const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=57.71&lon=11.97&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
//   try {
//     const response = await fetch(weatherAPI);
//     const data = await response.json();
//     const path = weatherIcon(data.weather[0].description);
//     setWeather({ ...data, icon: path });
//   } catch (error) {
//     console.log(error);
//   }
// };
