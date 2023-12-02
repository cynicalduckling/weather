import { FiSunrise, FiSunset } from "react-icons/fi";

const SunRiseSet = ({ details }) => {
  const sunrise = new Date(new Date(parseInt(details.sys.sunrise) * 1000));
  const sunset = new Date(new Date(parseInt(details.sys.sunset) * 1000));

  //   console.log(typeof sunrise.getMinutes());

  return (
    <div className="cards flex justify-evenly">
      <div className="flex flex-col p-1 gap-2 items-center grow">
        {" "}
        <FiSunrise color="white" className="sun-icons grow" />
        <div className="text-white grow flex items-center font-bold">
          {sunrise.getHours() +
            ":" +
            (sunrise.getMinutes() > 10
              ? sunrise.getMinutes()
              : `0${sunrise.getMinutes()}`) || "--" + " AM"}
        </div>
      </div>
      <div className="flex flex-col p-1 gap-2 items-center grow">
        <FiSunset color="white" className="sun-icons grow" />
        <div className="text-white grow flex items-center font-bold">
          {sunset.getHours() -
            12 +
            ":" +
            (sunset.getMinutes() > 10
              ? sunset.getMinutes()
              : `0${sunset.getMinutes()}`) || "--" + " PM"}
        </div>
      </div>
    </div>
  );
};

export default SunRiseSet;
