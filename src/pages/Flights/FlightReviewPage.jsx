import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewPage from "../../components/Flights/ReviewPage";
import FlightTicket from "../../components/Flights/FlightTicket";
import PriceSummary from "../../components/Flights/PriceSummary";
import TravelInsurance from "../../components/Flights/TravelInsurance";
import { AiTwotoneMail } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import flightImg from "../../assets/Flight/SeatSelection/flight.png";
import BookingHome from "../../components/BookingHome";

const FlightReviewPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/flighttravellersuserdetails");
  };

  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (showError) setShowError(false);
  };

  const verifyTravellerEmail = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowError(true);
      return;
    }
    console.log("Email Verified: ", email);
    // Add further submission logic here
  };

  const closeErrorMessage = () => {
    setShowError(false);
  };

  return (
    <div className="mt-24">
      <BookingHome/>
      {/* Review Page section */}
      <ReviewPage />
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4 mt-6 mx-16 paragraphFonts">
        {/* FlightTicket taking 8/12 columns */}
        <div className="col-span-8">
          <div className="rounded-lg shadow-md">
            <div className="bg-orange500 flex font-bold text-white px-4 pb-2 text-2xl rounded-t-lg">
              <svg
                fill="#ffffff"
                width="70px"
                height="40px"
                viewBox="0 0 128 100"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                stroke="#ffffff"
              >
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="pLANE">
                    {" "}
                    <path d="M64,73c-1.1,0-2.2,0.4-3,1.2c-0.9,0.8-1.5,2.1-1.5,3.3c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5c0-0.9-0.2-1.7-0.7-2.4 C67,73.7,65.5,73,64,73z M64,80.1c-1.5,0-2.7-1.2-2.7-2.7c0-0.8,0.3-1.5,0.9-2c0.5-0.5,1.1-0.7,1.8-0.7c0.9,0,1.8,0.5,2.3,1.2 c0.3,0.4,0.4,0.9,0.4,1.4C66.7,78.9,65.5,80.1,64,80.1z" />{" "}
                    <path d="M116.8,68.1c-0.2-0.3-0.5-0.5-0.8-0.5H82.6c-0.8-3-2.2-5.9-4.1-8.2c-0.1-0.6-0.3-1.3-0.5-1.9c0,0,0,0,0,0c0,0,0,0,0,0 l0.1,0c-0.7-2.1-1.9-4.1-3.5-5.8l0,0c0,0,0,0,0,0c0,0,0,0,0,0c-2-2-4.4-3.3-7.2-3.9l-0.3-5.3h5.5v-1.8H67l-0.3-5.4 c0-0.5-0.4-0.9-0.9-0.9h-3.6c-0.5,0-0.9,0.4-0.9,0.9L61,40.7h-5.5v1.8h5.5l-0.3,5.3c-2.7,0.6-5.2,2-7.2,3.9c0,0,0,0,0,0 c0,0,0,0,0,0l0,0c-1.6,1.6-2.9,3.6-3.5,5.8l0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,0.6-0.4,1.2-0.5,1.9c-2,2.4-3.4,5.2-4.1,8.2H12 c-0.3,0-0.6,0.2-0.8,0.5c-0.2,0.3-0.1,0.7,0,0.9l1.8,2.7c0.1,0.2,0.4,0.4,0.6,0.4l12.1,2.1c0,0.1-0.1,0.1-0.1,0.2 c-0.1,0.2-0.2,0.4-0.3,0.6c-0.5,1.1-0.7,2.2-0.7,3.4c0,4.4,3.6,8.1,8.1,8.1s8.1-3.6,8.1-8.1c0-0.6-0.1-1.3-0.2-1.9l4.7,0.7 c0,0.1,0.1,0.3,0.1,0.4c2,9.4,9.8,16,18.8,16c9,0,16.7-6.5,18.8-15.9c0-0.2,0.1-0.3,0.1-0.5l4.7-0.7c-0.1,0.6-0.2,1.2-0.2,1.9 c0,4.4,3.6,8.1,8.1,8.1s8.1-3.6,8.1-8.1c0-1.5-0.4-2.9-1.2-4.2l12.1-2.1c0.2,0,0.5-0.2,0.6-0.4l1.8-2.7 C116.9,68.7,117,68.3,116.8,68.1z M63,55v1.8H52.3c0.6-1.3,1.4-2.5,2.4-3.6h18.7c1,1,1.8,2.3,2.4,3.6H65V55H63z M64.9,36.2 l0.6,11.3c-1-0.1-2-0.1-3,0l0.6-11.3H64.9z M61.7,49.4c1.5-0.3,3.1-0.3,4.6,0c1.8,0.3,3.5,1,5,2H56.7 C58.2,50.4,59.9,49.7,61.7,49.4z M32.6,84.6c-3.5,0-6.3-2.8-6.3-6.3c0-0.9,0.2-1.8,0.6-2.7c0.1-0.1,0.1-0.3,0.2-0.4 c0.2-0.4,0.5-0.8,0.8-1.1c0,0,0,0,0.1,0c1.2-1.3,2.9-2.1,4.6-2.1c1.8,0,3.5,0.8,4.7,2.1c0.4,0.5,0.7,1,1,1.5 c0.4,0.8,0.6,1.7,0.6,2.6C38.9,81.8,36.1,84.6,32.6,84.6z M39.7,74.5c-0.3-0.5-0.6-1.1-1.1-1.5c-1.5-1.7-3.7-2.7-6.1-2.7 c-2.1,0-4.1,0.8-5.6,2.3l-12.7-2.2l-0.6-0.9H45c0,0,0,0,0,0c-0.1,0.4-0.1,0.8-0.2,1.2c-0.1,0.8-0.1,1.6-0.1,2.3 c0,0.5,0,1.1,0.1,1.6c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0,0.4L39.7,74.5z M81,77.3c-1.9,8.5-8.9,14.4-17,14.4c-8.2,0-15.2-6-17-14.5 c-0.1-0.3-0.1-0.7-0.2-1c-0.2-1.1-0.3-2.2-0.3-3.3c0-0.7,0-1.4,0.1-2.1c0-0.4,0.1-0.7,0.1-1.1c0.1-0.4,0.1-0.7,0.2-1 c0.7-3.1,2.1-6,4.1-8.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.4,0.2-0.8,0.3-1.2h24.9c0.1,0.4,0.2,0.8,0.3,1.2c0,0.2,0.1,0.3,0.2,0.4 c2,2.4,3.4,5.3,4.1,8.4c0.1,0.7,0.3,1.4,0.3,2.2c0.1,0.7,0.1,1.4,0.1,2.1c0,1.1-0.1,2.2-0.3,3.3C81.1,76.6,81.1,77,81,77.3z M95.4,84.6c-3.5,0-6.3-2.8-6.3-6.3c0-0.9,0.2-1.7,0.5-2.5c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.3,0.2-0.4c1.1-2,3.2-3.2,5.5-3.2 c1.8,0,3.5,0.7,4.6,2.1c0,0,0.1,0.1,0.1,0.1c1,1.1,1.5,2.6,1.5,4.1C101.7,81.8,98.8,84.6,95.4,84.6z M113.7,70.3L101,72.5 c-1.5-1.5-3.5-2.3-5.6-2.3c-2.9,0-5.6,1.6-7,4.1c0,0-0.1,0.1-0.1,0.2l-5.1,0.8c0-0.1,0-0.2,0-0.4c0-0.1,0-0.3,0-0.4 c0-0.5,0.1-1.1,0.1-1.6c0-0.8,0-1.6-0.1-2.3c0-0.4-0.1-0.8-0.2-1.2h31.3L113.7,70.3z" />{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="mt-3"> Flight Details</span>
            </div>

            <div className="p-2">
              <FlightTicket />
            </div>
          </div>

          <TravelInsurance />

          <div className="shadow-md border border-gray200 rounded-t-lg block paragraphFonts">
            {/* Top Section */}
            <div className="bg-purple200 rounded-lg m-2 items-center">
              <h2 className="text-lg ml-3 text-purple800 font-bold">
                Good to Know
              </h2>
              <p className="text-sm ml-3 text-purple500">
                Information you should know &nbsp;
              </p>
            </div>

            {/* Bottom Section */}
            <div className="m-2">
              <ul className="pl-5 text-sm text-purple700">
                <li className="flex items-start">
                  <GiCheckMark className="mr-2 text-purple700" />
                  15 Kgs per passenger Check-in Baggage included for your
                  selected flight on the sector Delhi to Mumbai
                </li>
                <li className="flex items-start">
                  <GiCheckMark className="mr-2 text-purple700" />
                  Airline Cancellation Fee is Rs 3209 per passenger for your
                  selected flight on the sector Delhi to Mumbai
                </li>
                <li className="flex items-start">
                  <GiCheckMark className="mr-2 text-purple700" />
                  Remember to web check-in before arriving at the airport
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-lg w-full paragraphFonts">
            <form onSubmit={verifyTravellerEmail} className="">
              {/* Contact Information Header */}
              <div className="mb-4 flex">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <span className="text-xs text-gray600 mt-2 pl-1">
                  Your ticket will be sent to this email address
                </span>
              </div>

              {/* Error Message */}
              {showError && (
                <div className="alert alert-danger flex items-center p-3 bg-red100 border border-red400 text-red700 rounded-md">
                  <img
                    src="/Content/img/error-icon-n.png"
                    alt="Error Icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="flex-1">Please enter a valid email Id</span>
                  <button
                    type="button"
                    className="text-red700 hover:text-red900 ml-4"
                    onClick={closeErrorMessage}
                  >
                    &times;
                  </button>
                </div>
              )}

              {/* Email Input */}
              <div className="relative flex border border-gray300 rounded-lg w-[50%] px-2">
                <AiTwotoneMail size={40} className="text-blue300" />
                <input
                  type="email"
                  className="focus:outline-none"
                  autoComplete="off"
                  name="txtEmailId"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Enter Email Address"
                />
              </div>
              <label className="block text-xs text-gray600">
                Please enter your email address *
              </label>

              <div className="text-center">
                <button
                  onClick={handleNavigation}
                  type="submit"
                  className="paragraphFonts bg-orange500 text-xl font-semibold 
                  text-white px-6 py-3 rounded-lg hover:bg-blue600 focus:outline-none"
                >
                  Continue Booking
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* PriceSummary taking 4/12 columns */}
        <div className="col-span-4">
          <div className="sticky top-10">
            <PriceSummary
              noAdult={1}
              noChild={0}
              noInfant={0}
              totalFare={4946}
              totalTaxes={793}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default FlightReviewPage;
