import React, { useState } from "react";
import threekg from "../../assets/Flight/SeatSelection/3kg.png";
import fivekg from "../../assets/Flight/SeatSelection/5kg.png";
import tenkg from "../../assets/Flight/SeatSelection/10kg.png";
import fifteenkg from "../../assets/Flight/SeatSelection/15kg.png";
import twentykg from "../../assets/Flight/SeatSelection/20kg.png";
import thirtykg from "../../assets/Flight/SeatSelection/30kg.png";
import seatImg from "../../assets/Flight/SeatSelection/seat.png";
import baggageImg from "../../assets/Flight/SeatSelection/baggage.png";
import { TbBrandCitymapper } from "react-icons/tb";

const SeatSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [activeTab, setActiveTab] = useState("seat");

  const luggageOptions = [
    { id: 1, weight: "3 Kg", price: 1650, image: threekg },
    { id: 2, weight: "5 Kg", price: 2750, image: fivekg },
    { id: 3, weight: "10 Kg", price: 5495, image: tenkg },
    { id: 4, weight: "15 Kg", price: 8059, image: fifteenkg },
    { id: 5, weight: "20 Kg", price: 9990, image: twentykg },
    { id: 6, weight: "30 Kg", price: 14985, image: thirtykg },
  ];

  const [quantities, setQuantities] = useState(
    luggageOptions.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const updateQuantity = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + amount),
    }));
  };

  const [seats, setSeats] = useState(
    Array.from({ length: 31 }, (_, rowIndex) =>
      Array.from({ length: 6 }, (_, colIndex) => {
        const seatNumber = String.fromCharCode(65 + colIndex) + (rowIndex + 1);
        let types = [];
        let fare;
        let available = true; // Default availability

        // Assign seat types based on row number
        if ([1, 12, 13].includes(rowIndex + 1)) {
          types.push("XL"); // Extra Legroom
        } else {
          types.push("NR"); // Non-Reclining
        }

        if ([1, 11, 12, 13].includes(rowIndex + 1)) {
          types.push("EXIT"); // Exit Row
        }

        // Assign AISLE WINDOW type and fare
        if (
          (seatNumber.startsWith("A") &&
            rowIndex + 1 >= 2 &&
            rowIndex + 1 <= 10) ||
          (seatNumber.startsWith("A") &&
            rowIndex + 1 >= 14 &&
            rowIndex + 1 <= 30) ||
          (seatNumber.startsWith("F") &&
            rowIndex + 1 >= 2 &&
            rowIndex + 1 <= 10) ||
          (seatNumber.startsWith("F") &&
            rowIndex + 1 >= 14 &&
            rowIndex + 1 <= 30)
        ) {
          types.push("AISLE WINDOW");
          fare = 250;
        } else {
          // Set fare based on seat type
          if (types.includes("XL")) {
            fare = types.includes("EXIT") ? 700 : 500;
          } else if (types.includes("EXIT")) {
            fare = 300;
          } else {
            fare = 0;
          }
        }

        // Randomly mark some seats as booked
        const bookedSeats = [
          "A1",
          "C2",
          "B5",
          "D10",
          "F20",
          "E25",
          "B15",
          "C18",
          "D6",
          "E19",
          "F6",
        ]; // Example booked seats

        if (bookedSeats.includes(seatNumber)) {
          available = false;
        }

        return { seatNumber, types, fare, available };
      })
    )
  );

  const fareRanges = [
    { range: "Free", color: "bg-rose400", min: 0, max: 0 },
    { range: "₹0-200", color: "bg-blue300", min: 1, max: 200 },
    { range: "₹201-400", color: "bg-indigo300", min: 201, max: 400 },
    { range: "₹401-500", color: "bg-pink300", min: 401, max: 500 },
    { range: "₹501-1200", color: "bg-orange300", min: 501, max: 1200 },
    { range: "₹1201-1399", color: "bg-red300", min: 1201, max: 1399 },
    { range: "₹1400-1499", color: "bg-purple400", min: 1400, max: 1499 },
    { range: "₹1500-3000", color: "bg-gray300", min: 1500, max: 3000 },
    { range: "Above ₹3000", color: "bg-gray500", min: 3001, max: Infinity },
  ];

  const [hoveredSeat, setHoveredSeat] = useState(null);

  const handleMouseEnter = (seat) => {
    setHoveredSeat(seat);
  };

  const handleMouseLeave = () => {
    setHoveredSeat(null);
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const maxPassengers = 2; // Set the number of passengers

  const handleSeatClick = (seat) => {
    if (!seat.available) return;

    setSelectedSeats((prevSeats) => {
      const isSeatSelected = prevSeats.some(
        (s) => s.seatNumber === seat.seatNumber
      );

      if (isSeatSelected) {
        return prevSeats.filter((s) => s.seatNumber !== seat.seatNumber);
      } else if (prevSeats.length < maxPassengers) {
        return [...prevSeats, seat];
      }

      return prevSeats;
    });
  };

  const totalFare = selectedSeats.reduce((sum, seat) => sum + seat.fare, 0);

  return (
    <div className="p-4 max-w-6xl mx-auto bg-white shadow-lg rounded-lg paragraphFonts">
      {/* Tab Navigation */}
      <div className="flex items-center border-b  border-gray200 mb-4 w-1/2">
        <div
          className={`flex-1 text-center py-2 font-bold cursor-pointer ${
            activeTab === "seat"
              ? "text-blue600 border-b-4 border-blue600"
              : "text-gray500"
          }`}
          onClick={() => setActiveTab("seat")}
        >
          <div className="flex ml-8 items-center gap-2">
            <img src={seatImg} alt="Seat" className="w-12 h-12" />
            <span>Seat</span>
          </div>
        </div>

        <div
          className={`flex-1 text-center font-semibold py-2 cursor-pointer ${
            activeTab === "baggage"
              ? "text-blue600 border-b-4 border-blue600"
              : "text-gray500"
          }`}
          onClick={() => setActiveTab("baggage")}
        >
          <div className="flex ml-8 items-center gap-2">
            <img src={baggageImg} alt="Baggage" className="w-12 h-12" />
            <span>Baggage</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Right Section: Content and Seat Map */}
        <div className="w-full">
          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "seat" && (
              <div className="flex space-x-6">
                {/* Left Section: Seat Type and Legend */}
                <div className="w-1/2 space-y-12">
                  {/* Flight Route - Visible in all tabs */}
                  <div className="mt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex bg-blue100 text-blue600 font-bold px-4 py-2 rounded">
                        DEL{" "}
                        <TbBrandCitymapper className="mt-1 mx-2" size={15} />{" "}
                        IDR
                      </div>
                      <div className="flex bg-gray200 text-gray600 px-4 py-2 rounded">
                        IDR{" "}
                        <TbBrandCitymapper className="mt-1 mx-2" size={15} />{" "}
                        BOM
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4">
                    <div className="mt-4">
                      <div className="text-lg font-bold text-blue600">
                        Indigo
                      </div>
                      <div className="text-gray600">6E 902</div>
                      {/* Table for flight details */}
                      <div className="rounded-lg my-1">
                        <table className="table-auto w-full text-left border border-blue300 rounded-lg">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 text-gray600 border-b border-r border-blue300 rounded-tl-lg">
                                Passenger
                              </th>
                              <th className="py-2 px-4 text-gray600 border-b border-blue300">
                                Fare
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-2 px-4 text-gray800 border-b border-r border-blue300">
                                Adult 1{" "}
                                <span className="bg-green500 text-white p-1 text-sm rounded">
                                  {selectedSeats.length
                                    ? selectedSeats
                                        .map((s) => s.seatNumber)
                                        .join(", ")
                                    : "Select Seats"}
                                </span>
                              </td>
                              <td className="py-2 px-4 text-gray800 border-b border-blue300">
                                Rs{" "}
                                {selectedSeats.length > 0
                                  ? selectedSeats.map((s) => s.fare).join(", ")
                                  : "0"}
                              </td>
                            </tr>
                            <tr className="bg-blue200">
                              <td className="py-2 px-4 text-gray800 border-b border-r border-blue300">
                                Total Fare
                              </td>
                              <td className="py-2 px-4 text-gray800 border-b border-blue300">
                                Rs {totalFare}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-start font-bold text-lg mb-4">
                      Seat Type
                    </div>
                    <div className="flex flex-wrap bg-white ">
                      {fareRanges.map((range, index) => (
                        <div
                          key={index}
                          className="flex items-center w-1/4 mb-2"
                        >
                          <div
                            className={`w-4 h-4 ${range.color} rounded-md mr-2`}
                          ></div>
                          <span className="text-xs font-semibold">
                            {range.range}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <ul className="text-sm flex space-x-2">
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center border rounded bg-gray200">
                            XL
                          </div>
                          <span>Extra Legroom</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center border rounded bg-gray200">
                            NR
                          </div>
                          <span>Non Reclining</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center border rounded bg-gray200">
                            ER
                          </div>
                          <span>Exit Row Seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Section: Seat Map */}
                <div className="w-1/2">
                  <div className="text-center font-bold text-lg mb-2">
                    Seat Map
                  </div>
                  <div className="border border-gray200 rounded-lg p-4 bg-white max-h-[500px] overflow-y-scroll">
                    <div className="text-center font-bold mb-2">FRONT</div>
                    {seats.map((row, rowIndex) => (
                      <div key={rowIndex}>
                        {/* Add the "EXIT" row after row 11 and row 12 */}
                        {rowIndex === 11 && (
                          <div className="text-center font-bold mb-2">EXIT</div>
                        )}
                        {rowIndex === 12 && (
                          <div className="text-center font-bold mb-2">EXIT</div>
                        )}

                        {/* Split into left and right sections */}
                        <div className="flex justify-center mb-4">
                          {/* Left Section: A, B, C */}
                          <div className="flex space-x-2">
                            {row
                              .filter((seat) =>
                                ["A", "B", "C"].includes(seat.seatNumber[0])
                              ) // Filter left-section seats
                              .map((seat) => {
                                // Find the corresponding fare range
                                const seatFareRange = fareRanges.find(
                                  (range) =>
                                    seat.fare >= range.min &&
                                    seat.fare <= range.max
                                );

                                return (
                                  <div className="flex flex-col items-center">
                                    <button
                                      key={seat.seatNumber}
                                      className={`w-10 h-10 border rounded-md text-center font-medium text-sm 
                                        hover:scale-105 transition-all
                                        ${
                                          !seat.available
                                            ? "bg-gray300 text-gray500 cursor-not-allowed" // Booked seats - gray background
                                            : // : selectedSeats.includes(
                                            //     seat.seatNumber
                                            //   )
                                            selectedSeats.some(
                                                (s) =>
                                                  s.seatNumber ===
                                                  seat.seatNumber
                                              )
                                            ? "bg-green500 text-white" // Selected seats - green
                                            : seatFareRange?.color ||
                                              "bg-gray400" // Available seats - fare-based color
                                        }`}
                                      onMouseEnter={() =>
                                        handleMouseEnter(seat)
                                      }
                                      onMouseLeave={handleMouseLeave}
                                      // disabled={!seat.available ? true : false} // Disable if booked
                                      onClick={() =>
                                        seat.available && handleSeatClick(seat)
                                      } // Prevent clicking on booked seats
                                    >
                                      {seat.seatNumber}
                                      {/* Seat tooltip (only shows when hovered) */}
                                      {hoveredSeat?.seatNumber ===
                                        seat.seatNumber && (
                                        <div
                                          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-40 z-50
                                            bg-gray300 text-black text-sm p-2 shadow-md rounded-lg"
                                        >
                                          <p>Seat: {hoveredSeat.seatNumber}</p>
                                          <p>
                                            Type:{" "}
                                            {seat.types.map((type) => {
                                              let bgColor = "bg-gray400"; // Default color

                                              if (type === "EXIT") {
                                                bgColor = "bg-red500"; // Exit Row → Red
                                              } else if (type === "XL") {
                                                bgColor = "bg-purple500"; // Extra Legroom (Reclining) → Purple
                                              } else if (type === "NR") {
                                                bgColor = "bg-blue500"; // Non-Reclining → Blue
                                              } else if (
                                                type === "AISLE WINDOW"
                                              ) {
                                                bgColor = "bg-yellow300";
                                              }

                                              return (
                                                <span
                                                  key={type}
                                                  className={`inline-block ${bgColor} text-black text-xs px-1 py-1 rounded mr-2`}
                                                >
                                                  {type}
                                                </span>
                                              );
                                            })}
                                          </p>
                                          <p>Fare: ₹{hoveredSeat.fare}</p>
                                          <p>
                                            Status:{" "}
                                            {hoveredSeat.available
                                              ? "Available"
                                              : "Booked"}
                                          </p>
                                        </div>
                                      )}
                                    </button>

                                    {seat.types
                                      .filter(
                                        (type) =>
                                          type !== "EXIT" &&
                                          type !== "AISLE WINDOW"
                                      ) // Filter out "EXIT" type
                                      .map((type) => {
                                        return (
                                          <span
                                            key={type}
                                            className={`text-black text-xs rounded mr-1`}
                                          >
                                            {type}
                                          </span>
                                        );
                                      })}
                                  </div>
                                );
                              })}
                          </div>

                          {/* Spacer between left and right */}
                          <div className="w-8"></div>

                          {/* Right Section: D, E, F */}
                          <div className="flex space-x-2">
                            {row
                              .filter(
                                (seat) =>
                                  ["D", "E", "F"].includes(seat.seatNumber[0]) // Access seatNumber
                              )
                              .map((seat) => {
                                // Find the corresponding fare range
                                const seatFareRange = fareRanges.find(
                                  (range) =>
                                    seat.fare >= range.min &&
                                    seat.fare <= range.max
                                );

                                return (
                                  <div className="flex flex-col items-center">
                                    <button
                                      key={seat.seatNumber}
                                      className={`w-10 h-10 border rounded-md text-center font-medium text-sm 
                                        hover:scale-105 transition-all
                                        ${
                                          !seat.available
                                            ? "bg-gray300 text-gray500 cursor-not-allowed" // Booked seats - gray background
                                            : selectedSeats.some(
                                                (s) =>
                                                  s.seatNumber ===
                                                  seat.seatNumber
                                              )
                                            ? "bg-green500 text-white" // Selected seats - green
                                            : seatFareRange?.color ||
                                              "bg-gray400" // Available seats - fare-based color
                                        }`}
                                      onMouseEnter={() =>
                                        handleMouseEnter(seat)
                                      }
                                      onMouseLeave={handleMouseLeave}
                                      // disabled={!seat.available ? true : false} // Disable if booked
                                      onClick={() =>
                                        seat.available && handleSeatClick(seat)
                                      } // Prevent clicking on booked seats
                                    >
                                      {seat.seatNumber}
                                      {/* Seat tooltip (only shows when hovered) */}
                                      {hoveredSeat?.seatNumber ===
                                        seat.seatNumber && (
                                        <div
                                          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-40 z-50
      bg-gray300 text-black text-sm p-2 shadow-md rounded-lg"
                                        >
                                          <p>Seat: {hoveredSeat.seatNumber}</p>
                                          <p>
                                            Type:{" "}
                                            {seat.types.map((type) => {
                                              let bgColor = "bg-gray400"; // Default color

                                              if (type === "EXIT") {
                                                bgColor = "bg-red500"; // Exit Row → Red
                                              } else if (type === "XL") {
                                                bgColor = "bg-purple500"; // Extra Legroom (Reclining) → Purple
                                              } else if (type === "NR") {
                                                bgColor = "bg-blue500"; // Non-Reclining → Blue
                                              } else if (
                                                type === "AISLE WINDOW"
                                              ) {
                                                bgColor = "bg-yellow300";
                                              }
                                              return (
                                                <span
                                                  key={type}
                                                  className={`inline-block ${bgColor} text-white text-sm px-2 py-1 rounded mr-2`}
                                                >
                                                  {type}
                                                </span>
                                              );
                                            })}
                                          </p>
                                          <p>Fare: ₹{hoveredSeat.fare}</p>
                                          <p>
                                            Status:{" "}
                                            {hoveredSeat.available
                                              ? "Available"
                                              : "Booked"}
                                          </p>
                                        </div>
                                      )}
                                    </button>

                                    {seat.types
                                      .filter(
                                        (type) =>
                                          type !== "EXIT" &&
                                          type !== "AISLE WINDOW"
                                      ) // Filter out "EXIT" type
                                      .map((type) => {
                                        return (
                                          <span
                                            key={type}
                                            className={`text-black text-xs rounded mr-1`}
                                          >
                                            {type}
                                          </span>
                                        );
                                      })}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="text-center font-bold mt-2">EXIT</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "baggage" && (
              <div className="container mt-0 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {luggageOptions.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-lg shadow-sm"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.weight}
                          className="w-12 h-12 mr-4"
                        />
                        <div>
                          <p className="text-sm font-semibold">{item.weight}</p>
                          <p className="text-md font-bold text-gray700">
                            ₹{item.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center border rounded-lg px-3 py-1">
                        <button
                          className="px-2 text-lg"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="px-4 text-lg font-semibold">
                          {quantities[item.id]}
                        </span>
                        <button
                          className="px-2 text-lg"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
