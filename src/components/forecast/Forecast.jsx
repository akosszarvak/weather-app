import React from "react";
import "./Forecast.css";

function Forecast({ forecast }) {
  console.log(forecast);
  return (
    <div className=" forecast">
      <div className="daily">
        <div className="details">
          {" "}
          <h4>{forecast.currentDay.date}</h4>
          <h5>{forecast.currentDay.weekday}</h5>
          <h3>{forecast.currentDay.location}</h3>
          <h2>{forecast.currentDay.temperature}°C</h2>
          <p>{forecast.currentDay.desc}</p>
        </div>

        <div className="detailed">
          {forecast.detailedDay.map((e) => (
            <div>
              <p>
                <span className="bold">{e.name}:</span> {e.value} {e.unit}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hourly-forecast">
        {forecast.upcomingForecast.map((day) => (
          <div className="card">
            <p>{day.weekday}:00</p>
            <p>
              <span className="bold">{day.temp}°C</span>
            </p>
            <p>{day.description}</p>
            {/* <p>{day.rain}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
