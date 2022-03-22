import React, { useEffect, useState } from "react";
import "./WeatherCard.css";
import WeatherCard from "./WeatherCard";
import { fetchWeatherList } from "../../api";

const WeatherList = () => {
  const [dailyWeather, setDailyWeather] = useState([]);

  useEffect(() => {
    fetchWeatherList().then((weatherList) => {
      setDailyWeather(weatherList);
    });
  }, []);

  const dailyWeatherList = dailyWeather.map((weather, index) => {
    return <WeatherCard dailyWeather={weather} key={index} />;
  });
  return <div className="weather-cards">{dailyWeatherList}</div>;
};

export default WeatherList;
