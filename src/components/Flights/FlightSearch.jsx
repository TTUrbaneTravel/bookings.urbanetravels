import { useState, useEffect, useRef } from "react";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {
  renderFareCalendar,
  generateFareData,
  handleCalendarNavigation,
  renderFareCalendars,
} from "../../services/fareCalendarService";
import "../../FlightFilteration.css";

const FlightSearch = () => {
  const location = useLocation();
  const formData = location.state || {}; // Provide default value for formData

  const [multiCityFields, setMultiCityFields] = useState(
    formData.multiCityFields
  ); // JSON data
  const [currentIndex, setCurrentIndex] = useState(1); // Index to track the current city set

  console.log(formData.multiCityFields);
  const defaultCheckboxes = formData.checkboxes || {};

  const [tripType, setTripType] = useState(formData.tripType || "");
  const [from, setFrom] = useState(
    formData.from || multiCityFields[0].from || ""
  );
  const [to, setTo] = useState(
    formData.to ||
      (multiCityFields && multiCityFields.length > 0
        ? multiCityFields[0].to
        : "")
  );

  const [departDate, setDepartDate] = useState(
    formData.departDate || multiCityFields[0].departDate || ""
  );
  const [departureTime, setDepartureTime] = useState(
    formData.departTime || multiCityFields[0].departTime || ""
  );
  const [returnDate, setReturnDate] = useState(formData.returnDate || "");
  const [returnTime, setReturnTime] = useState(formData.returnTime || "");
  // const [checkboxes, setCheckboxes] = useState(defaultCheckboxes);

  const [selectedTripType, setSelectedTripType] = useState(
    formData.tripType || "One Way"
  );
  const [isReturnEnabled, setIsReturnEnabled] = useState(
    formData.tripType === "Round Trip"
  );

  const handleMultiCityChange = (index, field, value) => {
    const updatedFields = [...multiCityFields];
    updatedFields[index][field] = value;
    setMultiCityFields(updatedFields);
  };

  const handleChange = (e) => {
    const selectedType = e.target.value;
    setTripType(selectedType); // Ensure state updates
    setSelectedTripType(selectedType);
    setIsReturnEnabled(selectedType === "Round Trip");

    if (selectedType === "Multicity") {
      setMultiCityFields([
        { from: "", to: "", departDate: "", departTime: "" },
        { from: "", to: "", departDate: "", departTime: "" },
      ]); // Reset multi-city fields
    }
  };

  const handleAddField = () => {
    setMultiCityFields([
      ...multiCityFields,
      { from: "", to: "", departDate: "", departTime: "" },
    ]);
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
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

      if (
        calendarReturnRef.current &&
        !calendarReturnRef.current.contains(event.target) &&
        inputReturnRef.current &&
        !inputReturnRef.current.contains(event.target)
      ) {
        setCalendarReturnVisible(false); // Hide the calendar if clicked outside
      }
    };

    // Add event listener to handle outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [checkboxes, setCheckboxes] = useState({});

  useEffect(() => {
    // If location.state contains checkboxes, initialize it
    if (location.state && location.state.checkboxes) {
      setCheckboxes(location.state.checkboxes);
    }
  }, [location.state]);

  const handleCheckboxChange = (option, checked) => {
    setCheckboxes((prev) => ({
      ...prev,
      [option]: checked,
    }));
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevents the default button behavior
    setShowDropdown((prev) => !prev);
  };

  const [travellers, setTravellers] = useState({
    adults: formData?.travellers?.adults || 0,
    children: formData?.travellers?.children || 0,
    infants: formData?.travellers?.infants || 0,
  });

  const [travelClass, setTravelClass] = useState(formData.travelClass || "");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTravellersChange = (type, value) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

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
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (index, field, value) => {
    setMultiCityFields((prevFields) =>
      prevFields.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSwapM = (index) => {
    setMultiCityFields((prevFields) =>
      prevFields.map((item, i) =>
        i === index ? { ...item, from: item.to, to: item.from } : item
      )
    );
  };

  const handleRemoveField = (index) => {
    setMultiCityFields((prevFields) =>
      prevFields.filter((_, i) => i !== index)
    );
  };

  // dynamic calendar
  // dynamic calendar
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedReturnDate, setSelectedReturnDate] = useState("");
  const [selectDepartMuticityDate, setSelectDepartMulticityDate] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarReturnVisible, setCalendarReturnVisible] = useState(false);
  const [fareCalres] = useState(generateFareData(today, 364));
  const [fareCalresReturn] = useState(generateFareData(today, 364));

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
    if (new Date(date) > new Date(returnDate)) {
      setReturnDate(date);
    }
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
    <div className="p-6 bg-gradient-to-r from-orange300 to-rose400 paragraphFonts">
      {/* Other parts of the component */}
      {/* Radio buttons */}
      <div className="flex items-center gap-6 mb-4">
        <div className="group">
          <label className="flex items-center group-checked:border-primary">
            <input
              type="radio"
              name="tripType"
              value="One Way"
              className="mr-2 p-2 transform scale-150 border-2 border-orange400 group-checked:border-primary"
              checked={selectedTripType === "One Way"} // Dynamically set checked state
              onChange={handleChange} // Update state on selection
            />
            One Way
          </label>
        </div>

        <div className="group">
          <label className="flex items-center group-checked:border-primary">
            <input
              type="radio"
              name="tripType"
              value="Round Trip"
              className="mr-2 p-2 transform scale-150 border-2 border-orange400 group-checked:border-primary"
              checked={selectedTripType === "Round Trip"} // Dynamically set checked state
              onChange={handleChange} // Update state on selection
            />
            Round Trip
          </label>
        </div>

        <div className="group">
          <label className="flex items-center group-checked:border-primary">
            <input
              type="radio"
              name="tripType"
              value="Multicity"
              className="mr-2 p-2 transform scale-150 border-2 border-orange400 group-checked:border-primary"
              checked={selectedTripType === "Multicity"} // Dynamically set checked state
              onChange={handleChange} // Update state on selection
            />
            Multicity
          </label>
        </div>
      </div>
      {/* Input fields */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4 mb-6">
        {tripType === "One Way" || tripType === "Round Trip" ? (
          <>
            <div className="grid grid-cols-12 gap-4 mb-2 col-span-3">
              {/* "From" Input Field */}
              <div className="col-span-5">
                <label htmlFor="from" className="block mb-1 text-sm">
                  From
                </label>
                <input
                  id="from"
                  type="text"
                  placeholder="Delhi (DEL)"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="p-2 pr-5 rounded-lg w-full bg-transparent border-2 border-primary text-white focus:outline-none"
                />
              </div>
              {/* Swap Button */}
              <button
                onClick={handleSwap}
                className="flex items-center justify-center col-span-2 mt-6 text-2xl text-white hover:text-orange400"
                aria-label="Swap From and To"
              >
                <MdOutlineSwapHorizontalCircle />
              </button>
              {/* "To" Input Field */}
              <div className="col-span-5">
                <label htmlFor="to" className="block mb-1 text-sm">
                  To
                </label>
                <input
                  id="to"
                  type="text"
                  placeholder="Mumbai (BOM)"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="departureDate" className="block mb-1 text-sm">
                Departure Date
              </label>
              <input
                id="departureDate"
                ref={inputRef}
                type="text" // Hide default calendar
                value={departDate}
                onClick={toggleCalendar} // Toggle custom calendar
                readOnly // Prevent manual edits
                className="p-2 rounded-lg w-full bg-transparent border-2 border-primary 
                hover:cursor-pointer text-white text-sm focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="departureTime" className="block mb-1 text-sm">
                Departure Time
              </label>
              <input
                id="departureTime"
                type="time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white 
                text-sm hover:cursor-pointer focus:outline-none"
              />
            </div>
          </>
        ) : tripType === "Multicity" ? (
          <>
            {(multiCityFields.length === 0
              ? [
                  { from: "", to: "", departDate: "", departTime: "" },
                  { from: "", to: "", departDate: "", departTime: "" },
                ]
              : multiCityFields
            ).map((field, index) => (
              <div
                key={index}
                className="grid grid-cols-12 col-span-6 gap-4 items-end w-full"
              >
                {/* "From" Input Field */}
                <div className="col-span-3">
                  <label
                    htmlFor={`from-${index}`}
                    className="block mb-1 text-sm"
                  >
                    From
                  </label>
                  <input
                    id={`from-${index}`}
                    type="text"
                    placeholder="Delhi (DEL)"
                    value={field.from || ""}
                    onChange={(e) =>
                      handleInputChange(index, "from", e.target.value)
                    }
                    className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white focus:outline-none"
                  />
                </div>

                {/* Swap Button */}
                <button
                  onClick={() => handleSwapM(index)}
                  className="flex items-center justify-center col-span-1 mt-6 text-2xl text-white hover:text-orange400"
                  aria-label="Swap From and To"
                >
                  <MdOutlineSwapHorizontalCircle />
                </button>

                {/* "To" Input Field */}
                <div className="col-span-3">
                  <label htmlFor={`to-${index}`} className="block mb-1 text-sm">
                    To
                  </label>
                  <input
                    id={`to-${index}`}
                    type="text"
                    placeholder="Mumbai (BOM)"
                    value={field.to || ""}
                    onChange={(e) =>
                      handleInputChange(index, "to", e.target.value)
                    }
                    className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white focus:outline-none"
                  />
                </div>

                {/* Departure Date */}
                <div className="col-span-2">
                  <label
                    htmlFor={`departureDate-${index}`}
                    className="block mb-1 text-sm"
                  >
                    Departure Date
                  </label>
                  <input
                    id={`departureDate-${index}`}
                    ref={index === 0 ? inputRef : null}
                    type="text"
                    value={field.departDate}
                    // onClick={toggleCalendar}
                    onClick={() => setIsCalendarOpen(index)}
                    onChange={(e) =>
                      handleMultiCityChange(index, "departDate", e.target.value)
                    }
                    readOnly
                    className="p-2 rounded-lg w-full bg-transparent border-2 border-primary hover:cursor-pointer 
                    text-white text-sm focus:outline-none"
                  />
                </div>

                {/* Departure Time */}
                <div className="col-span-2">
                  <label
                    htmlFor={`departureTime-${index}`}
                    className="block mb-1 text-sm"
                  >
                    Departure Time
                  </label>
                  <input
                    id={`departureTime-${index}`}
                    type="time"
                    value={field.departTime}
                    onChange={(e) =>
                      handleInputChange(index, "departTime", e.target.value)
                    }
                    className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white text-sm 
                    hover:cursor-pointer focus:outline-none"
                  />
                </div>

                {/* Delete Button (Only for rows beyond the first two) */}
                {index >= 2 && (
                  <div className="col-span-1 flex justify-center">
                    <button
                      onClick={() => handleRemoveField(index)}
                      className="text-xl text-red500 hover:text-red700"
                      aria-label="Remove this row"
                    >
                      ❌
                    </button>
                  </div>
                )}

                {/* Add Button (Only on the last row) */}
                {index === multiCityFields.length - 1 && (
                  <div className="flex justify-start mt-4">
                    <button
                      onClick={handleAddField}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange600"
                    >
                      + Add
                    </button>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : null}

        {/* // Update the "Return Date" and "Return Time" inputs */}
        <div>
          <label htmlFor="returnDate" className="block mb-1 text-sm">
            Return Date
          </label>
          <input
            id="returnDate"
            ref={inputReturnRef}
            type="text"
            value={returnDate}
            onClick={toggleReturnDateCalendar}
            className={`p-2 rounded-lg w-full bg-transparent border-2 focus:outline-none ${
              isReturnEnabled
                ? "border-primary text-white"
                : "border-gray300 text-gray300"
            } text-sm`}
            disabled={!isReturnEnabled} // Enable or disable based on state
            placeholder="Choose Date"
          />
        </div>
        <div>
          <label htmlFor="returnTime" className="block mb-1 text-sm">
            Return Time
          </label>
          <input
            id="returnTime"
            type="time"
            value={returnTime}
            className={`p-2 rounded-lg w-full bg-transparent border-2 ${
              isReturnEnabled
                ? "border-primary text-white"
                : "border-gray300 text-gray300"
            } text-sm`}
            disabled={!isReturnEnabled} // Enable or disable based on state
            placeholder="Choose Time"
          />
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
            className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white text-sm focus:outline-none 
               focus:outline-none w-full text-left transition"
          >
            {`${travellers.adults} Adults, ${travellers.children} Children, ${travellers.infants} Infants`}{" "}
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
            </div>
          )}
        </div>
        <div>
          <label htmlFor="class" className="block mb-1 text-sm">
            Class
          </label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="p-2 rounded-lg w-full bg-transparent border-2 border-primary text-white text-sm focus:outline-none"
          >
            <option
              value="Economy/Premium Economy"
              className="text-sm text-gray700 bg-orange200"
            >
              Economy/Premium Economy
            </option>
            <option
              value="Business"
              className="text-sm text-gray700 bg-orange200"
            >
              Business
            </option>
            <option
              value="First Class"
              className="text-sm text-gray700 bg-orange200"
            >
              First Class
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <button
            className="w-3/4 px-6 py-2 mt-4 bg-gradient-to-r to-blue600 from-purple500 text-white 
                  rounded-lg font-bold paragraphFonts hover:bg-gradient-to-r hover:to-primary hover:from-red500 hover:text-white"
            aria-label="Search Flights"
          >
            SEARCH
          </button>
          {/* <button class="buttonfx slidebottomleft">Slide Corner</button> */}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {Object.keys(checkboxes).map((option) => (
          <label className="flex items-center" key={option}>
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={checkboxes[option]} // Set the checked state based on the value
              onChange={(e) => handleCheckboxChange(option, e.target.checked)} // Handle changes
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      {/* <div>
        <h1>Search Results</h1>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}

      {/* Calendar as Dropdown */}
      {calendarVisible && (
        <div
          ref={calendarRef}
          className="absolute bg-white p-4 rounded-lg shadow-lg z-10"
          style={{ top: "20%", left: "60%", transform: "translateX(-25%)" }}
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
              // setDepartDate
              (date) => {
                setDepartDate(date);
                handleDateChange(date);
                setCalendarVisible(false); // Close calendar after selection
              }
            )}
          </div>
        </div>
      )}

      {/* Calendar as Dropdown */}
      {calendarReturnVisible && (
        <div
          ref={calendarReturnRef}
          className="absolute bg-white p-4 rounded-lg shadow-lg z-10"
          style={{ top: "35%", left: "10%", transform: "translateX(-25%)" }}
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
              fareCalresReturn,
              returnDate,
              // setReturnDate
              (date) => {
                setReturnDate(date);
                setCalendarReturnVisible(false); // Close calendar after selection
              }
            )}
          </div>
        </div>
      )}

      {/* Fare Calendar Modal */}
      {isCalendarOpen !== false && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
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
            <div className="grid grid-cols-7 pb-6">
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
