import axios from "axios";

const options = {
  method: "GET",
  url: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const fetchWeatherList = async () => {
  const weatherList = await axios
    .request(options)
    .then((response) => {
      const data = response.data.daily.slice(3);
      const dailies = data.map((weather) => {
        const date = new Date(weather.dt * 1000); // converting UTC to local time
        const dayNum = date.getDay();
        const day = days[dayNum];
        const image = weather.weather[0].icon;
        const weatherTemp = weather.temp;
        const hiTemp = Math.round(weatherTemp.max);
        const loTemp = Math.round(weatherTemp.min);

        const newWeather = {
          day: day,
          image: image,
          high: hiTemp,
          low: loTemp,
        };

        return newWeather;
      });

      return dailies;
    })
    .catch((error) => {
      console.error(error);
    });
  return weatherList;
};
