import { FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

const Forecast = ({ details }) => {
  const forecastIndices = [8, 16, 24, 32, 40];
  const weekdays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  return (
    <div className="cards dark:text-white font-black gap-6 justify-center flex flex-wrap">
      {forecastIndices.map((el) => {
        return (
          <div className="flex flex-col" key={details[el - 1].dt}>
            <div className="text-center">
              {weekdays[new Date(details[el - 1].dt * 1000).getDay()]}
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${
                  details[el - 1].weather[0].icon
                }@2x.png`}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 font-bold">
              <div className="flex items-center justify-center text-center">
                {details[el - 1].weather[0].main.toUpperCase()}
              </div>
              <div className="flex items-center justify-center text-center">
                <FaTemperatureHalf />
                {details[el - 1].main.temp} &deg;C
              </div>
              <div className="flex items-center justify-center text-center">
                <WiHumidity />
                {details[el - 1].main.humidity} %
              </div>
              <div className="flex items-center justify-center text-center">
                <FaWind className="mr-1" />
                {details[el - 1].wind.speed} kmph
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
