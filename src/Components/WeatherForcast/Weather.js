import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Indore");
  const API_KEY = "85866ab056fc6fa077f6b0a21383db86";

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg text-center p-4">
      <div className="card-header bg-success text-white text-center">
          <h2>🌦️ Weather Forecast for Farmers</h2>
        </div>
        <h2 className="card-title text-success fw-bold mt-5">
          🌦️ Weather in {weather?.name}
        </h2>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className=" btn-gradient" onClick={fetchWeather}>
            Get Weather
          </button>
        </div>

        {weather ? (
          <div className="row g-3">
            {/* Temperature Card */}
            <div className="col-md-3">
              <div className="card bg-warning text-white p-3">
                <h5 className="card-title">🌡️ Temperature</h5>
                <p className="fs-4">{weather.main.temp}°C</p>
              </div>
            </div>

            {/* Weather Description Card */}
            <div className="col-md-3">
              <div className="card bg-info text-white p-3">
                <h5 className="card-title">☁️ Condition</h5>
                <p className="fs-5">{weather.weather[0].description}</p>
              </div>
            </div>

            {/* Wind Speed Card */}
            <div className="col-md-3">
              <div className="card bg-primary text-white p-3">
                <h5 className="card-title">💨 Wind Speed</h5>
                <p>{weather.wind.speed} m/s</p>
              </div>
            </div>

            {/* Humidity Card */}
            <div className="col-md-3">
              <div className="card bg-success text-white p-3">
                <h5 className="card-title">💧 Humidity</h5>
                <p>{weather.main.humidity}%</p>
              </div>
            </div>



            {weather.main.temp > 35 && (
                <p className="text-warning fw-bold mt-2">
                  ⚠️ High temperature! Increase irrigation.
                </p>
              )}
              {weather.main.temp < 10 && (
                <p className="text-primary fw-bold mt-2">
                  ❄️ Cold conditions! Protect crops from frost.
                </p>
              )}
          </div>
          


        ) : (
          <p className="text-danger">Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
