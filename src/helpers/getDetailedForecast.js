const getDetailedForecast = (data) => [
  {
    name: "humidity",
    value: data.main.humidity,
    unit: "%",
  },
  {
    name: "wind",
    value: Math.round(data.wind.speed),
    unit: "km/h",
  },
  {
    name: "air pressure",
    value: data.main.pressure,
    unit: "mb",
  },
  {
    name: "minimum temperature",
    value: Math.round(data.main.temp_min - 273.15),
    unit: "°C",
  },
  {
    name: "maximum temperature",
    value: Math.round(data.main.temp_max - 273.15),
    unit: "°C",
  },
];

export default getDetailedForecast;
