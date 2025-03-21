import React, { useState, useEffect } from "react";

const FareSidebar = ({
  isOpen,
  toggleSidebar,
  onBookNow,
  parentSelectedFare,
}) => {
  const [selectedCard, setSelectedCard] = useState(1); // Default selection (SAVER)

  useEffect(() => {
    // Update the selected fare based on the parent's selected fare
    if (parentSelectedFare) {
      switch (parentSelectedFare.title) {
        case "SAVER":
          setSelectedCard(1);
          break;
        case "SPICE FLEX":
          setSelectedCard(2);
          break;
        case "SPICEMAX":
          setSelectedCard(3);
          break;
        default:
          setSelectedCard(1); // Default to SAVER if no match
      }
    }
  }, [parentSelectedFare]);

  const handleCardSelect = (id) => {
    setSelectedCard(id);
  };

  const getFareDetails = () => {
    switch (selectedCard) {
      case 1:
        return { title: "SAVER", amount: 5499, color: "bg-blue500" };
      case 2:
        return { title: "SPICE FLEX", amount: 6339, color: "bg-red500" };
      case 3:
        return { title: "SPICEMAX", amount: 7127, color: "bg-yellow500" };
      default:
        return { title: "", amount: 0, color: "bg-gray500" };
    }
  };

  const handleBookNow = () => {
    const selectedFareDetails = getFareDetails();
    onBookNow(selectedFareDetails); // Pass the details to the parent
    toggleSidebar(); // Close the sidebar
  };

  if (!isOpen) return null; // Do not render the modal if `isOpen` is false

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {/* Modal Container */}
      <div className="relative w-[70%] text-black rounded-lg shadow-lg overflow-auto bg-white max-h-[100%]">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray200">
          <h2 className="text-lg font-semibold">More Fare Options Available</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray600 text-xl"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Flight Details */}
        <div className="p-4 border-b border-gray200">
          <h3 className="text-md font-medium">Delhi - Mumbai</h3>
          <p className="text-sm text-gray600">
            SpiceJet • Fri, 31 Jan 2025 • Departure at 13:30 - Arrival at 15:45
          </p>
        </div>

        {/* Fare Options */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((cardId) => (
              <div
                key={cardId}
                className={`p-4 border rounded-lg shadow-sm cursor-pointer ${
                  selectedCard === cardId
                    ? cardId === 1
                      ? "border-blue500"
                      : cardId === 2
                      ? "border-red500"
                      : "border-yellow500"
                    : "border-gray200"
                }`}
                onClick={() => handleCardSelect(cardId)} // Click anywhere to select
              >
                {/* Radio button and title */}
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-lg font-semibold">
                      {cardId === 1 && "SPICE SAVER"}
                      {cardId === 2 && "SPICE FLEX"}
                      {cardId === 3 && "SPICEMAX"}
                    </h4>
                    <p className="text-sm text-gray500">
                      {cardId === 1 &&
                        "EASEFLY: Get extra Rs.400 instant discount on this flight"}
                      {cardId === 2 &&
                        "BOOKNOW: Get extra Rs.350 instant discount on this flight"}
                      {cardId === 3 &&
                        "BOOKNOW: Get extra Rs.350 instant discount on this flight"}
                    </p>
                  </div>
                  <input
                    type="radio"
                    id={`card-${cardId}`}
                    name="fareCard"
                    checked={selectedCard === cardId}
                    onChange={() => handleCardSelect(cardId)}
                    className="form-radio h-5 w-5 text-blue500"
                  />
                </div>

                {/* Pricing */}
                <h4 className="text-2xl font-bold mb-4">
                  {cardId === 1 && "₹5499"}
                  {cardId === 2 && "₹6339"}
                  {cardId === 3 && "₹7127"}
                </h4>

                {/* Features */}
                <div className="text-sm text-gray700">
                  <ul className="mb-4 space-y-1">
                    <li>
                      <strong>Baggage:</strong> 7 kg Cabin Baggage, 15 KG
                      Check-in Baggage
                    </li>
                    <li>
                      <strong>Changeability:</strong> Cancellation fee starts at
                      Rs.{" "}
                      {cardId === 1 ? "3150" : cardId === 2 ? "2950" : "3150"}{" "}
                      onwards
                    </li>
                    <li>
                      Date Change fee starts at Rs.{" "}
                      {cardId === 1 ? "2250" : "0"} onwards
                    </li>
                    {cardId !== 1 && (
                      <li>
                        <strong>Add-Ons:</strong> Seat (Free seat),
                        Complimentary Meals
                      </li>
                    )}
                  </ul>
                  <span className="inline-block text-green600 font-semibold">
                    Refundable
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-4">
                  <button
                    className={`w-full py-2 px-4 rounded ${
                      selectedCard === cardId
                        ? cardId === 1
                          ? "bg-blue500 text-white"
                          : cardId === 2
                          ? "bg-red500 text-white"
                          : "bg-yellow500 text-white"
                        : "bg-gray300 text-gray700"
                    }`}
                  >
                    {selectedCard === cardId ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="p-4 border-t border-gray200 flex justify-between items-center">
          <h3 className="text-lg font-bold">
            Grand Total: ₹{getFareDetails().amount}
          </h3>
          <button
            onClick={handleBookNow}
            className="hover:bg-red400 hover:border-2 hover:border-red400 bg-white border-2 border-purple500 text-purple600 
            py-2 px-8 rounded-md shadow-lg paragraphFonts font-semibold  
            hover:text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FareSidebar;

// bg-gradient-to-r from-orange-600 to-blue-500
// hover:bg-gradient-to-r hover:from-orange400 hover:to-red-500
