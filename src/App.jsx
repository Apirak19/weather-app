import { useState } from "react";
import anIcon from "./assets/react.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  console.log(city);
  const getWeather = async () => {
    let APIkey = "216a9c12e5c12c5e332dd7ddf2ab25b9";

    if (city === "") {
      return 0;
    }
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
  };
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          className="search-city"
          placeholder="a city eg. Bangkok"
          onChange={(e)=>setCity(e.target.value)}
        />
        <div className="search-icon" onClick={() => {getWeather()}}>
          <img src="" alt="x" />
        </div>
      </div>
      <div className="weather-icon">
        <img src={anIcon} alt="" />
      </div>
      <div className="temp">24</div>
      <div className="city">Bangkok</div>
      <div className="data-container">
        <div className="data">
          <img src={anIcon} alt="" />
          <div className="detail">
            <div className="text">Humidity</div>
            <div className="number">90</div>
          </div>
        </div>
        <div className="data">
          <img src={anIcon} alt="" />
          <div className="detail">
            <div className="text">Humidity</div>
            <div className="number">90</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
