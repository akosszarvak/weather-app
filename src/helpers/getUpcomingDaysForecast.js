import moment from "moment";

const getUpcomingDaysForecast = (data) => {
  console.log("get upcoming", data.data.list);
  const days = data.data.list;
  console.log(days[0].dt_txt);

  return days.map((day) => ({
    weekday: moment(day.dt_txt).format("dddd hh"),
    temp: Math.round(day.main.temp - 273),
    rain: day.rain,
    description: day.weather[0].description,
  }));
};

export default getUpcomingDaysForecast;
