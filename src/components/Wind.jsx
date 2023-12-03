const Wind = ({ details }) => {
  return (
    <div className="text-black dark:text-white flex cards font-black  min-w-[430px]">
      <div className="flex flex-col grow gap-4 justify-evenly">
        <div className="flex flex-col items-center">
          <div>Visibility</div>
          <div className="font-bold">
            {details.visibility ? details.visibility + " m" : "--"}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>Wind Speed</div>
          <div className="font-bold">
            {details.wind.speed ? details.wind.speed + " kmph" : "--"}
          </div>
        </div>
      </div>
      <div className="flex flex-col grow gap-4 justify-evenly">
        <div className="flex flex-col items-center">
          <div>Degree</div>
          <div className="font-bold">
            {details.wind.deg ? details.wind.deg + " deg" : "--"}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div> Wind Gust</div>
          <div className="font-bold">
            {details.wind.gust ? details.wind.gust + " m/s" : "--"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wind;
