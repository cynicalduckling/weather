import { useState } from "react";
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
  const [location, setLocation] = useState(null);

  const getCurrentWeather = async (location) => {
    const coords = await getGeoCode(location);
    const weatherResponse = await currentWeatherCall(coords.data[0]);
    const forecast = await currentWeatherForecast(coords.data[0]);
    setWeather({
      weather: weatherResponse.data,
      forecast: forecast.data.list,
      search: location,
    });
  };

  const [weather, setWeather] = useState({});

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
      {Object.keys(weather).length > 0 && (
        <div className="flex flex-col lg:flex-row gap-8 flex-wrap items-center justify-center max-w-[1600px]">
          <CurrentWeather details={weather.weather} location={weather.search} />
          <SunRiseSet details={weather.weather} />
          <MainValues details={weather.weather} />
          <Forecast details={weather.forecast} />
          <Wind details={weather.weather} />
        </div>
      )}
    </>
  );
};

export default Home;
