import React from 'react';
import FlightSearch from '../../components/Flights/FlightSearchForm';
import FlightPriceCalendar from '../../components/Flights/FlightPriceCalendar';
import WhyBookWithUs from '../../components/Flights/WhyBookWithUs';
import TopFlightRoutes from '../../components/Flights/TopFlightRoutes';
import FlightFAQ from '../../components/Flights/FlightFAQ';
import BookingHome from '../../components/BookingHome';
import { FaRegPaperPlane } from 'react-icons/fa';
import { IoAirplaneOutline } from 'react-icons/io5';
import { FaPlaneDeparture } from 'react-icons/fa6';
import { BsAirplaneEngines } from 'react-icons/bs';
import { PiAirplaneTiltDuotone } from 'react-icons/pi';

const Flights = () => {
  const planeIcon = <FaRegPaperPlane size={12} className="text-blue-500" />;

  const plane1Icon = (
    <BsAirplaneEngines size={16} className="text-orange-400" />
  );

  const flightIcon = <IoAirplaneOutline size={18} className="text-blue-500" />;

  const flowerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="14px"
      fill="#ffff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-.91-.52-1.95-.8-3.01-.8-1.02 0-2.05.26-2.99.8-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-.94-.54-1.97-.8-2.99-.8-1.05 0-2.1.28-3.01.8 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19.91.52 1.95.8 3.01.8 1.02 0 2.05-.26 2.99-.8.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54.94.54 1.97.8 2.99.8 1.05 0 2.1-.28 3.01-.8-.01-2.07-1.08-4.08-3-5.19zm-2.54-3.88c.21-.17.38-.29.54-.37.61-.35 1.3-.54 2-.54.27 0 .53.03.79.08-.31.91-.94 1.69-1.78 2.18-.17.1-.36.18-.58.27l-1.38.52c-.17-.46-.41-.87-.72-1.24l1.13-.9zM12 3.37c.63.72 1 1.66 1 2.63 0 .19-.02.41-.05.63l-.23 1.44C12.48 8.03 12.24 8 12 8s-.48.03-.71.07l-.23-1.44C11.02 6.41 11 6.19 11 6c0-.98.37-1.91 1-2.63zM4.51 7.68c.26-.06.53-.08.8-.08.69 0 1.38.18 1.99.54.15.09.32.2.49.35l1.15.96c-.3.36-.53.76-.7 1.2l-1.38-.52c-.21-.09-.4-.18-.56-.27-.87-.5-1.49-1.27-1.79-2.18zm3.33 7.79c-.21.17-.38.29-.54.37-.61.35-1.3.54-2 .54-.27 0-.53-.03-.79-.08.31-.91.94-1.69 1.78-2.18.17-.1.36-.18.58-.27l1.38-.52c.16.46.41.88.72 1.24l-1.13.9zM12 20.63c-.63-.72-1-1.66-1-2.63 0-.2.02-.41.06-.65l.22-1.42c.23.04.47.07.72.07.24 0 .48-.03.71-.07l.23 1.44c.04.22.06.44.06.63 0 .98-.37 1.91-1 2.63zm6.69-4.24c-.69 0-1.38-.18-1.99-.54-.18-.1-.34-.22-.49-.34l-1.15-.96c.3-.36.54-.76.7-1.21l1.38.52c.22.08.41.17.57.26.85.49 1.47 1.27 1.78 2.18-.27.07-.54.09-.8.09z" />
    </svg>
  );

  const flightTakeOffIcon = (
    <PiAirplaneTiltDuotone size={16} className="text-blue-600" />
  );

  const flightLandIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="14px"
      fill="#ffff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M2.5 19h19v2h-19v-2zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l16.57 4.44z" />
    </svg>
  );

  const planeDeparture = <FaPlaneDeparture size={12} color="white" />;

  // Store icons in an array
  const icons = [
    planeIcon,
    flightIcon,
    flowerIcon,
    flightTakeOffIcon,
    flightLandIcon,
    planeDeparture,
    plane1Icon,
  ];

  // Function to get a random icon
  const getRandomIcon = () => icons[Math.floor(Math.random() * icons.length)];

  return (
    <>
      <BookingHome />
      <FlightSearch />
      <TopFlightRoutes />
      <FlightPriceCalendar />
      <WhyBookWithUs />
      <FlightFAQ />
    </>
  );
};

export default Flights;
