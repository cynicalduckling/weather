const MainValues = ({ details }) => {
  return (
    <div className="text-white flex cards font-black">
      <div className="flex flex-col grow gap-4">
        <div className="flex flex-col items-center">
          <div>Pressure</div>
          <div className="font-bold">
            {details.main.pressure ? details.main.pressure + " pa" : "--"}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>Humidity</div>
          <div className="font-bold">
            {details.main.humidity ? details.main.humidity + " %" : "--"}
          </div>
        </div>
      </div>
      <div className="flex flex-col grow gap-4">
        <div className="flex flex-col items-center">
          <div>Sea Level</div>
          <div className="font-bold">
            {details.main.sea_level ? details.main.sea_level + " m" : "--"}
          </div>
        </div>
        <div className="flex flex-col items-center">
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
