import { useEffect, useState } from "react";
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
  const [location, setLocation] = useState(
    localStorage.getItem("location")?.length
      ? localStorage.getItem("location")
      : ""
  );
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const getCurrentWeather = async (location) => {
    try {
      setLoading(true);
      const coords = await getGeoCode(location);
      console.log("api call");
      if (coords.data?.length) {
        localStorage.setItem("location", location);
        const weatherResponse = await currentWeatherCall(coords.data[0]);
        const forecast = await currentWeatherForecast(coords.data[0]);
        setWeather({
          weather: weatherResponse.data,
          forecast: forecast.data.list,
          search: location,
        });
        setValid(true);
      } else {
        setWeather({});
        setValid(false);
      }
      setLoading(false);
    } catch {
      setWeather({});
      setLoading(false);
    }
  };

  const hideAlert = () => {
    if (!valid) {
      setTimeout(() => {
        setValid(true);
      }, 12000);
    }
  };

  hideAlert();

  const [weather, setWeather] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.length) {
      getCurrentWeather(location);
    } else {
      localStorage.setItem("location", "");
      setWeather({});
      setValid(false);
    }
    setLocation("");
  };

  useEffect(() => {
    if (location.length) {
      getCurrentWeather(location);
      setLocation("");
    }
  }, []);

  return (
    <>
      <SearchBar
        setLocation={setLocation}
        handleSearch={handleSearch}
        location={location}
        valid={valid}
        loading={loading}
      />
      {Object.keys(weather).length > 0 && (
        <div className="flex flex-col lg:flex-row gap-8 flex-wrap items-center justify-center max-w-[1600px] mt-4">
          <CurrentWeather
            details={weather.weather}
            location={weather.search}
            loading={loading}
          />
          <SunRiseSet details={weather.weather} loading={loading} />
          <MainValues details={weather.weather} loading={loading} />
          <Forecast details={weather.forecast} loading={loading} />
          <Wind details={weather.weather} loading={loading} />
        </div>
      )}
    </>
  );
};

export default Home;
