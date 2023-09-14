// WeatherApp.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const API_KEY = '7b1c292911fa688a5bc4e39b56308db5';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query,
          appid: API_KEY,
          units: 'metric', // Use Celsius
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter a city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Search</button>

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
