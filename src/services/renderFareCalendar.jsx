// renderFareCalendar.js
export const generateFareData = (startDate, numberOfDays) => {
  const fareData = [];
  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    fareData.push({
      DepDate: currentDate.toISOString().split("T")[0],
      TtlFre: Math.floor(Math.random() * (10000 - 3000) + 3000),
      IsCheapest: Math.random() > 0.9,
    });
  }
  return fareData;
};

export const renderFareCalendar = (
  currentMonth,
  fareCalres,
  selectedDate,
  setSelectedDate
) => {
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null); // Empty cells for previous month's trailing days
  }
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    calendarDays.push(date.toISOString().split("T")[0]);
  }

  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null); // Empty cells for next month's leading days
  }

  return calendarDays.map((date, index) => {
    const fare = fareCalres.find((fc) => fc.DepDate === date)?.TtlFre;

    return (
      <div
        key={index}
        className={`py-2 text-center border ${
          selectedDate === date ? "bg-blue-200 text-black" : "bg-white"
        } ${date ? "cursor-pointer hover:bg-gray-100" : ""}`}
        onClick={() => date && setSelectedDate(date)}
      >
        {date && (
          <>
            <div className="text-xs">{new Date(date).getDate()}</div>
            <div className="text-xs text-green-600">
              ₹{fare?.toLocaleString() || "-"}
            </div>
          </>
        )}
      </div>
    );
  });
};

export const handleCalendarNavigation = (
  currentMonth,
  setCurrentMonth,
  today
) => {
  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    const twelveMonthsFromToday = new Date(today);
    twelveMonthsFromToday.setMonth(today.getMonth() + 12);

    if (nextMonth <= twelveMonthsFromToday) {
      setCurrentMonth(nextMonth);
    }
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    if (prevMonth >= today) {
      setCurrentMonth(prevMonth);
    } else {
      setCurrentMonth(today);
    }
  };

  return { handleNextMonth, handlePrevMonth };
};

export const renderFareCalendars = (
  currentMonth,
  fareCalres,
  selectedDate,
  setSelectedDate
) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today’s date

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  let days = [];

  // Fill empty slots before the first day
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="p-4"></div>);
  }

  // Generate days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const isPast = date < today;

    days.push(
      <div
        key={day}
        className={`text-center p-4 border ${
          isPast
            ? "text-gray-400 cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-200"
        } ${
          selectedDate && selectedDate.toDateString() === date.toDateString()
            ? "bg-blue-500 text-white"
            : ""
        }`}
        onClick={() => !isPast && setSelectedDate(date)} // Prevent selection of past dates
      >
        {day}
      </div>
    );
  }

  return days;
};
