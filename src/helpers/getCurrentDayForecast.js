import moment from "moment";

const getCurrentDayForecast = (data) => ({
  location: data.name,
  temperature: Math.round(data.main.temp - 273.15),
  icon: `http://openweathermap.org/img/w/` + data.weather[0].icon,
  desc: data.weather[0].description,
});

export default getCurrentDayForecast;
