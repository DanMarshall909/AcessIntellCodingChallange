import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [searchedCities, setSearchedCites] = useState([]);

  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button id="searchButton" onClick={() => handleCitySearchClick(city)}>
        Search
      </button>
      <div id="weatherData">{getCityDetails()}</div>
      <div id="previousSearches">
        {searchedCities.map((cityName) => (
          <button
            key={cityName}
            id={"city-button-" + cityName}
            onClick={() => handleCityButtonClick(cityName)}
          >
            {cityName}
          </button>
        ))}
      </div>
    </div>
  );

  function handleCitySearchClick(city) {
    const searchedCity = mockWeatherData[city];
    if (searchedCity?.temperature) {
      addCityToSearches(city);
    }
  }

  function handleCityButtonClick(city) {
    setCity(city);
  }

  function addCityToSearches(city) {
    let tmp = [...searchedCities];
    tmp.push(city);
    setSearchedCites(tmp);
  }

  function getCityDetails() {
    const currentCity = mockWeatherData[city];

    if (!currentCity) return <div>City not found.</div>;
    else {
      return (
        <div>
          <div>Temperature: {currentCity.temperature}</div>
          <div>Humidity: {currentCity.humidity}</div>
          <div>Wind Speed: {currentCity.windSpeed}</div>
        </div>
      );
    }
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<WeatherDashboard />);
