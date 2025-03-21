import React, { useState } from "react";
import ReviewPage from "../../components/Flights/ReviewPage";
import FlightTicket from "../../components/Flights/FlightTicket";
import PriceSummary from "../../components/Flights/PriceSummary";
import SeatSelection from "../../components/Flights/SeatSelection";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import BookingHome from "../../components/BookingHome";

const FlightTravellersSeatPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/flighttravellersseatpage");
  };

  const [isGstEnabled, setIsGstEnabled] = useState(true); // Toggle visibility
  const [isGstChecked, setIsGstChecked] = useState(false); // Checkbox state
  const [companyName, setCompanyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleCompanyChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleGstNumberChange = (e) => {
    setGstNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const validateEmail = (email) => {
    // Email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateMobile = (mobile) => {
    // Mobile validation logic here
    return /^\d{10}$/.test(mobile);
  };

  const validateGSTNumber = (gstNumber) => {
    // GST number validation logic here
    return /^[0-9]{15}$/.test(gstNumber);
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleLinkClick = (link) => {
    // Handle the link click logic (for example, opening the corresponding page or modal)
    console.log(`Navigating to ${link}`);
  };

  const [countryCode, setCountryCode] = useState("91");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleCountryCodeBlur = (value) => {
    // Implement ValidateNumbers logic
    console.log("Country Code:", value);
  };

  const handlePhoneNumberBlur = (value) => {
    // Implement ValidateMobileNumberMob1 and CheckOnLoginMobileNumber logic
    console.log("Phone Number:", value);
  };

  const handlePhoneNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [showFlyerInfo, setShowFlyerInfo] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleToggleFlyerInfo = () => setShowFlyerInfo(!showFlyerInfo);
  const handleCheckboxChange = (e) => setShowError(e.target.checked);

  // Placeholder function for updating fare
  const updateFare = () => {
    console.log("Updating fare...");
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

  const flightData = {
    dest: "BOM|Mumbai",
    arrDT: "Thu-30Jan2025",
    Refundable: "Refundable",
    arrTer: "2",
  };

  return (
    <div>
      <BookingHome/>
      {/* Review Page section */}
      <ReviewPage />
      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-4 mt-6 mx-16">
        {/* FlightTicket taking 8/12 columns */}
        <div className="col-span-8">
          <div className="rounded-lg shadow-md">
            <div className="bg-orange500 flex space-x-2 font-bold text-white px-4 text-2xl rounded-t-lg paragraphFonts">
              <svg
                width="64px"
                height="50px"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <rect width="60" height="60" fill="none" />
                <path d="M14.76,37.45a1,1,0,0,0-1,1v3.58a1,1,0,0,0,2.06,0V38.48A1,1,0,0,0,14.76,37.45Z" />
                <path d="M15.79,31.33a1,1,0,0,0-2.06,0v3.58a1,1,0,0,0,2.06,0Z" />
                <path d="M21.52,32.09h4.24a1,1,0,0,0,0-2.06H21.52a1,1,0,1,0,0,2.06Z" />
                <path d="M35.93,38.36a1,1,0,0,0-1-1H21.52a1,1,0,1,0,0,2.06H34.9A1,1,0,0,0,35.93,38.36Z" />
                <path d="M21.52,41.3a1,1,0,1,0,0,2.06h10a1,1,0,0,0,0-2.06Z" />
                <path d="M56,33.42,51.12,21,54,18.17a4.49,4.49,0,0,0,1.29-2.8,3,3,0,0,0-.88-2.46v0A3.1,3.1,0,0,0,51.94,12a4.51,4.51,0,0,0-2.78,1.29l-2.9,2.9L33.89,11.35a1,1,0,0,0-1.11.23l-2.26,2.26a1,1,0,0,0-.3.79,1.06,1.06,0,0,0,.3.67.39.39,0,0,0,.1.08l2.47,1.92-.31.31a1,1,0,0,0,1.46,1.46l.49-.49,1.75,1.36-.32.32a1,1,0,0,0,1.46,1.46l.5-.5,1.75,1.36L36.49,26l-.53.57-3.27-1.26a1,1,0,0,0-1.1.24L30.14,27a1,1,0,0,0,0,1.46l3.07,3.07c-.05.18-.11.36-.15.54a1.83,1.83,0,0,0,2.22,2.22l.53-.15,3.08,3.07a1,1,0,0,0,1.45,0l1.46-1.46a1,1,0,0,0,.23-1.1l-1.25-3.27c.19-.17.38-.34.56-.52l3.38-3.39,1.37,1.76-.5.49a1,1,0,0,0,0,1.46,1,1,0,0,0,1.46,0l.31-.31,1.37,1.75-.49.49a1,1,0,0,0,1.46,1.46l.3-.31,1.92,2.47.09.1a1.09,1.09,0,0,0,.66.3,1,1,0,0,0,.8-.3l2.26-2.27A1,1,0,0,0,56,33.42Z" />
              </svg>
              <span className="mt-3">Bookings Details</span>
            </div>
            <div className="p-2">
              <FlightTicket />
            </div>
          </div>

          <div className="mt-5 rounded-lg shadow-md">
            <SeatSelection />
          </div>

          <div className="p-3 rounded-lg shadow-md w-full paragraphFonts">
            <form onSubmit={verifyTravellerEmail} className="space-y-2">
              {/* Contact Information Header */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Contact Details</h2>
                <span className="text-xs text-gray600">
                  Your Mobile number will be used only for sending flight
                  related communication
                </span>
              </div>

              <div className="mb-4">
                {/* Country Code and Mobile Number Section */}
                <div className="flex items-center gap-2">
                  {/* Country Code Section */}
                  <div className="flex items-center border border-gray300 rounded-lg w-[15%] px-3">
                    <span>+</span>
                    <input
                      id="txtCountryCode"
                      type="tel"
                      value={countryCode}
                      maxLength={5}
                      className="w-[50%] px-2 py-2 rounded focus:outline-none"
                      onBlur={() => handleCountryCodeBlur(countryCode)}
                      onKeyPress={(e) =>
                        /^[0-9]$/.test(e.key) || e.preventDefault()
                      }
                      onChange={(e) => setCountryCode(e.target.value)}
                      placeholder="Code"
                    />
                  </div>

                  {/* Mobile Number Section */}
                  <div className="flex items-center border border-gray300 rounded-lg w-[40%] px-3 ">
                    <FaPhone size={24} className="text-blue300 mr-2" />
                    <input
                      id="txtCPhone"
                      type="text"
                      value={mobileNumber}
                      maxLength={15}
                      className="w-full px-2 py-2 rounded focus:outline-none"
                      placeholder="Mobile Number"
                      onBlur={() => handlePhoneNumberBlur(mobileNumber)}
                      onKeyPress={(e) =>
                        /^[0-9]$/.test(e.key) || e.preventDefault()
                      }
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>
              </div>

              {/* Terms and condition checkbox */}
              <div className="hv-ps8">
                <label className="ctr_cbox leading-tight">
                  <input
                    name="Terms"
                    id="chkTandC"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <span className="cmark_cbox"></span>
                  <span className="tctxt">
                    I understand and agree to the rules,{" "}
                    <a
                      href="#"
                      onClick={() => handleLinkClick("Privacy Policy")}
                      className="loadtc text-blue500 hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    ,{" "}
                    <a
                      href="#"
                      onClick={() => handleLinkClick("User Agreement")}
                      className="loadtc text-blue500 hover:underline"
                    >
                      User Agreement
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      onClick={() => handleLinkClick("Terms & Conditions")}
                      className="loadtc text-blue500 hover:underline"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    of Urbane
                  </span>
                </label>
              </div>

              {/* Continue Booking Button */}
              <div className="text-center">
                <button
                  onClick={handleNavigation}
                  type="submit"
                  className="paragraphFonts bg-orange500 text-xl font-semibold text-white px-6 py-3 rounded-lg 
                  hover:bg-blue600 focus:outline-none"
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

export default FlightTravellersSeatPage;
