const CurrentWeather = ({ details, location, loading }) => {
  return (
    <div className={`cards flex flex-row ${loading && "loading"}`}>
      <div className="flex flex-col justify-between text-3xl flex-1 items-start gap-2">
        <div className="font-extrabold">
          {details.weather[0].description.toUpperCase()}
        </div>
        <div className="text-sm flex justify-center items-center font-bold">
          {location.toUpperCase()}
        </div>
        <div className="text-3xl flex justify-center font-extrabold">
          {details.main.temp} &deg;C
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 items-end">
        <div className="">
          <img
            width={80}
            height={80}
            src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
          />
        </div>
        <div className="flex justify-center font-semibold">
          Min: {details.main.temp_min} &deg;C
        </div>
        <div className="flex justify-center font-semibold">
          Max: {details.main.temp_max} &deg;C
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
