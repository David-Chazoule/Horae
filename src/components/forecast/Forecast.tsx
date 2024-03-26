import { Dispatch, SetStateAction, useState, useEffect } from "react";
import moment from "moment-timezone";
import {
  forecastType,
  dataWeatherTitleItem,
  dataWindDetailItem,
  dataHumidityDetailItem,
  dataVisibilityDetailItem,
  dataFeelDetailItem,
} from "../../types";
import {
  Dates,
  DayHours,
  getDayHours,
  getPop,
  getFeels,
  getVisibilityValue,
  getHumidityValue,
  GetPressureValue,
} from "../../helpers";

import North from "../directionIcon/North";
import East from "../directionIcon/East";
import NorthE from "../directionIcon/NorthE";
import NorthW from "../directionIcon/NorthW";
import South from "../directionIcon/South";
import SouthE from "../directionIcon/SouthE";
import SouthW from "../directionIcon/SouthW";
import West from "../directionIcon/West";
import {
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiStrongWind,
} from "react-icons/wi";

import { CiDroplet } from "react-icons/ci";
import { MdOutlineCompress } from "react-icons/md";
import { TiEyeOutline } from "react-icons/ti";

type Props = {
  data: forecastType;
  setForecast: Dispatch<SetStateAction<forecastType | null>>;
  language: boolean;
  dataWeatherTitle: dataWeatherTitleItem;
  dataWindDetail: dataWindDetailItem;
  dataHumidityDetail: dataHumidityDetailItem;
  dataVisibilityDetail: dataVisibilityDetailItem;
  dataFeelsDetail: dataFeelDetailItem;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>°</sup>
  </span>
);

export default function Forecast({
  data,
  dataWeatherTitle,
  dataWindDetail,
  setForecast,
  language,
}: Props): JSX.Element {
  const today = data.list[0];
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  //Adjusts a given timestamp for the specified timezone offset
  useEffect(() => {
    const sunriseTime = adjustTimeForTimezone(data.sunrise, data.timezone);
    const sunsetTime = adjustTimeForTimezone(data.sunset, data.timezone);
    setSunrise(sunriseTime.format("HH:mm"));
    setSunset(sunsetTime.format("HH:mm"));
  }, [data]);

  // Adjusts a given date and time string for the specified timezone offset
  const adjustTimeForTimezone = (time: number, timezoneOffset: number) => {
    const timeInTargetZone = moment.unix(time).utcOffset(timezoneOffset / 60);
    return timeInTargetZone;
  };

  // from the value of the icon of the data the function returns an image

  const weatherImg = () => {
    if (today.weather[0].icon === "01d") {
      const weatherStyle = " weather-now clear-day";
      return weatherStyle;
    } else if (today.weather[0].icon === "01n") {
      const weatherStyle = " weather-now clear-night";
      return weatherStyle;
    } else if (
      today.weather[0].icon === "10d" ||
      today.weather[0].icon === "09d"
    ) {
      const weatherStyle = "weather-now rain-day";
      return weatherStyle;
    } else if (
      today.weather[0].icon === "10n" ||
      today.weather[0].icon === "09n"
    ) {
      const weatherStyle = "weather-now rain-night";
      return weatherStyle;
    } else if (today.weather[0].icon === "13d") {
      const weatherStyle = "weather-now snow-day";
      return weatherStyle;
    } else if (today.weather[0].icon === "13n") {
      const weatherStyle = "weather-now snow-night";
      return weatherStyle;
    } else if (today.weather[0].icon === "11d") {
      const weatherStyle = "weather-now thunderstorm-day";
      return weatherStyle;
    } else if (today.weather[0].icon === "11n") {
      const weatherStyle = "weather-now thunderstorm-night";
      return weatherStyle;
    } else if (today.weather[0].icon === "50d") {
      const weatherStyle = "weather-now mist-day";
      return weatherStyle;
    } else if (today.weather[0].icon === "50n") {
      const weatherStyle = "weather-now mist-night";
      return weatherStyle;
    } else if (
      today.weather[0].icon === "09d" ||
      today.weather[0].icon === "02d" ||
      today.weather[0].icon === "03d" ||
      today.weather[0].icon === "04d"
    ) {
      const weatherStyle = "weather-now cloud-day";
      return weatherStyle;
    } else if (
      today.weather[0].icon === "09n" ||
      today.weather[0].icon === "02n" ||
      today.weather[0].icon === "03n" ||
      today.weather[0].icon === "04n"
    ) {
      const weatherStyle = "weather-now cloud-night";
      return weatherStyle;
    }
  };

  const getClose = () => {
    setForecast(null);
  };

  // from the degree of wind direction the function returns the direction in writing as well as a direction icon. it also returns the speed of the bursts

  const getWindDirection = (deg: number): string | JSX.Element => {
    if (deg > 15 && deg <= 75)
      return (
        <div className="direction">
          <NorthE />
          <p>
            {language ? dataWindDetail.northEFr : dataWindDetail.northE}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h{" "}
          </p>
        </div>
      );

    if (deg > 76 && deg <= 105)
      return (
        <div className="direction">
          <East />
          <p>
            {language ? dataWindDetail.eastFr : dataWindDetail.east}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h
          </p>
        </div>
      );
    if (deg > 105 && deg <= 165)
      return (
        <div className="direction">
          <SouthE />
          <p>
            {language ? dataWindDetail.southEFr : dataWindDetail.southE}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h
          </p>
        </div>
      );

    if (deg > 166 && deg <= 195)
      return (
        <div className="direction">
          <South />
          <p>
            {language ? dataWindDetail.southFr : dataWindDetail.south}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h
          </p>
        </div>
      );
    if (deg > 195 && deg <= 255)
      return (
        <div className="direction">
          <SouthW />
          <p>
            {language ? dataWindDetail.southWFr : dataWindDetail.southW}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h
          </p>
        </div>
      );

    if (deg > 255 && deg <= 285)
      return (
        <div className="direction">
          <West />
          <p>
            {language ? dataWindDetail.westFr : dataWindDetail.west}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h
          </p>
        </div>
      );
    if (deg > 285 && deg <= 345)
      return (
        <div className="direction">
          <NorthW />
          <p>
            {language ? dataWindDetail.northWFr : dataWindDetail.northW}{" "}
            {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
            {Math.round(today.wind.gust * 3.149)}km/h
          </p>
        </div>
      );

    return (
      <div className="direction">
        <North />
        <p>
          {language ? dataWindDetail.northFr : dataWindDetail.north}{" "}
          {language ? dataWindDetail.gustFr : dataWindDetail.gust}{" "}
          {Math.round(today.wind.gust * 3.149)}km/h
        </p>
      </div>
    );
  };

  return (
    <div className="weather_container">
      <div className="closing-box">
        <button className="btn-closing" onClick={getClose}>
          X
        </button>
      </div>

      <section className="weather-today-box">
        <div className="cityName-box">
          <p>{Dates(today.dt_txt)}</p>

          <h1>
            {data.name}
            <span>{data.country}</span>
          </h1>
        </div>
        <div className={weatherImg()}>
          <div className="temp-now">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
                alt=""
              />
              <h1>
                <Degree temp={Math.round(today.main.temp)} />
              </h1>
            </div>
            <div className="info-weather">
              <p>{today.weather[0].description}</p>
              <div className="temp-box">
                <span> Min: : {Math.round(today.main.temp_min)}° </span>
                <span> Max : {Math.round(today.main.temp_max)}° </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="weatherByHours-box">
        {data.list.map((item, i) => (
          <div key={i}>
            <p className="dateHours">{DayHours(item.dt_txt)}</p>
            <p>{getDayHours(i, item.dt, language)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{Math.round(item.main.temp)}°</p>
          </div>
        ))}
      </section>
      <section className="sunset-container">
        <div className="sunset-box">
          <span>
            <WiSunrise size={40} />
            <p>
              {language
                ? dataWeatherTitle.sunriseFr.toUpperCase()
                : dataWeatherTitle.sunrise.toUpperCase()}
            </p>
          </span>
          <h2>{sunrise}</h2>
        </div>
        <div className="sunset-box">
          <span>
            <WiSunset size={40} />

            <p>
              {language
                ? dataWeatherTitle.sunsetFr.toUpperCase()
                : dataWeatherTitle.sunset.toUpperCase()}
            </p>
          </span>
          <h2>{sunset}</h2>
        </div>
      </section>
      <section className="detail-container">
        <div className="detail-box">
          <div className="detail">
            <p>
              <span>
                <WiStrongWind size={30} />
              </span>{" "}
              {language
                ? dataWeatherTitle.windFr.toUpperCase()
                : dataWeatherTitle.wind.toUpperCase()}
            </p>
            <h2>{Math.round(today.wind.speed * 3.149)} km/h</h2>
            {getWindDirection(today.wind.deg)}
          </div>
          <div className="detail">
            <p>
              <span>
                <WiThermometer size={30} />
              </span>{" "}
              {language
                ? dataWeatherTitle.feelsFr.toUpperCase()
                : dataWeatherTitle.feels.toUpperCase()}
            </p>{" "}
            <h2>{Math.round(today.main.feels_like)}°</h2>
            <div>
              <p>{getFeels(Math.round(today.main.feels_like), language)} </p>
            </div>
          </div>
        </div>
        <div className="detail-box">
          <div className="detail">
            <p>
              <span>
                <WiHumidity height={2} size={30} />
              </span>{" "}
              {language
                ? dataWeatherTitle.humidityFr.toUpperCase()
                : dataWeatherTitle.humidity.toUpperCase()}
            </p>{" "}
            <h2>{today.main.humidity} % </h2>
            <div>
              <p>{getHumidityValue(today.main.humidity, language)}</p>
            </div>
          </div>
          <div className="detail">
            <p>
              <span>
                <CiDroplet size={30} />
              </span>{" "}
              {language
                ? dataWeatherTitle.precipitationFr.toUpperCase()
                : dataWeatherTitle.precipitation.toUpperCase()}
            </p>
            <h2>{today.pop * 100} %</h2>
            <div>
              <p>{getPop(today.pop, language, today.clouds.all)}</p>
            </div>
          </div>
        </div>
        <div className="detail-box">
          <div className="detail">
            <p>
              <span>
                <MdOutlineCompress size={30} />
              </span>{" "}
              {language
                ? dataWeatherTitle.pressurefr.toUpperCase()
                : dataWeatherTitle.pressure.toUpperCase()}
            </p>{" "}
            <h2>{today.main.pressure} hPa</h2>
            <div>
              <p>{GetPressureValue(today.main.pressure, language)}</p>
            </div>
          </div>
          <div className="detail">
            <p>
              <span>
                <TiEyeOutline size={30} />
              </span>{" "}
              {language
                ? dataWeatherTitle.visibilityfr.toUpperCase()
                : dataWeatherTitle.visibility.toUpperCase()}
            </p>
            <h2>{today.visibility / 1000} Km</h2>
            <div>
              <p>{getVisibilityValue(today.visibility, language)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
