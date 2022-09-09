import { useState } from "react";
import axios from "axios";
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getDetailedForecast from "../helpers/getDetailedForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";
import { BASE_URL, API_KEY } from "../API";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(false);

  const getWeatherData = async (location) => {
    let data;
    try {
      data = await axios.get(
        `${BASE_URL}/weather?q=${location}&appid=${API_KEY}`
      );
    } catch (error) {
      console.log(error);
    }

    if (!data || data.length === 0) {
      setError("There is no such location");
      setLoading(false);
      return;
    }
    console.log(data);
    return data;
  };

  const getForecastData = async (data) => {
    let forecastData;
    const lon = data.data.coord.lon;
    const lat = data.data.coord.lat;
    try {
      forecastData = await axios.get(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&cnt=6&appid=${API_KEY}`
      );
      console.log(forecastData);
    } catch (error) {
      console.log(error);
    }

    if (!forecastData || forecastData.length === 0) {
      setError("There is no forecast information");
      setLoading(true);
      return;
    }
    return forecastData;
  };

  // use the helper functions to get the data from API and set it to forecast state so it can be used by components
  const gatherForecastData = (data, forecastData) => {
    const currentDay = getCurrentDayForecast(data.data);
    const detailedDay = getDetailedForecast(data.data);
    const upcomingForecast = getUpcomingDaysForecast(forecastData);

    setForecast({ currentDay, detailedDay, upcomingForecast });

    setLoading(false);
  };

  //api call
  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);
    const data = await getWeatherData(location);

    if (!data) return;
    const forecastData = await getForecastData(data);

    gatherForecastData(data, forecastData);
  };
  return { isError, isLoading, forecast, submitRequest };
};

export default useForecast;
