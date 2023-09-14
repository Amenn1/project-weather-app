// Weather.js

import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(''); // State for the city input

  const apiKey = 'Tunisia, TN';

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        throw new Error('City not found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData.main && (
        <div>
          <h3>Weather in {weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
