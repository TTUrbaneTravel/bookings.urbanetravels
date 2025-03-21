import React, { useState, useRef, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { LuReceiptIndianRupee } from "react-icons/lu";
import { GiFastArrow } from "react-icons/gi";
import { useLocation } from "react-router-dom";
// import {
//   renderFareCalendar,
//   generateFareData,
//   handleCalendarNavigation,
// } from "../../services/renderFareCalendar"; // Import the service

import {
  generateFareData,
  handleCalendarNavigation,
  renderFareCalendar,
} from "../../services/fareCalendarService";

const FareCalendar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    cheapest: false,
    fastest: false,
  });

  const handleFilterChange = (filterName) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };
  // Filter button data
  const filterButtons = [
    {
      name: "cheapest",
      label: "Cheapest",
      icon: <LuReceiptIndianRupee size={25} />,
      color: selectedFilters.cheapest
        ? "bg-yellow300 text-white"
        : "text-yellow400",
    },
    {
      name: "fastest",
      label: "Fastest",
      icon: <GiFastArrow size={25} />,
      color: selectedFilters.fastest
        ? "bg-blue400 text-white"
        : "text-blue700",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of both the input and the calendar
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setCalendarVisible(false); // Hide the calendar if clicked outside
      }
    };

    // Add event listener to handle outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const formData = location.state;

  // Retrieve saved form data from sessionStorage
  const savedFormData = JSON.parse(sessionStorage.getItem("formData"));

  // Check if departDate is available, fallback to today's date
  const defaultStartDate = savedFormData?.departDate
    ? new Date(savedFormData.departDate)
    : new Date();

  const today = new Date();
  const [fareCalres] = useState(generateFareData(today, 364));
  const [departDate, setDepartDate] = useState(formData.departDate || "");
  const [currentMonth, setCurrentMonth] = useState(today);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [visibleDates, setVisibleDates] = useState([]); // Initialize with an empty array
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  const { handleNextMonth, handlePrevMonth } = handleCalendarNavigation(
    currentMonth,
    setCurrentMonth,
    today
  );

  const isNextMonthDisabled = () => {
    const twelveMonthsFromToday = new Date(today);
    twelveMonthsFromToday.setMonth(today.getMonth() + 12);
    return currentMonth > twelveMonthsFromToday;
  };

  const toggleCalendar = () => {
    setCalendarVisible((prev) => !prev);
  };

  // Initialize visibleDates based on departDate or default to the first 7 dates
  useEffect(() => {
    if (departDate) {
      const selectedIndex = fareCalres.findIndex(
        (fc) => fc.DepDate === departDate
      );
      if (selectedIndex >= 0) {
        const start = Math.max(0, selectedIndex - 3);
        setVisibleDates(fareCalres.slice(start, start + 7));
      }
    } else {
      setVisibleDates(fareCalres.slice(0, 7));
    }
  }, [departDate, fareCalres]);

  const handleNext = () => {
    const lastVisibleDate = visibleDates[visibleDates.length - 1];
    const lastIndex = fareCalres.findIndex(
      (fc) => fc.DepDate === lastVisibleDate.DepDate
    );
    if (lastIndex + 1 < fareCalres.length) {
      setVisibleDates(fareCalres.slice(lastIndex + 1, lastIndex + 8));
    }
  };

  const handlePrev = () => {
    const firstVisibleDate = visibleDates[0];
    const firstIndex = fareCalres.findIndex(
      (fc) => fc.DepDate === firstVisibleDate.DepDate
    );
    if (firstIndex > 0) {
      setVisibleDates(fareCalres.slice(firstIndex - 7, firstIndex));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of both the input and the calendar
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setCalendarVisible(false); // Hide the calendar if clicked outside
      }
    };

    // Add event listener to handle outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="py-2">
      <div className="bg-white rounded-lg shadow-md p-4 paragraphFonts">
        {/* Sort Buttons */}
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            {filterButtons.map(({ name, label, icon, color }) => (
              <label
                key={name}
                className={`p-2 flex items-center rounded-lg shadow-md paragraphFonts cursor-pointer ${color} 
                hover:bg-yellow300 hover:text-white`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedFilters[name]}
                  onChange={() => handleFilterChange(name)}
                />
                {icon}
                <span className="ml-2">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic Dates Navigation */}
        <div className="mt-4 flex items-center">
          <button
            className="p-2 bg-blue200 border-1 border-blue400 rounded-md text-blue700 text-2xl hover:bg-blue300"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <div className="flex-1 flex justify-center overflow-x-auto space-x-4">
            {visibleDates.map((fc, index) => (
              <div
                key={index}
                className={`flex flex-col items-center py-2 px-6 border rounded-lg cursor-pointer ${
                  fc.DepDate === departDate
                    ? "border-blue500"
                    : "hover:bg-blue200 border-gray200"
                } ${
                  fc.IsCheapest ? "bg-green100 border-green400" : "bg-white"
                }`}
                onClick={() => setDepartDate(fc.DepDate)}
              >
                <span className="font-medium">
                  {new Date(fc.DepDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="text-sm text-red500">
                  ₹{fc.TtlFre.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <button
            className="p-2 bg-blue200 border-1 border-blue400 rounded-md text-blue700 text-2xl hover:bg-blue300"
            onClick={handleNext}
          >
            &gt;
          </button>

          {/* Select Date Button */}
          <div className="flex justify-center ml-2">
            <button
              className="flex items-center text-orange500"
              onClick={toggleCalendar}
            >
              <PiCalendarDotsDuotone size={45} />
            </button>
          </div>
        </div>

        {/* Calendar as Dropdown */}
        {calendarVisible && (
          <div
            ref={calendarRef}
            className="absolute bg-white p-4 rounded-lg shadow-lg z-10"
            style={{ top: "75%", left: "75%", transform: "translateX(-25%)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                className="p-2 bg-gray200 rounded-full hover:bg-gray300"
                onClick={handlePrevMonth}
              >
                &lt;
              </button>
              <h2 className="text-lg font-bold">
                {currentMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <button
                className="p-2 bg-gray200 rounded-full hover:bg-gray300"
                onClick={handleNextMonth}
                disabled={isNextMonthDisabled()}
              >
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 border-t border-gray300">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
                <div key={index} className="text-center text-xs font-bold p-4">
                  {day}
                </div>
              ))}
              {renderFareCalendar(
                currentMonth,
                fareCalres,
                departDate,
                // setDepartDate,
                (date) => {
                  setDepartDate(date);
                  setCalendarVisible(false); // Close calendar after selection
                }
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FareCalendar;
