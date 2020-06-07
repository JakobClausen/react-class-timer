import clear from "./../../../assets/weatherIcons/sun.svg";
import fewClouds from "./../../../assets/weatherIcons/cloudy-sun.svg";
import cloudy from "./../../../assets/weatherIcons/cloudy.svg";
import shower from "./../../../assets/weatherIcons/rainy-sun.svg";
import rain from "./../../../assets/weatherIcons/rainy.svg";
import thunder from "./../../../assets/weatherIcons/thunder.svg";
import snow from "./../../../assets/weatherIcons/snowy.svg";

const weatherIcon = (condition) => {
  let icon = "";
  switch (condition) {
    case "clear sky":
      icon = clear;
      break;
    case "few clouds":
      icon = fewClouds;
      break;
    case "scattered clouds" || "broken clouds" || "mist":
      icon = cloudy;
      break;
    case "shower rain":
      icon = shower;
      break;
    case rain:
      icon = "sun.svg";
      break;
    case "thunderstorm":
      icon = thunder;
      break;
    case "snow":
      icon = snow;
      break;
    default:
      icon = cloudy;
  }
  console.log("yopyo");

  return icon;
};

export default weatherIcon;
