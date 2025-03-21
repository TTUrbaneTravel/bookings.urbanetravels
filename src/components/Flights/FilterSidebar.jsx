import React, { useState } from "react";

const FilterSidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    departure: null,
    arrival: null,
  });

  const handleFilterSelection = (type, value) => {
    setSelectedFilters((prev) => ({ ...prev, [type]: value }));
  };

  const departureOptions = [
    { label: "Before 6 AM", value: "before6AM" },
    { label: "6 AM - 12 PM", value: "6AMto12PM" },
    { label: "12 PM - 6 PM", value: "12PMto6PM" },
    { label: "After 6 PM", value: "after6PM" },
  ];

  const arrivalOptions = [...departureOptions]; // Reusing the same options for arrival

  return (
    <div className="w-1/4 py-4 px-8 filtersidebar ml-8 mt-4 border-t-4 border-blue600 shadow-md 
    [--tw-shadow-color:rgba(34,197,94,0.5)] shadow-[0_4px_6px_-1px_var(--tw-shadow-color)]">
      <h2 className="font-bold text-lg mb-4 paragraphFonts">Filter</h2>

      {/* Popular Filters */}
      <div className="mb-6">
        <h3 className="font-medium text-sm mb-2 paragraphFonts">
          Popular Filters
        </h3>
        {[
          "Non Stop",
          "Morning Departure",
          "Indigo",
          "Air India",
          "SpiceJet",
          "Akasa Air",
        ].map((filter, index) => (
          <label key={index} className="block mb-2 paragraphFonts">
            <input type="checkbox" className="mr-2" defaultChecked /> {filter}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block font-medium text-sm mb-2 paragraphFonts">
          Price Range
        </label>
        <input
          type="range"
          min="5000"
          max="50000"
          className="paragraphFonts w-full mb-2 appearance-none h-2 rounded-full accent-orange-400 focus:ring-orange400"
          style={{
            background: `linear-gradient(to right, #f97316 0%, #f97316 var(--value, 0%), #fde68a var(--value, 100%), #fde68a 100%)`,
            "--value": "0%", // Default value
          }}
          onInput={(e) =>
            e.target.style.setProperty(
              "--value",
              `${((e.target.value - 5000) / 45000) * 100}%`
            )
          }
        />

        <p className="text-xs paragraphFonts">Rs. 5000 - Rs. 50000</p>
      </div>

      {/* Stops */}
      <div className="mb-6">
        <h3 className="font-medium text-sm mb-2 paragraphFonts">Stops</h3>
        {["Non Stop", "1 Stop", "2+ Stop"].map((stop, index) => (
          <label key={index} className="block mb-2 paragraphFonts">
            <input type="checkbox" className="mr-2" /> {stop}
          </label>
        ))}
      </div>

      {/* Departure From Mumbai */}
      <div className="mb-6">
        <h3 className="font-medium text-sm mb-2 paragraphFonts">
          Departure From Mumbai
        </h3>
        <div className="flex flex-wrap gap-2">
          {departureOptions.map((option) => (
            <button
              key={option.value}
              className={`px-4 py-2 text-sm border rounded paragraphFonts ${
                selectedFilters.departure === option.value
                  ? "border-blue500 bg-blue100"
                  : "border-gray300"
              }`}
              onClick={() => handleFilterSelection("departure", option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Arrival At Delhi */}
      <div className="mb-6">
        <h3 className="font-medium text-sm mb-2 paragraphFonts">
          Arrival At Delhi
        </h3>
        <div className="flex flex-wrap gap-2">
          {arrivalOptions.map((option) => (
            <button
              key={option.value}
              className={`px-4 py-2 text-sm border rounded paragraphFonts ${
                selectedFilters.arrival === option.value
                  ? "border-blue500 bg-blue100"
                  : "border-gray300"
              }`}
              onClick={() => handleFilterSelection("arrival", option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flight Quality */}
      <div className="mb-6">
        <h3 className="font-medium text-sm mb-2 paragraphFonts">
          Flight Quality
        </h3>
        {["Show Wi-Fi Flights Only", "Show Red-Eyes"].map((quality, index) => (
          <label key={index} className="block mb-2 paragraphFonts">
            <input type="checkbox" className="mr-2" /> {quality}
          </label>
        ))}
      </div>

      {/* Airlines */}
      <div>
        <h3 className="font-medium text-sm mb-2 paragraphFonts">Airlines</h3>
        {[
          { name: "Indigo", price: "Rs. 5327" },
          { name: "Air India", price: "Rs. 7664" },
          { name: "Akasa Air", price: "Rs. 4573" },
          { name: "SpiceJet", price: "Rs. 6789" },
        ].map((airline, index) => (
          <label key={index} className="block mb-2">
            <input type="checkbox" className="mr-2 paragraphFonts" />{" "}
            {airline.name}
            <span className="float-right paragraphFonts">{airline.price}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;