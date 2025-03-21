import { IoIosAirplane } from "react-icons/io";

const TopFlightRoutes = () => {
    const cityPairs = [
      { depart: "New York", arrive: "London" },
      { depart: "Los Angeles", arrive: "Tokyo" },
      { depart: "Paris", arrive: "Dubai" },
      { depart: "Sydney", arrive: "Singapore" },
      { depart: "Los Angeles", arrive: "Tokyo" },
      { depart: "Paris", arrive: "Dubai" },
    ];
  
    return (
      <section className="py-10 bg-gray50 paragraphFonts">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl text-orange500 font-bold mb-6  paragraphFonts">
            Popular Flight Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cityPairs.map((pair, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow 
                border border-gray300"
              >
                <div className="flex flex-col">
                  <span className="text-gray800 font-semibold">
                    {pair.depart}
                  </span>
                  <span className="text-gray500 text-sm">Departure City</span>
                </div>
                <div className="flex items-center mx-2">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 0 24 24"
                    width="48px"
                    fill="#4facfe"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" />
                  </svg> */}
                  <IoIosAirplane size={40} className="text-orange400"/>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-gray800 font-semibold">
                    {pair.arrive}
                  </span>
                  <span className="text-gray500 text-sm">Arrival City</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TopFlightRoutes;
  