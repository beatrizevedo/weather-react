import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function updateWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3dce9b1c66837262a25b3f448d354a76&units=metric`;
    axios.get(url).then(showWeather);
    setMessage(
      `In ${city} are ${temperature}º degrees. Humidity of ${humidity}%. Wind is ${wind}m/s.`
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={updateWeather}>
        <input
          type="search"
          placeholder="Search your city"
          onChange={updateCity}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>{message}</div>
    </div>
  );
}
