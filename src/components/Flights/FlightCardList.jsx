import FlightCard from "./FlightCard";

const FlightCardList = ({ flightsData }) => {
  if (!flightsData) {
    return <p>No flight data available</p>;
  }
  return (
    <div className="p-4">
      <div className="bg-orange100 border-2 border-orange300 py-1 mb-2 rounded-md flex flex-wrap 
      items-center justify-between paragraphFonts">
        {/* Airlines Column */}
        <div className="w-1/6 text-center">
          <a
            href="#"
            className="text-gray800 font-medium flex items-center justify-center"
            onClick={() => sortBy("outbound", "b[0].FL[0].AN")}
          >
            Airlines <i className="fa air2 ml-2"></i>
          </a>
        </div>

        {/* Departure Column */}
        <div className="w-1/6 text-center">
          <a
            href="#"
            className="text-gray800 font-medium flex items-center justify-center"
            onClick={() => sortBy("outbound", "b[0].FL[0].DTM")}
          >
            Departure <i className="fa fa-long-arrow-up ml-2"></i>
          </a>
        </div>

        {/* Duration Column */}
        <div className="w-1/6 text-center">
          <a
            href="#"
            className="text-gray800 font-medium flex items-center justify-center"
            onClick={() => sortBy("outbound", "DTJT")}
          >
            Duration <i className="fa ml-2"></i>
          </a>
        </div>

        {/* Arrival Column */}
        <div className="w-1/6 text-center">
          <a
            href="#"
            className="text-gray800 font-medium flex items-center justify-center"
            onClick={() => sortBy("outbound", "b[0].FL[b[0].FL.length-1].ATM")}
          >
            Arrive <i className="fa ml-2"></i>
          </a>
        </div>

        {/* Price Column */}
        <div className="w-1/6 text-center hidden sm:block">
          <a
            href="#"
            className="text-gray800 font-medium flex items-center justify-center"
            onClick={() => sortBy("outbound", "TotalFare")}
          >
            Price <i className="fa ml-2"></i>
          </a>
        </div>

        {/* Recommended Toggle */}
        <div className="w-1/6 text-center flex items-center justify-center">
          {/* <span className="mr-2">Recommended</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="chkRecommended"
                      className="hidden"
                      onClick={() => Recommended()}
                    />
                    <div className="w-10 h-5 bg-gray300 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0 transition"></div>
                  </div> */}
        </div>
      </div>

      {flightsData.nonstop?.length > 0 && (
        <div>
          {/* <h2 className="text-xl font-semibold mb-4">Nonstop Flights</h2> */}
          {flightsData.nonstop.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div>
      )}

      {flightsData.oneStop?.length > 0 && (
        <div>
          {/* <h2 className="text-xl font-semibold mb-4">One-Stop Flights</h2> */}
          {flightsData.oneStop.map((flight, index) => (
            // <div key={index}>
            //   {data.flights.map((flight, flightIndex) => (
            <FlightCard key={index} flight={flight} />
            //   ))}
            // </div>
          ))}
        </div>
      )}

      {flightsData.twoStops?.length > 0 && (
        <div>
          {/* <h2 className="text-xl font-semibold mb-4">Two-Stop Flights</h2> */}
          {flightsData.twoStops.map((flight, flightIndex) => (
            // <div key={index}>
            //   {data.flights.map((flight, flightIndex) => (
            <FlightCard key={flightIndex} flight={flight} />
            //   ))}
            // </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightCardList;
