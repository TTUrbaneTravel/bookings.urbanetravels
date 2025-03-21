import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PriceSummary = ({
  noAdult = 1,
  noChild = 0,
  noInfant = 0,
  totalFare = 5739,
  totalTaxes = 793,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    if (promoCode.trim() !== '') {
      setIsApplied(true);
    } else {
      alert('Please enter a promo code!');
    }
  };

  const navigate = useNavigate();

  // const handleNavigation = () => {
  //   navigate("/flighttravellersuserdetails");
  // };

  return (
    <div>
      <div className="border border-gray200 rounded-lg shadow-md paragraphFonts">
        <div className="mt-0 flex bg-blue200 h-[45px] mb-3 py-2 px-4 rounded-t-lg space-x-12 gap-6">
          <div className="paragraphFonts">Price Summary</div>
          <div className="flex justify-between space-x-2 m-2">
            <div className="text-xs">{noAdult} Adult(s)</div>
            <div className="text-xs">{noChild} Child(ren)</div>
            <div className="text-xs">{noInfant} Infant(s)</div>
          </div>
        </div>

        <div className="space-y-2 m-4">
          <div className="flex justify-between border-b border-gray200">
            <div className="text-md">Adult x {noAdult}</div>
            <div className="text-md flex items-center">
              <i className="mr-1">₹</i>
              <span>{totalFare}</span>
            </div>
          </div>

          {totalTaxes > 0 && (
            <div className="flex justify-between ">
              <div className="text-md">Total Taxes +</div>
              <div className="text-md flex items-center">
                <i className="mr-1">₹</i>
                <span>{totalTaxes}</span>
              </div>
            </div>
          )}

          <div className="flex justify-between border-t border-gray200 font-semibold">
            <div className="text-md">Grand Total</div>
            <div className="text-md flex items-center">
              <i className="mr-1">₹</i>
              <span>{totalFare + totalTaxes}</span>
            </div>
          </div>

          {/* <div className="bg-yellow-100 p-4 rounded-md">
            <div className="text-lg">EMT Cashback</div>
            <div className="text-lg">₹0</div>
          </div> */}
        </div>
      </div>

      <div className="max-w-md mx-auto mt-2 p-3 bg-white shadow-lg rounded-2xl border border-gray200 paragraphFonts">
        <h2 className="text-xl font-semibold text-violet500 mb-4 bg-violet200 p-2 rounded-lg">
          Special Offers & Promo Code
        </h2>
        <p className="text-gray600 text-sm mb-4">
          Apply a promo code to get discounts on your booking.
        </p>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter Promo Code"
            className="flex-1 px-4 py-2 border border-gray300 rounded-lg focus:ring-2 focus:ring-blue400 focus:outline-none"
          />
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-orange500 text-white font-semibold rounded-lg hover:bg-blue600 transition"
          >
            Apply
          </button>
        </div>
        {isApplied && (
          <div className="p-4 bg-green100 text-green700 rounded-lg">
            Promo code applied successfully!
          </div>
        )}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-purple800">
            Available Offers:
          </h3>
          <ul className="list-disc list-inside text-sm text-gray600 mt-2 space-y-2">
            <li>
              Use code <span className="font-bold">FLY50</span> to get 50% off
              on domestic flights.
            </li>
            <li>
              Use code <span className="font-bold">HOLIDAY20</span> to get 20%
              off on holiday packages.
            </li>
            <li>
              Use code <span className="font-bold">FESTIVE10</span> to get 10%
              off on all bookings.
            </li>
          </ul>
        </div>
      </div>

      {/* Continue Booking Button */}
      {/* <div className="text-center mt-2">
        <button
          type="submit"
          className="paragraphFonts bg-orange400 text-white text-xl text-semibold px-4 py-2 rounded-lg hover:bg-blue500 focus:outline-none"
          onClick={handleNavigation}
        >
          Continue Booking
        </button>
      </div> */}
    </div>
  );
};

export default PriceSummary;
