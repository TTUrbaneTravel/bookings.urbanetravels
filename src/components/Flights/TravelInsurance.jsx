import { React, useState, useRef } from "react";
import Slider from "react-slick";
import { GiHospital } from "react-icons/gi";
import { FaPlaneCircleXmark } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { GiSchoolBag } from "react-icons/gi";
import { TbShoppingBagExclamation } from "react-icons/tb";
import { FcDataProtection } from "react-icons/fc";
import { FaPersonFallingBurst } from "react-icons/fa6";

const TravelInsurance = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index); // Toggle row selection
  };

  const items = [
    {
      icon: <GiSchoolBag />,
      title: "Baggage Loss",
      amount: "INR 10,000",
    },
    {
      icon: <TbShoppingBagExclamation />,
      title: "Baggage Delay",
      amount: "INR 5,000",
    },
    {
      icon: <FaPersonFallingBurst />,
      title: "Personal Accident",
      amount: "INR 7,00,000",
    },
    {
      icon: <GiHospital />,
      title: "Hospitalization",
      amount: "INR 1,00,000",
    },
    {
      icon: <FaPlaneCircleXmark />,
      title: "Trip Cancellation",
      amount: "INR 20,000",
    },
    {
      icon: <LuTimerReset />,
      title: "Trip Delay",
      amount: "INR 10,000",
    },
    {
      icon: <FcDataProtection />,
      title: "Repatriation of Remains",
      amount: "INR 50,000",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const sliderRef = useRef(null);

  // Function to move to the previous slide
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Function to move to the next slide
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="my-3 bg-white rounded-xl shadow-md p-3 border border-gray200">
      <div className="rounded-lg paragraphFonts text-center ">
        <h2 className="text-lg font-semibold text-lime700">
          Travel with peace of mind, thanks to Urbane Travel.
        </h2>
        <p className="text-sm text-gray600">
          "Travel with peace of mind, thanks to Urbane Travel. Our travel
          insurance covers trip cancellations, baggage loss, and medical
          emergencies, ensuring a worry-free journey."
          {/* Upon Selecting Travel Insurance, You accept the
          <a href="#" className="text-blue-600 underline">
            {" "}
            Terms and Conditions
          </a>{" "}
          of the travel insurance policy. */}
        </p>
      </div>

      <div className="m-6 relative paragraphFonts">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-lime200 rounded-md text-xl text-lime600 font-semibold">
              {/* <th className="py-2 px-4 text-left font-semibold text-sm">
                Icon
              </th> */}
              <th className="py-2 px-4 text-left font-semibold text-sm">
                Title
              </th>
              <th className="py-2 px-4 text-left font-semibold text-sm">
                Sum Insured
              </th>
            </tr>
          </thead>
          <tbody className="">
            {items.map((item, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className={`cursor-pointer ${
                  selectedRow === index ? "bg-lime100" : ""
                } border-b border-gray200`}
              >
                <td className="flex">
                  <span className="py-2 px-4 text-center text-4xl text-lime500">
                    {item.icon}
                  </span>
                  <span className="py-2 text-sm px-4 mt-2 font-semibold">
                    {item.title}
                  </span>
                </td>
                <td className="py-2 px-4 text-gray600 font-semibold text-xs">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="insurance"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={() => setSelectedOption("yes")}
            className="form-radio text-purple600"
          />
          <span className="text-gray700 text-sm paragraphFonts">
            Yes, I want to Ensure a worry-free journey with travel insurance.
          </span>
        </label>
        {selectedOption === "yes" && (
          <p className="bg-violet100 text-violet700 text-xs p-2 rounded-md paragraphFonts">
            Over 36% of our customers opt for trip insurance for added security.
          </p>
        )}
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="insurance"
            value="no"
            checked={selectedOption === "no"}
            onChange={() => setSelectedOption("no")}
            className="form-radio text-purple600"
          />
          <span className="text-gray700 text-sm paragraphFonts">
            No, I do not want to insure my trip.
          </span>
        </label>
      </div>
    </div>
  );
};

export default TravelInsurance;
