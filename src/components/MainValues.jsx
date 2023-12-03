const MainValues = ({ details }) => {
  return (
    <div className="text-white flex cards font-black min-w-[430px]">
      <div className="flex flex-col flex-1 gap-4 justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <div>Pressure</div>
          <div className="font-bold">
            {details.main.pressure ? details.main.pressure + " pa" : "--"}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>Humidity</div>
          <div className="font-bold">
            {details.main.humidity ? details.main.humidity + " %" : "--"}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4 justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <div>Sea Level</div>
          <div className="font-bold">
            {details.main.sea_level ? details.main.sea_level + " m" : "--"}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>Ground Level</div>
          <div className="font-bold">
            {details.main.grnd_level ? details.main.grnd_level + " m" : "--"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainValues;
