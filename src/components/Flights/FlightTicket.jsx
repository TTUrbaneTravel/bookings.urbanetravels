import React from "react";
import { PiAirplaneTaxiingBold } from "react-icons/pi";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import AmenitiesSection from "../Flights/AmenitiesSection";
import indigoImg from "../../assets/collaboration/indigo.jpg";

const LayoverDetails = ({ duration, location }) => {
  return (
    <div className="text-center border-2 border-dashed border-violet400 mx-36 rounded-full p-1 text-sm font-semibold 
    paragraphFonts">
      <span className="text-red500">{duration}</span>{" "}
      <span className="text-violet600 ">Layover in {location}</span>
    </div>
  );
};

const RefundableButton = () => {
  return (
    <button className="text-purple400 border font-semibold border-purple400 p-1 text-[10px] rounded-full paragraphFonts">
      REFUNDABLE
    </button>
  );
};

const FlightTicket = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-orange200">
      <div className="">
        {/* <span className="bg-orange200 font-semibold text-xs text-orange500 px-2 py-1 rounded paragraphFonts">
          DEPART
        </span> */}
        <div className="flex items-center gap-2 m-4 paragraphFonts">
          <LiaPlaneDepartureSolid className="text-gray300" size={36} />
          <h2 className="text-2xl">Delhi - Mumbai</h2>
          <span className="text-md text-gray500">|</span>
          <span className="text-sm text-gray500">Thu-30Jan2025</span>
        </div>
      </div>

      <div className="space-y-2 mx-12">
        {/* First Flight */}
        <div className="rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full">              
                <img src={indigoImg} />
              </div>
              <div>
                <p className="text-xl paragraphFonts">Indigo</p>
                <p className="text-sm text-gray600 paragraphFonts">6E-2651</p>
                <p className="text-sm text-gray600 paragraphFonts">ECONOMY</p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl paragraphFonts">18:35</p>
              <p className="text-sm text-gray600 paragraphFonts">
                Delhi (DEL)
              </p>
              <p className="text-sm text-gray600 paragraphFonts">
                Thu-30Jan2025
              </p>
              <p className="text-sm text-gray600 paragraphFonts">
                Terminal - 2
              </p>
            </div>
            <div className="flex flex-col items-center">
              <PiAirplaneTaxiingBold size={40} className="text-gray400" />
              <p className="text-sm text-gray600 mt-1 paragraphFonts">
                01h 45m
              </p>
              <RefundableButton />
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl paragraphFonts">20:20</p>
              <p className="text-sm text-gray600 paragraphFonts">
                Nagpur (NAG)
              </p>
              <p className="text-sm text-gray600 paragraphFonts">
                Thu-30Jan2025
              </p>
            </div>
          </div>
          <div className="justify-between">
            <span className="bg-blue400 text-white text-xs mt-4 py-1 px-2 font-bold rounded-full">
              SAVER
            </span>
            <AmenitiesSection />
          </div>
        </div>
        {/* Layover */}
        <LayoverDetails duration="2h 35m" location="Nagpur (NAG)" />

        {/* Second Flight */}
        <div className="rounded-lg ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full">
              <img src={indigoImg} />
              </div>
              <div>
                <p className="text-xl paragraphFonts">Indigo</p>
                <p className="text-sm text-gray600 paragraphFonts">6E-5302</p>
                <p className="text-sm text-gray600 paragraphFonts">ECONOMY</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-bold text-2xl paragraphFonts">22:55</h2>
              <p className="text-sm text-gray600 paragraphFonts">
                Nagpur (NAG)
              </p>
              <p className="text-sm text-gray600 paragraphFonts">
                Thu-30Jan2025
              </p>
            </div>
            <div className="flex flex-col items-center">
              <PiAirplaneTaxiingBold size={40} className="text-gray400" />
              <p className="text-sm text-gray600 mt-1 paragraphFonts">
                01h 35m
              </p>
              <RefundableButton />
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl paragraphFonts">00:30</p>
              <p className="text-sm text-gray600 paragraphFonts">
                Mumbai (BOM)
              </p>
              <p className="text-sm text-gray600 paragraphFonts">
                Fri-31Jan2025
              </p>
              <p className="text-sm text-gray600 paragraphFonts">
                Terminal - 1
              </p>
            </div>
          </div>
          <div className="justify-between">
            <span className="bg-blue400 text-white text-xs mt-4 py-1 px-2 font-bold rounded-full">
              SAVER
            </span>
            <AmenitiesSection />
          </div>
        </div>
      </div>

      <footer className="m-2 text-sm text-gray600 paragraphFonts flex space-x-4">
        {/* <p>Fare Rules</p>
        <p>Baggage</p> */}
      </footer>
    </div>
  );
};

export default FlightTicket;
