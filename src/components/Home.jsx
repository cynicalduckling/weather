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

const Home = () => {
  // console.log("rendering");

  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("Thrissur");

  const getCurrentWeather = async (location) => {
    const coords = await getGeoCode(location);
    const weatherResponse = await currentWeatherCall(coords.data[0]);
    const forecast = await currentWeatherForecast(coords.data[0]);
    // console.log(forecast.data.list);
    setWeather({
      weather: weatherResponse.data,
      forecast: forecast.data.list,
      search: searchTerm,
    });
  };

  const [weather, setWeather] = useState({});

  useEffect(() => {
    getCurrentWeather("Thrissur");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getCurrentWeather(location);
    setSearchTerm(location);
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
          <MainValues details={weather.weather} />
        )}
        {Object.keys(weather).length > 0 && (
          <SunRiseSet details={weather.weather} />
        )}
        {Object.keys(weather).length > 0 && <Wind details={weather.weather} />}
        {/* {Object.keys(weather.weather).length > 0 && <Forecast details={weather.weather} />} */}
      </div>
    </>
  );
};

export default Home;
