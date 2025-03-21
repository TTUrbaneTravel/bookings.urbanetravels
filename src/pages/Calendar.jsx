import Breadcrumb from '../components/Agent/Breadcrumb';
import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventData, setEventData] = useState({
    startDate: '',
    endDate: '',
    eventName: '',
    notes: '',
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let days = [];
  // Previous month's empty cells
  for (let i = 0; i < firstDay; i++) {
    days.push(null); // Add empty slots instead of previous month’s dates
  }

  // Current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, currentMonth: true });
  }

  // Next month's empty cells to complete the grid
  while (days.length % 7 !== 0) {
    days.push(null); // Add empty slots instead of next month’s dates
  }

  // Convert `days` array into a 2D array for weeks
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const changeMonth = (offset) => {
    setCurrentDate(new Date(year, month + offset, 1));
  };

  const changeYear = (offset) => {
    setCurrentDate(new Date(year + offset, month, 1));
  };

  const openModal = (day) => {
    if (day.currentMonth) {
      setSelectedDate(new Date(year, month, day.day));
      setEventData({ startDate: '', endDate: '', eventName: '', notes: '' });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data Submitted: ', eventData);
    closeModal();
  };

  return (
    <>
      <Breadcrumb
        pageName="Calendar"
        breadcrumbs={[{ name: 'Calendar /', link: '#' }]}
      />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
        <div className="flex items-center justify-between mb-4">
          {/* Year Navigation */}
          <button
            onClick={() => changeYear(-1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            ⏮
          </button>

          {/* Month Navigation */}
          <button
            onClick={() => changeMonth(-1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            ❮
          </button>

          <h2 className="text-lg font-bold">
            {currentDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>

          <button
            onClick={() => changeMonth(1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            ❯
          </button>

          <button
            onClick={() => changeYear(1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            ⏭
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary1 text-white">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                (d, index) => (
                  <th
                    key={index}
                    className={`flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5 ${
                      index === 0
                        ? 'rounded-tl-sm'
                        : index === 6
                          ? 'rounded-tr-sm'
                          : ''
                    }`}
                  >
                    <span className="hidden lg:block">
                      {d === 'Sun'
                        ? 'Sunday'
                        : d === 'Mon'
                          ? 'Monday'
                          : d === 'Tue'
                            ? 'Tuesday'
                            : d === 'Wed'
                              ? 'Wednesday'
                              : d === 'Thu'
                                ? 'Thursday'
                                : d === 'Fri'
                                  ? 'Friday'
                                  : 'Saturday'}
                    </span>
                    <span className="block lg:hidden">{d}</span>
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex} className="grid grid-cols-7">
                {week.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    onClick={day ? () => openModal(day) : null} // Only allow clicks for valid days
                    className={`ease relative h-20 border border-stroke p-2 md:h-25 md:p-6 xl:h-31 transition duration-500 
            ${day ? 'cursor-pointer hover:bg-gray dark:hover:bg-meta-4 text-bodydark1 dark:text-white' : 'bg-gray-200 opacity-50 cursor-not-allowed'}
          `}
                  >
                    {day && <span className="font-medium">{day.day}</span>}
                    {day && day.day === 1 && (
                      <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                        <span className="group-hover:text-primary1 md:hidden">
                          More
                        </span>
                        <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary1 bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100">
                          <span className="event-name text-sm font-semibold text-baseColor dark:text-white">
                            Redesign Website
                          </span>
                          <span className="time text-sm font-medium text-baseColor dark:text-white">
                            1 Dec - 2 Dec
                          </span>
                        </div>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-baseColor bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-96 mt-12">
            <h2 className="text-xl font-bold m-4">
              Add Event - {selectedDate?.toDateString()}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="p-2">
                <div className="mb-2.5">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                    Start Date <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={eventData.startDate}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                    required
                  />
                </div>

                <div className="mb-2.5">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                    End Date <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={eventData.endDate}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                  />
                </div>

                <div className="mb-2.5">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                    Event Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="eventName"
                    placeholder="Event Name"
                    value={eventData.eventName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-2.5 block text-baseColor dark:text-white">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    placeholder="Notes"
                    value={eventData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary1 active:border-primary1 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary1"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex w-full justify-center border border-primary1 rounded bg-white p-3 font-medium text-primary1"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary1 p-3 font-medium text-gray"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;