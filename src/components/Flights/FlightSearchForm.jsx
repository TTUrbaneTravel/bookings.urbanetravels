import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  generateFareData,
  handleCalendarNavigation,
  renderFareCalendar,
} from "../../services/fareCalendarService";

const gradients = [
  "linear-gradient(55deg,rgb(234, 169, 244),rgb(251, 146, 60))",
  "linear-gradient(55deg,rgb(251, 113, 133),rgb(251, 146, 60))",
  "linear-gradient(55deg,rgb(248, 113, 113),rgb(251, 146, 60)",
  "linear-gradient(55deg,rgba(255, 205, 4, 0.97),rgb(96, 165, 250))",
  "linear-gradient(55deg,rgb(192, 132, 252),rgb(251, 146, 60))",
];

const FlightSearch = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    // Function to set gradient based on day
    // const changeBackground = () => {
    //   const dayIndex = new Date().getDate() % gradients.length;
    //   setGradient(gradients[dayIndex]);
    // };

    const changeBackground = () => {
      const index = new Date().getMinutes() % gradients.length; // Change every minute
      setGradient(gradients[index]);
    };

    changeBackground(); // Set initial gradient

    const interval = setInterval(() => {
      changeBackground();
    }, 60000); // Change every 24 hours //86400000

    return () => clearInterval(interval);
  }, []);

  const [tripType, setTripType] = useState("One Way");

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const navigate = useNavigate();
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [travelClass, setTravelClass] = useState("Economy/Premium Economy");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTravellersChange = (type, value) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevents the default button behavior
    setShowDropdown((prev) => !prev);
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    const formData = {
      tripType: tripType,
      from: document.getElementById("from").value,
      to: document.getElementById("to").value,
      departDate: document.getElementById("depart-date").value,
      departTime: document.getElementById("depart-time").value,
      returnDate: document.getElementById("return-date").value,
      returnTime: document.getElementById("return-time").value,
      airlinePreference: document.querySelector("select").value,
      travellers,
      travelClass,
      checkboxes: [
        "Direct Flight Only",
        "Refundable Only",       
        "International Return Oneway",
      ].reduce((acc, option) => {
        acc[option] = document.getElementById(`checkbox-${option}`).checked;
        return acc;
      }, {}),
    };

    sessionStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form data saved to sessionStorage!");

    navigate("/flightsfilteration", { state: formData });
  };

  // "Is Personal Booking",
  // "Is Guest Booking",

  const [multiCityFields, setMultiCityFields] = useState([
    { from: "", to: "", departDate: "", departTime: "" },
    { from: "", to: "", departDate: "", departTime: "" },
  ]);

  const handleMultiCityChange = (index, field, value) => {
    const updatedFields = [...multiCityFields];
    updatedFields[index][field] = value;
    setMultiCityFields(updatedFields);
  };

  const addMultiCityField = () => {
    setMultiCityFields([
      ...multiCityFields,
      { from: "", to: "", departDate: "", departTime: "" },
    ]);
  };

  const deleteMultiCityField = (index) => {
    const updatedFields = multiCityFields.filter((_, i) => i !== index);
    setMultiCityFields(updatedFields);
  };

  const [additionalOptions, setAdditionalOptions] = useState({
    directFlightOnly: false,
    refundableOnly: false,
    // personalBooking: false,
    // guestBooking: false,
    internationalReturnOneway: false,
  });

  // Handle additional options change
  const handleOptionChange = (option) => {
    setAdditionalOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  // Handle form submission
  const handleNavigationMulticity = (e) => {
    e.preventDefault();

    const formData = {
      tripType: tripType,
      multiCityFields,
      departDate: multiCityFields[0].departDate,
      travellers,
      travelClass,
      airlinePreference, // Add airline preference
      checkboxes: [
        "Direct Flight Only",
        "Refundable Only",
        // "Is Personal Booking",
        // "Is Guest Booking",
        "International Return Oneway",
      ].reduce((acc, option) => {
        const checkbox = document.getElementById(`checkbox-${option}`);
        console.log(`Looking for checkbox with id: checkbox-${option}`);
        if (!checkbox)
          console.warn(`Checkbox with id 'checkbox-${option}' not found!`);
        acc[option] = checkbox ? checkbox.checked : false;
        return acc;
      }, {}),
    };
    sessionStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);

    navigate("/flightsfilteration", { state: formData });
  };

  const [airlinePreference, setAirlinePreference] = useState("");
  const handleAirlinePreferenceChange = (e) => {
    setAirlinePreference(e.target.value);
  };

  // dynamic calendar
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedReturnDate, setSelectedReturnDate] = useState("");
  const [selectDepartMuticityDate, setSelectDepartMulticityDate] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarReturnVisible, setCalendarReturnVisible] = useState(false);
  const [fareCalres] = useState(generateFareData(today, 364));

  const { handleNextMonth, handlePrevMonth } = handleCalendarNavigation(
    currentMonth,
    setCurrentMonth,
    today
  );
  const toggleCalendar = () => {
    setCalendarVisible((prev) => !prev);
  };

  const toggleReturnDateCalendar = () => {
    setCalendarReturnVisible((prev) => !prev);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selectedDate first
    setSelectedReturnDate(date); // Then update selectedReturnDate
  };

  const calendarRef = useRef(null);
  const inputRef = useRef(null);

  const inputReturnRef = useRef(null);
  const calendarReturnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setCalendarVisible(false);
      }

      if (
        calendarReturnRef.current &&
        !calendarReturnRef.current.contains(event.target) &&
        inputReturnRef.current &&
        !inputReturnRef.current.contains(event.target)
      ) {
        setCalendarReturnVisible(false); // Hide the calendar if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // calendar for multicity form
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const fareData = generateFareData(today, 364);

  const isNextMonthDisabled = () => {
    const twelveMonthsFromToday = new Date(today);
    twelveMonthsFromToday.setMonth(today.getMonth() + 12);
    return currentMonth > twelveMonthsFromToday;
  };

  const handleDateSelection = (date, index) => {
    const updatedFields = [...multiCityFields];
    updatedFields[index].departDate = date;
    setMultiCityFields(updatedFields);
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  return (
    <div
      className="flex items-center justify-center relative paragraphFonts" //bg-gradient-to-r from-blue300 to-orange400
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: gradient,
        transition: "background 10s ease-in-out",
      }}
    >
      <div className="relative z-10">
        <div className="px-16 py-8 w-full">
          {/* Tabs for Trip Type */}
          <div className="flex mb-4 space-x-4">
            {["One Way", "Round Trip", "Multicity"].map((type) => (
              <button
                key={type}
                className={`cursor-pointer py-1 px-4 rounded-lg text-center font-semibold block mb-1 
                  font-Semibold paragraphFonts transition-all duration-200 ${
                  tripType === type
                    ? "bg-[rgba(0,0,0,0.1)] text-white border" ////bg-gradient-to-r from-orange-300 to-blue400
                    : "text-black hover:bg-[rgba(0,0,0,0.05)]"
                }`}
                onClick={() => setTripType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Conditional Forms */}
          {(tripType === "One Way" || tripType === "Round Trip") && (
            <form onSubmit={handleNavigation}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label
                    htmlFor="from"
                    className="block mb-1 text-sm text-black"
                  >
                    From
                  </label>
                  <input
                    id="from"
                    type="text"
                    placeholder="Enter departure city"
                    className="p-2 border border-customPurple rounded shadow-sm focus:border-blue500 
            focus:ring-blue500 focus:outline-none w-full"
                  />
                </div>
                <div>
                  <label htmlFor="to" className="block mb-1 text-sm text-black">
                    To
                  </label>
                  <input
                    id="to"
                    type="text"
                    placeholder="Enter destination city"
                    className="p-2 border border-customPurple rounded shadow-sm focus:border-blue500 focus:ring-blue500 
                    focus:outline-none w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="depart-date"
                    className="block mb-1 text-sm text-black"
                  >
                    Depart Date
                  </label>
                  <input
                    id="depart-date"
                    type="date"
                    ref={inputRef}
                    value={selectedDate}
                    onClick={toggleCalendar}
                    readOnly
                    className="p-2 border border-customPurple text-gray500 text-sm rounded shadow-sm focus:border-blue500 
            focus:ring-blue500 focus:outline-none w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="depart-time"
                    className="block mb-1 text-sm text-black"
                  >
                    Departure Time
                  </label>
                  <input
                    id="depart-time"
                    type="time"
                    className="p-2 border border-customPurple rounded shadow-sm text-gray500 text-sm 
            focus:border-blue500 focus:ring-blue500 focus:outline-none w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="return-date"
                    className="block mb-1 text-sm text-black"
                  >
                    Return Date
                  </label>
                  <input
                    id="return-date"
                    ref={inputReturnRef}
                    type="date"
                    value={selectedReturnDate}
                    onClick={toggleReturnDateCalendar}
                    readOnly
                    className="p-2 border border-customPurple rounded shadow-sm text-gray500 text-sm 
            focus:border-blue500 focus:ring-blue500 focus:outline-none w-full disabled:cursor-not-allowed"
                    disabled={tripType !== "Round Trip"}
                  />
                </div>
                <div>
                  <label
                    htmlFor="return-time"
                    className="block mb-1 text-sm text-black"
                  >
                    Return Time
                  </label>
                  <input
                    id="return-time"
                    type="time"
                    className="p-2 border border-customPurple rounded shadow-sm text-gray500 text-sm 
            focus:border-blue500 focus:ring-blue500 focus:outline-none w-full disabled:cursor-not-allowed"
                    disabled={tripType !== "Round Trip"}
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-black">
                    Airline Preference
                  </label>
                  <select
                    className="p-2 border border-customPurple rounded shadow-sm text-gray500 text-sm 
            focus:border-blue500 focus:ring-blue500 focus:outline-none w-full"
                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    <option value="Any">Any</option>
                    <option value="Lufthansa">Lufthansa</option>
                  </select>
                </div>
                <div className="relative">
                  {/* Label for Travellers & Class */}
                  <label className="block mb-1 text-sm text-black">
                    Travellers & Class
                  </label>

                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={toggleDropdown}
                    type="button" // Explicitly define it as a button to prevent form submission
                    className="p-2 border text-sm border-customPurple rounded text-gray800 shadow-sm 
               focus:border-blue500 focus:ring focus:outline-none w-full text-left transition"
                  >
                    {`${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants`}{" "}
                    - {travelClass}
                  </button>

                  {/* Dropdown Content */}
                  {showDropdown && (
                    <div className="absolute z-10 bg-white border border-gray300 rounded shadow-lg p-4 w-full">
                      {/* Travellers Section */}
                      <div className="mb-4">
                        <label className="block mb-1 text-sm text-black">
                          Travellers
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {/* Adults Input */}
                          <div>
                            <label className="block mb-1 text-sm text-black">
                              Adults (12y+)
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={travellers.adults}
                              onChange={(e) =>
                                handleTravellersChange(
                                  "adults",
                                  parseInt(e.target.value) || 0
                                )
                              }
                              className="p-2 border border-gray300 rounded w-full"
                            />
                          </div>

                          {/* Children Input */}
                          <div>
                            <label className="block mb-1 text-sm text-black">
                              Children (2y-12y)
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={travellers.children}
                              onChange={(e) =>
                                handleTravellersChange(
                                  "children",
                                  parseInt(e.target.value) || 0
                                )
                              }
                              className="p-2 border border-gray300 rounded w-full"
                            />
                          </div>

                          {/* Infants Input */}
                          <div>
                            <label className="block mb-1 text-sm text-black">
                              Infants (below 2y)
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={travellers.infants}
                              onChange={(e) =>
                                handleTravellersChange(
                                  "infants",
                                  parseInt(e.target.value) || 0
                                )
                              }
                              className="p-2 border border-gray300 rounded w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Travel Class Section */}
                      <div>
                        <label className="block mb-1 text-sm text-black">
                          Travel Class
                        </label>
                        <select
                          value={travelClass}
                          onChange={(e) => setTravelClass(e.target.value)}
                          className="p-2 border border-gray300 rounded w-full"
                        >
                          <option value="Economy/Premium Economy">
                            Economy/Premium Economy
                          </option>
                          <option value="Business">Business</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </div>

                      {/* Apply Button */}
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => toggleDropdown()}
                          className="bg-customPurple text-white px-4 py-2 rounded-md"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* Add checkboxes in the last row */}
                <div className="col-span-4 flex flex-wrap gap-4">
                  {[
                    "Direct Flight Only",
                    "Refundable Only",
                    // "Is Personal Booking",
                    // "Is Guest Booking",
                    "International Return Oneway",
                  ].map((option) => (
                    <div key={option} className="flex items-center text-xs">
                      <input
                        type="checkbox"
                        className="form-check-input mr-2"
                        id={`checkbox-${option}`}
                      />
                      <label
                        className="text-black text-sm"
                        htmlFor={`checkbox-${option}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <button type="submit" className="bg-gradient-to-r from-blue300 to-blue400 hover:bg-gradient-to-r 
                hover:from-blue400 hover:to-blue500 text-white px-6 py-2 rounded-lg transition duration-300 paragraphFonts">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                    className="inline-block"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                  Search Flights
                </button>
              </div>
            </form>
          )}
          {tripType === "Multicity" && (
            <form onSubmit={handleNavigationMulticity}>
              {multiCityFields.map((field, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full"
                  >
                    {/* 'From' Field */}
                    <div>
                      <label
                        htmlFor={`from-${index}`}
                        className="block mb-1 text-sm text-black"
                      >
                        From
                      </label>
                      <input
                        id={`from-${index}`}
                        type="text"
                        placeholder="Enter departure city"
                        className="p-2 border border-customPurple rounded shadow-sm focus:border-blue500 focus:ring-blue500 focus:outline-none w-full"
                        value={field.from}
                        onChange={(e) =>
                          handleMultiCityChange(index, "from", e.target.value)
                        }
                      />
                    </div>
                    {/* 'To' Field */}
                    <div>
                      <label
                        htmlFor="to"
                        className="block mb-1 text-sm text-black"
                      >
                        To
                      </label>
                      <input
                        id={`to-${index}`}
                        type="text"
                        placeholder="Enter destination city"
                        className="p-2 border border-customPurple rounded shadow-sm focus:border-blue500 focus:ring-blue500
                         focus:outline-none w-full"
                        value={field.to}
                        onChange={(e) =>
                          handleMultiCityChange(index, "to", e.target.value)
                        }
                      />
                    </div>
                    {/* 'Depart Date' Field */}
                    <div>
                      <label className="block mb-1 text-sm text-black">
                        Depart Date
                      </label>
                      <input
                        id={`departureDate-${index}`}
                        ref={index === 0 ? inputRef : null}
                        type="text"
                        value={field.departDate}
                        // onClick={toggleCalendar}
                        onClick={() => setIsCalendarOpen(index)}
                        onChange={(e) =>
                          handleMultiCityChange(
                            index,
                            "departDate",
                            e.target.value
                          )
                        }
                        readOnly
                        className="p-2 border border-customPurple text-gray500 text-sm rounded shadow-sm focus:border-blue500 
            focus:ring-blue500 focus:outline-none w-full"
                      />
                    </div>
                    {/* 'Departure Time' Field */}
                    <div>
                      <label
                        htmlFor="depart-time"
                        className="block mb-1 text-sm text-black"
                      >
                        Departure Time
                      </label>
                      <input
                        id={`depart-time-${index}`}
                        type="time"
                        value={field.departTime}
                        onChange={(e) =>
                          handleMultiCityChange(
                            index,
                            "departTime",
                            e.target.value
                          )
                        }
                        className="p-2 border border-customPurple text-gray500 text-sm 
                        rounded shadow-sm focus:border-blue500 focus:ring-blue500 focus:outline-none w-full"
                      />
                    </div>
                    {/* Remove Button */}
                    {index >= 2 && (
                      <div className="col-span-full flex justify-end">
                        <button
                          type="button"
                          onClick={() => deleteMultiCityField(index)}
                          className="text-red500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
              {/* Add Another City Button */}
              <div className="flex justify-center col-span-12 my-2">
                <button
                  type="button"
                  onClick={addMultiCityField}
                  className="text-black hover:underline"
                >
                  + Add Another City
                </button>
              </div>
              {/* Additional Options Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 col-span-12 gap-6 my-2">
                {/* Airline Preference */}
                <div>
                  <label className="block mb-1 text-sm text-black">
                    Airline Preference
                  </label>
                  <select
                    value={airlinePreference}
                    onChange={handleAirlinePreferenceChange}
                    className="p-2 border border-customPurple text-gray500 text-sm 
                  rounded shadow-sm focus:border-blue500 focus:ring-blue500 focus:outline-none w-full"
                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    <option value="Any">Any</option>
                    <option value="Lufthansa">Lufthansa</option>
                  </select>
                </div>
                {/* Travellers & Class */}
                <div className="relative">
                  <label className="block mb-1 text-sm text-black">
                    Travellers & Class
                  </label>
                  <button
                    onClick={toggleDropdown}
                    className="p-2 border paragraphFonts text-gray800 text-sm border-customPurple rounded w-full 
                    text-left focus:outline-none transition"
                  >
                    {`${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants`}{" "}
                    - {travelClass}
                  </button>
                  {showDropdown && (
                    <div className="absolute z-10 bg-white border border-gray300 rounded shadow-lg p-4 w-full">
                      {/* Travellers Section */}
                      <div className="mb-4">
                        <label className="block mb-1 text-sm text-black">
                          Travellers
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block mb-1 text-sm text-black">
                              Adults (12y+)
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={travellers.adults}
                              onChange={(e) =>
                                handleTravellersChange(
                                  "adults",
                                  parseInt(e.target.value)
                                )
                              }
                              className="p-2 border border-gray300 rounded w-full"
                            />
                          </div>

                          <div>
                            <label className="block mb-1 text-sm text-black">
                              Children (2y-12y)
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={travellers.children}
                              onChange={(e) =>
                                handleTravellersChange(
                                  "children",
                                  parseInt(e.target.value)
                                )
                              }
                              className="p-2 border border-gray300 rounded w-full"
                            />
                          </div>

                          <div>
                            <label className="block mb-1 text-sm text-black">
                              Infants (below 2y)
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={travellers.infants}
                              onChange={(e) =>
                                handleTravellersChange(
                                  "infants",
                                  parseInt(e.target.value)
                                )
                              }
                              className="p-2 border border-gray300 rounded w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Travel Class Section */}
                      <div>
                        <label className="block mb-1 text-sm text-black">
                          Travel Class
                        </label>
                        <select
                          value={travelClass}
                          onChange={(e) => setTravelClass(e.target.value)}
                          className="p-2 border border-gray300 rounded w-full"
                        >
                          <option value="Economy/Premium Economy">
                            Economy/Premium Economy
                          </option>
                          <option value="Business">Business</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </div>

                      <div className="flex justify-end mt-4">
                        <button
                          onClick={toggleDropdown}
                          className="bg-customPurple text-white px-4 py-2 rounded-md"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Additional Options */}
              <div className="grid grid-cols-1 lg:grid-cols-6 col-span-12 gap-6 my-2">
                {[
                  "Direct Flight Only",
                  "Refundable Only",
                  // "Is Personal Booking",
                  // "Is Guest Booking",
                  "International Return Oneway",
                ].map((option) => (
                  <div key={option} className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      className="form-check-input mr-2"
                      id={`checkbox-${option}`} // Matches the IDs in JavaScript
                    />
                    <label
                      className="text-black text-sm"
                      htmlFor={`checkbox-${option}`}
                    >
                      {option.replace(/([A-Z])/g, " $1")}{" "}
                      {/* Adds spaces between camelCase words */}
                    </label>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="flex items-center bg-gradient-to-r from-blue300 to-blue400 hover:from-blue400 
                  hover:to-blue500 text-white px-6 py-2 rounded-lg transition duration-300 paragraphFonts"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    className="mr-2"
                    aria-hidden="true"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                  Search Flights
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Calendar Dropdown */}
      {calendarVisible && (
        <div
          ref={calendarRef}
          className="absolute bg-white p-4 rounded-lg shadow-lg z-10"
          style={{
            top: "40%",
            left: "50%",
            transform: "translateX(-25%)",
          }}
        >
          {/* Calendar Header */}
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
            >
              &gt;
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border-t border-gray300">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
              <div key={index} className="text-center text-xs font-bold p-4">
                {day}
              </div>
            ))}
            {renderFareCalendar(
              currentMonth,
              fareCalres,
              selectedDate,
              // setSelectedDate
              (date) => {
                setSelectedDate(date);
                handleDateChange(date);
                setCalendarVisible(false); // Close calendar after selection
              }
            )}
          </div>
        </div>
      )}

      {/* Calendar Dropdown */}
      {calendarReturnVisible && (
        <div
          ref={calendarReturnRef}
          className="absolute bg-white p-4 rounded-lg shadow-lg z-10"
          style={{
            top: "60%",
            left: "10%",
            transform: "translateX(-25%)",
          }}
        >
          {/* Calendar Header */}
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
            >
              &gt;
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border-t border-gray300">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
              <div key={index} className="text-center text-xs font-bold p-4">
                {day}
              </div>
            ))}
            {renderFareCalendar(
              currentMonth,
              fareCalres,
              selectedReturnDate,
              // setSelectedDate
              (date) => {
                setSelectedReturnDate(date);
                setCalendarReturnVisible(false); // Close calendar after selection
              }
            )}
          </div>
        </div>
      )}

      {/* Fare Calendar Modal */}
      {isCalendarOpen !== false && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Calendar Header */}
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
                fareData,
                selectedDate,
                (date) => handleDateSelection(date, isCalendarOpen)
              )}
            </div>
            <button
              onClick={() => setIsCalendarOpen(false)}
              className="absolute m-2 bottom-2 right-2 text-red600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;