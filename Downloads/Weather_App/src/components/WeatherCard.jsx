import React from 'react';

const emojiMap = {
  Sunny: '☀️',
  Cloudy: '☁️',
  Rain: '🌧️',
  Snow: '❄️',
  Thunder: '⛈️',
  Clear: '🌙',
};

const WeatherCard = ({ data }) => {
  const condition = data.current.condition.text;
  const emoji = emojiMap[condition] || '🌤️';
  return (
    <div className="weather-card">
      <h2>{data.location.name},{data.location.region} {data.location.country}</h2>
      <div className="weather-info">
        <h3>{emoji} {condition}</h3>
        <p>🌡️ {data.current.temp_c}°C / {data.current.temp_f}°F</p>
        <p>💨 Wind: {data.current.wind_kph} kph</p>
        <p>💧 Humidity: {data.current.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;