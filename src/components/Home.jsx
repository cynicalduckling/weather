import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import {
  currentWeatherCall,
  getGeoCode,
  currentWeatherForecast,
} from "../functions";
import SunRiseSet from "./SunRiseSet";
import MainValues from "./MainValues";
import Wind from "./Wind";
import Forecast from "./Forecast";

const Home = () => {
  const [location, setLocation] = useState("");

  const getCurrentWeather = async (location) => {
    const coords = await getGeoCode(location);
    const weatherResponse = await currentWeatherCall(coords.data[0]);
    const forecast = await currentWeatherForecast(coords.data[0]);
    console.log(forecast.data.list[7]);
    setWeather({
      weather: weatherResponse.data,
      forecast: forecast.data.list,
      search: location,
    });
  };

  const [weather, setWeather] = useState({});

  useEffect(() => {
    getCurrentWeather("Thrissur");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getCurrentWeather(location);
    setLocation("");
  };

  return (
    <>
      <SearchBar
        setLocation={setLocation}
        handleSearch={handleSearch}
        location={location}
      />
      <div className="flex flex-col md:flex-row gap-8 flex-wrap items-center justify-center ">
        {Object.keys(weather).length > 0 && (
          <CurrentWeather details={weather.weather} location={weather.search} />
        )}
        {Object.keys(weather).length > 0 && (
          <SunRiseSet details={weather.weather} />
        )}
        {Object.keys(weather).length > 0 && (
          <MainValues details={weather.weather} />
        )}
        {Object.keys(weather).length > 0 && (
          <Forecast details={weather.forecast} />
        )}
        {Object.keys(weather).length > 0 && <Wind details={weather.weather} />}
      </div>
    </>
  );
};

export default Home;
