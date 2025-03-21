import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleSharp } from "react-icons/io5";
import FareSidebar from "../Flights/FareSidebar";
import indigoImg from "../../assets/collaboration/indigo.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import airIndiaImg from "../../assets/collaboration/international/airindia.png";

const FlightCard = ({ index, flight }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/flightreviewpage");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFareTitle, setSelectedFareTitle] = useState("SAVER");
  const [selectedFare, setSelectedFare] = useState("5499");
  const [selectBgColor, getBgColor] = useState("bg-blue500");

  const handleBookNow = (selectedFare) => {
    console.log("Selected Fare Details:", selectedFare);
    setSelectedFareTitle(selectedFare.title);
    setSelectedFare(selectedFare.amount);
    getBgColor(selectedFare.color);
  };

  const calculateLayover = (arrivalTime, departureTime) => {
    const arrival = new Date(`2025-01-29T${arrivalTime}`);
    const departure = new Date(`2025-01-29T${departureTime}`);
    const layover = Math.abs(departure - arrival) / (1000 * 60);
    return `${Math.floor(layover / 60)}h ${layover % 60}m`;
  };

  const LAYOVER = calculateLayover("22:10", "23:45"); // Example times

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { OG, DT, AC, FN, CB, DTM, DDT, DTER, DUR, ATM, ADT, ATER } = {
    OG: "DEL",
    DT: "BOM",
    AC: "SG",
    FN: "169",
    CB: "ECONOMY",
    DTM: "21:40",
    DDT: "Mon-27Jan2025",
    DTER: "1D",
    DUR: "02h 10m",
    ATM: "23:50",
    ADT: "Mon-27Jan2025",
    ATER: "1",
  };

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Flight Information",
    "Fare Details & Rules",
    "Baggage Information",
    "Cancellation & Change Rules",
  ];

  return (
    <>
      <div className="pl-4 rounded-lg m-3 shadow-lg relative">
        {/* Flight Card */}

        <div className="grid grid-cols-6 gap-3 relative">
          {/* Column 1: Airline Logo */}
          <div className="col-span-1 flex gap-8 items-center paragraphFonts">        

            {Array.isArray(flight.flights) && flight.flights.length === 0 ? (
              <img src="" alt="Airline Logo" className="w-14 h-12 rounded-md" />
            ) : (
              <img
                src={
                  flight.flights[0] && flight.flights.length % 2 === 0
                    ? airIndiaImg
                    : indigoImg
                }
                alt="Airline Logo"
                className="w-14 h-12 rounded-md"
              />
            )}

            <h3 className="font-semibold text-md">
              SpiceJet <br />
              <span className="text-sm text-blue500">6E-179</span>
              <br />
              <span
                className={`${selectBgColor} text-white text-[10px] py-1 px-2 font-bold rounded-full`}
              >
                {selectedFareTitle}
              </span>
            </h3>
          </div>
          {/* Column 2: Airline Info */}
          <div className="col-span-1 flex flex-col items-center justify-center paragraphFonts">
            <h1 className="text-3xl font-semibold text-gray800">21:40</h1>
            <p className="text-md text-blue700">Delhi</p>
          </div>
          {/* Column 3: Flight Duration */}
          <div className="col-span-1 flex flex-col items-center justify-center paragraphFonts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 1024 1280"
              className="w-64 h-16 mt-2" // Updated width (w-64) and color (text-blue500)
              style={{ fill: "gray" }} // Set fill to blue or any color you prefer
            >
              <g>
                <path d="M253.5,88.3c-89.1,0-161.6,72.5-161.6,161.6c0,29,8.3,60.2,24.8,92.8c12.9,25.7,30.9,52.3,53.4,79.2 c38.1,45.5,75.6,75.7,77.2,76.9l6.3,5l6.2-5c1.6-1.3,39.1-31.6,77.2-77.2c22.5-26.9,40.4-53.6,53.3-79.2 c16.4-32.6,24.8-63.7,24.8-92.5C415.1,160.8,342.6,88.3,253.5,88.3z M253.5,295.6c-25.2,0-45.7-20.5-45.7-45.7 c0-25.2,20.5-45.7,45.7-45.7s45.7,20.5,45.7,45.7C299.2,275.1,278.7,295.6,253.5,295.6z" />
                <path d="M865.1,402.3c-43.2-43.2-100.6-66.9-161.6-66.9S585,359.2,541.9,402.3c-43.2,43.2-66.9,100.6-66.9,161.6 c0,41.1,11.8,85.4,35.2,131.9c18.5,36.7,44.2,74.8,76.4,113.3c54.7,65.3,108.5,108.5,110.7,110.3l6.3,5l6.2-5 c2.3-1.8,56-45.3,110.7-110.7c32.2-38.6,57.9-76.7,76.4-113.4c23.4-46.4,35.2-90.6,35.2-131.4C932.1,502.9,908.3,445.5,865.1,402.3 z M703.5,627.6c-35.1,0-63.6-28.5-63.6-63.6c0-35.1,28.5-63.6,63.6-63.6s63.6,28.5,63.6,63.6C767.1,599,738.6,627.6,703.5,627.6z" />
                <path d="M324.2,516.5c-4.5-1-9.1-1.5-13.8-1.5h-16.8v-40h16.8c7.5,0,15,0.8,22.2,2.4L324.2,516.5z" />
                <path d="M486.3,895.7v40h66.3v-40H486.3z M363.2,895.7v40h66.3v-40H363.2z M260.7,895.7c-5.8,0-11.5-0.5-17.1-1.4 l-6.5,39.5c7.8,1.3,15.7,1.9,23.6,1.9h45.8v-40H260.7z M164.8,833.8l-36.4,16.5c10.6,23.4,27.3,43.7,48.3,58.6l23.2-32.6 C184.6,865.5,172.5,850.8,164.8,833.8z M137.5,713.6c-13.6,21.8-21.2,46.9-22,72.7l40,1.1c0.5-18.7,6-36.9,15.9-52.6L137.5,713.6z M256.3,645.4c-25.8,0.8-50.9,8.4-72.7,22l21.3,33.9c15.8-9.9,34-15.4,52.6-15.9L256.3,645.4z M357.8,624.8 c-11.8,12.6-27.8,19.9-44.9,20.5l1.5,40c27.7-1.1,53.5-12.8,72.5-33.1L357.8,624.8z M391.4,513.2l-30.8,25.5 c9.6,11.6,14.9,26.4,14.9,41.5c0,1.9-0.1,3.8-0.2,5.7l39.8,3.4c0.3-3,0.4-6.1,0.4-9.1C415.5,555.8,406.9,532,391.4,513.2z" />
                <rect x="609.5" y="895.7" width="55" height="40" />
              </g>
            </svg>
            <p className="text-md text-gray500 paragraphFonts">02h 10m</p>
            {flight.flights[0].stops === 0 ? (
              <p className="text-xs text-gray500 paragraphFonts">Nonstop</p>
            ) : flight.flights[0].stops === 1 ? (
              <p className="text-xs text-gray500 paragraphFonts">1 Stop</p>
            ) : (
              <p className="text-xs text-gray500 paragraphFonts">2 Stops</p>
            )}
          </div>
          {/* Column 4: Arrival Info */}
          <div className="col-span-1 flex flex-col items-center justify-center paragraphFonts">
            <p className="text-3xl font-semibold text-gray800">23:50</p>
            <p className="text-md text-blue700">Mumbai</p>
          </div>
          {/* Column 5: Price and more fares */}
          <div className="col-span-1 flex flex-col items-center justify-center paragraphFonts">
            <p className="text-xl font-bold text-red600">₹{selectedFare}</p>
            <button
              onClick={toggleSidebar}
              className="text-xs text-lime800 mt-2 border p-1 font-semibold rounded-md border-lime500
          hover:border-lime400 bg-lime200 transition duration-300"
            >
              + View Prices
            </button>

            {/* Sidebar for fare details */}
            {sidebarOpen && (
              <FareSidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                onBookNow={handleBookNow}
                parentSelectedFare={{ title: selectedFareTitle }}
              />
            )}
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center paragraphFonts">
            <button
              onClick={handleNavigation}
              className="mt-2 bg-gradient-to-r from-blue400 to-purple800 text-white px-6 py-2 rounded-lg 
              font-semibold hover:bg-orange600"
            >
              Book Now
            </button>
          </div>
          <div className="col-span-12 flex justify-between items-center space-x-6">
            <p className="text-xs font-semibold text-purple800 paragraphFonts">
              URBANETAKEOFF: Get extra Rs.500 instant discount on this flight
            </p>
            <button
              className="text-xs font-semibold text-blue700 paragraphFonts px-4 py-2 rounded hover:text-blue800 
              hover:border-blue800 flex items-center"
              onClick={toggleAccordion}
            >
              Flight Details <RiArrowDropDownLine size={15} />
            </button>
          </div>
        </div>
        {/* Accordion Section */}
        {isAccordionOpen && (
          <div className="border-t text-gray300 text-sm">
            {/* Tabs */}
            <div className="flex space-x-6 border-b items-center mx-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`py-2 px-8 font-semibold text-xs text-purple600 ${
                    activeTab === index
                      ? "border-b-2 flex-2 paragraphFonts border-violet500 "
                      : "paragraphFonts"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}

              {/* Close button */}
              <button
                className="pl-16 text-end text-red500 hover:text-red400 paragraphFonts"
                onClick={toggleAccordion} // Assuming toggleAccordion closes the accordion
              >
                <IoCloseCircleSharp size={18} />
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === 0 && (
                <div className="paragraphFonts mb-2">
                  {Array.isArray(flight.flights) &&
                  flight.flights.length === 0 ? (
                    <p className="text-center text-gray500">
                      No flight available
                    </p>
                  ) : (
                    flight.flights.map((flight, index) => (
                      <div
                        key={index}
                        className="ml-8 items-center justify-center p-4 border-b"
                      >
                        {/* Flight route */}
                        <div className="text-left text-gray800 font-bold text-md">
                          {flight.origin} ({flight.originCode}) →{" "}
                          {flight.destination} ({flight.destinationCode})
                        </div>

                        <div className="flex flex-wrap items-center space-x-12 mt-2">
                          {/* Airline and flight number */}
                          <div className="w-full md:w-1/5 flex items-center">
                            <img
                              src={flight.airlineLogo}
                              alt="Airline Logo"
                              className="w-10 h-10 object-cover mr-4"
                            />
                            <div>
                              <span className="block text-gray700 text-base font-semibold">
                                {flight.airline || "Unknown Airline"}
                              </span>
                              <span className="block text-sm text-gray500">
                                {flight.flightNumber || ""}
                              </span>
                              <span className="block text-sm text-gray500">
                                {flight.class || "Economy"}
                              </span>
                            </div>
                          </div>

                          {/* Departure info */}
                          <div className="w-full md:w-1/5 text-left">
                            <span className="block text-2xl text-gray700 font-bold">
                              {flight.departureTime || "N/A"}
                            </span>
                            <div className="text-xs font-semibold text-gray600">
                              {flight.origin} ({flight.originCode || "N/A"})
                            </div>
                            <span className="text-xs text-gray600">
                              {flight.departureDate || "N/A"}
                            </span>
                            {flight.departureTerminal && (
                              <div className="text-xs text-gray600">
                                Terminal - {flight.departureTerminal}
                              </div>
                            )}
                          </div>

                          {/* Duration */}
                          <div className="w-full md:w-1/5 text-left">
                            <div className="text-gray600 text-sm flex">
                              ⏳ {flight.duration || "N/A"}
                            </div>
                          </div>

                          {/* Arrival info */}
                          <div className="w-full md:w-1/5 text-left">
                            <span className="block text-2xl text-gray700 font-bold">
                              {flight.arrivalTime || "N/A"}
                            </span>
                            <div className="text-xs font-semibold text-gray600">
                              {flight.destination} (
                              {flight.destinationCode || "N/A"})
                            </div>
                            <span className="text-xs text-gray600">
                              {flight.arrivalDate || "N/A"}
                            </span>
                            {flight.arrivalTerminal && (
                              <div className="text-xs text-gray600 mt-1">
                                Terminal - {flight.arrivalTerminal}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Layover (optional) */}
                        {flight.layover && (
                          <div className="w-full text-center mt-2">
                            <span className="bg-red100 text-red600 text-xs font-semibold px-2 py-1 rounded-full">
                              LAYOVER: {flight.layover}
                            </span>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
              {activeTab === 1 && (
                <div className="flex flex-col md:flex-row gap-4 p-1 rounded-lg paragraphFonts">
                  {/* Summary Section */}
                  <div className="bg-white shadow-md rounded-lg px-2 pb-2">
                    <h4 className="text-lg font-semibold mb-4">1 x Adult</h4>
                    <table className="w-full text-sm border-collapse border border-gray300">
                      <tbody>
                        <tr className="border border-gray300">
                          <td className="px-2 py-1">Total (Base Fare)</td>
                          <td className="px-2 py-1 text-right">₹ 4682</td>
                        </tr>
                        <tr className="border border-gray300">
                          <td className="px-2 py-1">Total Tax</td>
                          <td className="px-2 py-1 text-right">₹ 817</td>
                        </tr>
                        <tr className="border border-gray300 font-semibold">
                          <td className="px-2 py-1">Total (Fee & Surcharge)</td>
                          <td className="px-2 py-1 text-right">₹ 5499</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Fare Rules Section */}
                  <div className="flex-1 bg-white shadow-md rounded-lg px-2 pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-lg font-semibold">Fare Rules</h4>
                      <span className="bg-green100 text-green800 text-xs font-medium px-1 py-1 border border-green800 rounded">
                        Refundable
                      </span>
                    </div>
                    <table className="w-full border-collapse border border-gray300">
                      <thead>
                        <tr className="bg-gray200 text-xs">
                          <th className="border border-gray300 px-2 py-1 text-left">
                            Time Frame to cancel
                          </th>
                          <th className="border border-gray300 px-2 py-1 text-left">
                            Airline Fees
                            <br /> per passenger
                          </th>
                          <th className="border border-gray300 px-2 py-1 text-left">
                            Urbane Fees
                            <br /> per passenger
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-xs">
                          <td className="border border-gray300 px-2 py-1">
                            Cancel Before 96 hours of departure time.
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 3150
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 300
                          </td>
                        </tr>
                        <tr className="text-xs">
                          <td className="border border-gray300 px-2 py-1">
                            Cancel within 96 hours & before 4 hours of departure
                            time.
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 4250
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 300
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-full border-collapse border border-gray300 mt-4">
                      <thead>
                        <tr className="bg-gray200 text-xs">
                          <th className="border border-gray300 px-2 py-1 text-left">
                            Time Frame to reschedule
                          </th>
                          <th className="border border-gray300 px-2 py-1 text-left">
                            Airline Fees
                            <br /> per passenger
                          </th>
                          <th className="border border-gray300 px-2 py-1 text-left">
                            Urbane Fees
                            <br /> per passenger
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-xs">
                          <td className="border border-gray300 px-2 py-1">
                            Reschedule before 96 hours of departure time.
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 2250
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 300
                          </td>
                        </tr>
                        <tr className="text-xs">
                          <td className="border border-gray300 px-2 py-1">
                            Reschedule within 96 hours & before 4 hours of
                            departure time.
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 2950
                          </td>
                          <td className="border border-gray300 px-2 py-1">
                            ₹ 300
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Terms & Conditions</h5>
                      <ul className="list-disc list-inside text-xs text-gray600 space-y-1">
                        <li>
                          Total Rescheduling Charges Airlines Rescheduling fees
                          Fare Difference (if applicable) + Urbane Travels Fees.
                        </li>
                        <li>
                          The airline cancel reschedule fees is indicative and
                          can be changed without any prior notice by the
                          airlines.
                        </li>
                        <li>
                          Urbane Travels does not guarantee the accuracy of
                          cancel reschedule fees.
                        </li>
                        <li>
                          Partial cancellation is not allowed on the flight
                          tickets which are booked under special round trip
                          discounted fares.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="flex-1 bg-white shadow-md rounded-lg p-4 paragraphFonts">
                  <table className="w-full text-sm border-collapse border border-gray300">
                    <thead>
                      <tr className="bg-gray200">
                        <th className="border border-gray300 px-2 py-2 text-left">
                          Airlines
                        </th>
                        <th className="border border-gray300 px-2 py-2 text-left">
                          Check-in Baggage
                        </th>
                        <th className="border border-gray300 px-2 py-2 text-left">
                          Cabin Baggage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray300 px-2 py-1">
                          AirIndia
                          <br />
                          6E-179
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          15kgs
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          7kgs
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border border-gray300 px-2 py-1"
                          colSpan={3}
                        >
                          Baggage information mentioned above is obtained from
                          airline's reservation system, Urbane Travels does not
                          guarantee the accuracy of this information. The
                          baggage allowance may vary according to stop-overs,
                          connecting flight. changes in airline rules. etc.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 3 && (
                <div className="bg-white shadow-md rounded-lg pr-2 py-1 paragraphFonts">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-semibold">Fare Rules</h4>
                    <span className="bg-green100 text-green800 text-xs font-medium px-1 py-1 border border-green800 rounded">
                      Refundable
                    </span>
                  </div>
                  <table className="w-full border-collapse border border-gray300">
                    <thead>
                      <tr className="bg-gray200 text-xs">
                        <th className="border border-gray300 px-2 py-1 text-left">
                          Time Frame to cancelF
                        </th>
                        <th className="border border-gray300 px-2 py-1 text-left">
                          Airline Fees
                          <br /> per passenger
                        </th>
                        <th className="border border-gray300 px-2 py-1 text-left">
                          Urbane Fees
                          <br /> per passenger
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-xs">
                        <td className="border border-gray300 px-2 py-1">
                          Cancel Before 96 hours of departure time.
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 3150
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 300
                        </td>
                      </tr>
                      <tr className="text-xs">
                        <td className="border border-gray300 px-2 py-1">
                          Cancel within 96 hours & before 4 hours of departure
                          time.
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 4250
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="w-full border-collapse border border-gray300 mt-4">
                    <thead>
                      <tr className="bg-gray200 text-xs">
                        <th className="border border-gray300 px-2 py-1 text-left">
                          Time Frame to reschedule
                        </th>
                        <th className="border border-gray300 px-2 py-1 text-left">
                          Airline Fees
                          <br /> per passenger
                        </th>
                        <th className="border border-gray300 px-2 py-1 text-left">
                          Urbane Fees
                          <br /> per passenger
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-xs">
                        <td className="border border-gray300 px-2 py-1">
                          Reschedule before 96 hours of departure time.
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 2250
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 300
                        </td>
                      </tr>
                      <tr className="text-xs">
                        <td className="border border-gray300 px-2 py-1">
                          Reschedule within 96 hours & before 4 hours of
                          departure time.
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 2950
                        </td>
                        <td className="border border-gray300 px-2 py-1">
                          ₹ 300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4">
                    <h5 className="font-semibold mb-2">Terms & Conditions</h5>
                    <ul className="list-disc list-inside text-xs text-gray600 space-y-1">
                      <li>
                        Total Rescheduling Charges Airlines Rescheduling fees
                        Fare Difference (if applicable) + Urbane Travels Fees.
                      </li>
                      <li>
                        The airline cancel reschedule fees is indicative and can
                        be changed without any prior notice by the airlines.
                      </li>
                      <li>
                        Urbane Travels does not guarantee the accuracy of cancel
                        reschedule fees.
                      </li>
                      <li>
                        Partial cancellation is not allowed on the flight
                        tickets which are booked under special round trip
                        discounted fares.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlightCard;