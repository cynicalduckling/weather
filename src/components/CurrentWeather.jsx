const CurrentWeather = ({ details, location }) => {
  return (
    <div className="cards flex flex-row">
      <div className="flex flex-col text-3xl items-start justify-between gap-2">
        <div className="text-white font-extrabold">
          {details.weather[0].description.toUpperCase()}
        </div>
        <div className="text-white text-sm flex justify-center items-center font-semibold">
          {location}
        </div>
        <div className="text-white text-3xl flex justify-center font-extrabold">
          {details.main.temp} &deg;C
        </div>
      </div>

      <div className="flex flex-col justify-between items-end shrink-0 grow">
        <div className="">
          <img
            width={80}
            height={80}
            src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
          />
        </div>
        <div className="text-white flex justify-center font-semibold basis-0">
          Min: {details.main.temp_min} &deg;C
        </div>
        <div className="text-white flex justify-center font-semibold shrink-0">
          Max: {details.main.temp_max} &deg;C
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
