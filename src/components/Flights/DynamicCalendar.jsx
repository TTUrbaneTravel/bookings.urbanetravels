import React, { useState, useEffect } from "react";
import { generateFareData, renderFareCalendar, handleCalendarNavigation } from "./renderFareCalendar";

const DynamicCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split("T")[0]);
  const [fareData, setFareData] = useState([]);

  useEffect(() => {
    const newFareData = generateFareData(today, 30);
    setFareData(newFareData);
  }, []);

  const { handleNextMonth, handlePrevMonth } = handleCalendarNavigation(currentMonth, setCurrentMonth, today);

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="px-3 py-1 bg-gray200 rounded">← Prev</button>
        <h2 className="text-xl font-bold">{currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button onClick={handleNextMonth} className="px-3 py-1 bg-gray200 rounded">Next →</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {renderFareCalendar(currentMonth, fareData, selectedDate, setSelectedDate)}
      </div>
    </div>
  );
};

export default DynamicCalendar;
