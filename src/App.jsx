import { useState, useEffect } from "react";
import anIcon from "./assets/react.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("bangkok");
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  console.log(city);
  const getWeather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=216a9c12e5c12c5e332dd7ddf2ab25b9`;
    let response = await fetch(url);
    let data = await response.json();
    if (city === "") {
      setCityName(data.name);
      setTemp(Math.floor(data.main.temp));
    }
    setCityName(data.name);
    setTemp(Math.floor(data.main.temp));
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          className="search-city"
          placeholder="a city eg. Bangkok"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
        <div
          className="search-icon"
          onClick={() => {
            getWeather();
          }}
        >
          <img src="" alt="x" />
        </div>
      </div>
      <div className="weather-icon">
        <img src={anIcon} alt="" />
      </div>
      <div className="temp">{temp} °C</div>
      <div className="cityName">{cityName}</div>
      <div className="data-container">
        <div className="data">
          <img src={anIcon} alt="" />
          <div className="detail">
            <div className="text">Precipitation</div>
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
