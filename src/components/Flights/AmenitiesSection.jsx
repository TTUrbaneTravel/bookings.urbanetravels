import { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineElectricalServices } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { IoMdAirplane } from "react-icons/io";
import { MdOutlineWifi } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const AmenitiesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="fli-amenities">
      <div className="flex justify-end items-end paragraphFonts">
        <span className="flex items-center space-x-2">
          {/* <span  className={`opacity-35 text-xl`}>|</span> */}
          <span className={`opacity-70 text-2xl`}>
            <IoFastFoodOutline className="text-lime600 font-semibold" />
          </span>
          <span className={`opacity-70 text-2xl`}>
            <MdOutlineElectricalServices className="text-rose600 font-semibold" />
          </span>
          <span className={`opacity-70 text-2xl`}>
            <PiVideo className="text-yellow400 font-semibold" />
          </span>
          <span className={`opacity-70 text-2xl`}>
            <IoMdAirplane className="text-purple500 font-semibold" />
          </span>
        </span>
        <a
          className={`showmore Plu text-lg mx-1 mt-0 text-blue-700 ${
            showMore ? "hidden" : ""
          }`}
          id="6E2651"
          onClick={toggleShowMore}
        >
          <MdOutlineKeyboardArrowDown />
        </a>
        <a
          className={`showmore Min text-lg mx-1 text-blue700 ${
            !showMore ? "hidden" : ""
          }`}
          id="6E2651"
          onClick={toggleShowMore}
        >
          <MdKeyboardArrowUp />
        </a>
      </div>
      <div
        className={`moreAmenities ${showMore ? "block" : "hidden"}`}
        id="FltAmedivFltAme6E2651"
      >
        <div className="amlft items-end paragraphFonts">
          <span className="amntl text-violet500 text-xs">Amenities</span>
          <ul className="flex space-x-6">
            <li className="flex">
              <span className="opacity-50">
                <MdOutlineWifi className="text-xl text-blue600 mr-1" />
              </span>
              <span className="opacity-70 text-xs">No Wi-fi</span>
            </li>
            <li className="flex">
              <span className="opacity-50">
                <MdOutlineElectricalServices className="text-red600 mr-1 text-xl" />
              </span>{" "}
              <span className="opacity-70 text-xs">No power outlet</span>
            </li>
            <li className="flex">
              <span className="opacity-50">
                <PiVideo className="text-orange500 mr-1 text-xl" />
              </span>
              <span className="opacity-70  text-xs"> No entertainment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
