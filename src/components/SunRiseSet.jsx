import { FiSunrise, FiSunset } from "react-icons/fi";

const SunRiseSet = ({ details }) => {
  const sunrise = new Date(new Date(parseInt(details.sys.sunrise) * 1000));
  const sunset = new Date(new Date(parseInt(details.sys.sunset) * 1000));

  //   console.log(typeof sunrise.getMinutes());

  return (
    <div className="cards flex justify-evenly min-w-[430px]">
      <div className="flex flex-col p-1 gap-2 items-center grow">
        {" "}
        <FiSunrise className="sun-icons grow stroke-black dark:stroke-white" />
        <div className="grow flex items-center font-bold">
          {sunrise.getHours() +
            ":" +
            (sunrise.getMinutes() > 10
              ? `${sunrise.getMinutes()} AM`
              : `0${sunrise.getMinutes()} AM`) || "--" + " AM"}
        </div>
      </div>
      <div className="flex flex-col p-1 gap-2 items-center grow ">
        <FiSunset className="sun-icons grow stroke-black dark:stroke-white" />
        <div className="grow flex items-center font-bold">
          {sunset.getHours() -
            12 +
            ":" +
            (sunset.getMinutes() > 10
              ? `${sunset.getMinutes()} PM`
              : `0${sunset.getMinutes()} PM`) || "--" + " PM"}
        </div>
      </div>
    </div>
  );
};

export default SunRiseSet;
