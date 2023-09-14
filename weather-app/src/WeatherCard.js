// WeatherCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const WeatherCard = ({ weatherData }) => {
  return (
    <Card>
      <Card.Body>
        <h3>{weatherData.name}</h3>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
