import React from "react";

const WeatherCard = ({ dailyWeather }) => {
  return (
    <div className="weather-card">
      <div className="weather-day">{dailyWeather && dailyWeather.day}</div>
      <div className="weather-icon">
        {dailyWeather && (
          <img
            src={`http://openweathermap.org/img/wn/${dailyWeather.image}@2x.png`}
            alt="weather icon"
          />
        )}
      </div>
      <div className="weather-temps">
        <div className="weather-hi-temp">
          {dailyWeather && dailyWeather.high}
          &#8457;
        </div>
        <div className="weather-lo-temp">
          {dailyWeather && dailyWeather.low}
          &#8457;
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
