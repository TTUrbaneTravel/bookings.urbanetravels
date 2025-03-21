import React, { useState } from "react";

const FlightPriceCalendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth(); // Current month (0-based index, where 0 is January)
  const currentYear = today.getFullYear(); // Current year

  // Set initial selectedMonth and selectedYear to show the current and next month
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Function to generate days for a given month
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  // Function to get random prices
  const getRandomPrice = () => `₹${(Math.random() * 500 + 50).toFixed(2)}`;

  // Function to check if the date is past today
  const isPastDate = (date) => {
    const todayCopy = new Date(today);
    todayCopy.setHours(0, 0, 0, 0); // Set the time to midnight to avoid time comparison

    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0); // Set the time to midnight for comparison

    return selectedDate < todayCopy; // Disable the date if it is earlier than today
  };

  // Function to change the selected month
  const changeMonth = (direction) => {
    let newMonth = selectedMonth + direction;
    let newYear = selectedYear;

    // If it's December (month 11), go to January (month 0) of the next year
    if (newMonth < 0) {
      newMonth = 11; // December
      newYear = selectedYear - 1;
    } else if (newMonth > 11) {
      newMonth = 0; // January
      newYear = selectedYear + 1;
    }

    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
  };

  // Disable the "previous month" button when the selected month is the current month
  const isPreviousDisabled =
    selectedYear === currentYear && selectedMonth === currentMonth;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the days for the current and next month
  const daysInCurrentMonth = getDaysInMonth(selectedMonth, selectedYear);
  const daysInNextMonth = getDaysInMonth(
    (selectedMonth + 1) % 12,
    selectedMonth === 11 ? selectedYear + 1 : selectedYear // Adjust year for January
  );

  return (
    <div className="p-5 bg-gray100">
      <div className="max-w-7xl mx-auto bg-white shadow-lg p-6 rounded-lg paragraphFonts">
        <div className="flex justify-between items-center mb-6">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-left paragraphFonts">
              Flight Price Calendar
            </h2>
            <p className="mb-6 text-left paragraphFonts">
              View Prices for Current and Upcoming Month
            </p>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-end items-center">
            {/* Left Arrow */}
            <div
              onClick={() => changeMonth(-1)}
              className={`w-10 h-10 flex items-center justify-center rounded-l-md cursor-pointer bg-orange400 
                text-white border border-orange500 hover:bg-orange300 ${
                isPreviousDisabled
                  ? "cursor-not-allowed bg-orange100 pointer-events-none"
                  : ""
              }`}
            >
              &lt;
            </div>

            {/* Current Month */}
            <div className="w-24 h-10 flex items-center justify-center text-md font-semibold bg-white 
            text-primary border border-orange500 hover:bg-orange300 hover:text-white">
              {months[selectedMonth]}
            </div>

            {/* Next Month */}
            <div className="w-24 h-10 flex items-center justify-center text-md font-semibold bg-white text-primary 
            border border-orange500 hover:bg-orange300 hover:text-white">
              {selectedMonth === 11
                ? `${months[0]}`
                : `${months[selectedMonth + 1]}`}
            </div>

            {/* Right Arrow */}
            <div
              onClick={() => changeMonth(1)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-r-md bg-orange400 text-white 
              border border-orange500 hover:bg-orange300"
            >
              &gt;
            </div>
          </div>
        </div>

        {/* Calendar for Current and Next Month */}
        <div className="grid grid-cols-2 gap-8">
          {[daysInCurrentMonth, daysInNextMonth].map((daysInMonth, idx) => {
            const monthOffset =
              idx === 0 ? selectedMonth : (selectedMonth + 1) % 12;
            const yearOffset =
              idx === 0
                ? selectedYear
                : selectedMonth === 11
                ? selectedYear + 1
                : selectedYear; // Adjust year for January
            return (
              <div key={monthOffset} className="flex flex-col">
                <h3 className="text-lg font-bold pl-4 mb-4 border-l-4 border-blue500 paragraphFonts">
                  {months[monthOffset]} {yearOffset}
                </h3>
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center font-medium text-gray500 border-b border-gray300"
                      >
                        {day}
                      </div>
                    )
                  )}
                  {Array(daysInMonth[0].getDay())
                    .fill(null)
                    .map((_, index) => (
                      <div key={`empty-${index}`} />
                    ))}
                  {daysInMonth.map((date) => {
                    const isDisabled = isPastDate(date);
                    return (
                      <div
                        key={date.toISOString()}
                        className={`flex flex-col items-center justify-center border border-gray300 rounded-lg p-3 ${
                          isDisabled
                            ? "bg-gray200 text-gray500 cursor-not-allowed"
                            : "bg-gray50 hover:bg-gray100"
                        }`}
                      >
                        <span className="text-sm font-semibold">
                          {date.getDate()}
                        </span>
                        {!isDisabled && (
                          <span className="text-xs text-green600">
                            {getRandomPrice()}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlightPriceCalendar;
