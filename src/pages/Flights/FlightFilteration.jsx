import FilterSidebar from "../../components/Flights/FilterSidebar";
import FlightSearch from "../../components/Flights/FlightSearch";
import FlightCardList from "../../components/Flights/FlightCardList";
import "../../FlightFilteration.css";
import FareCalender from "../../components/Flights/FareCalendar";
import indigoImg from "../../assets/collaboration/indigo.jpg";
import BookingHome from "../../components/BookingHome";

const FlightsFilteration = () => {
  const flightsData = {
    nonstop: [
      {
        flights: [
          {
            origin: "Delhi",
            originCode: "DEL",
            destination: "Mumbai",
            destinationCode: "BOM",
            airline: "Indigo",
            airlineLogo: indigoImg,
            flightNumber: "6E-500",
            class: "Economy",
            departureTime: "18:00",
            departureDate: "Fri, 31 Jan 2025",
            departureTerminal: "1D",
            duration: "02h 05m",
            arrivalTime: "20:05",
            arrivalDate: "Fri, 31 Jan 2025",
            arrivalTerminal: "2",
            layover: "",
            fare: "5499",
            stops: 0,
          },
        ],
      },
    ],
    oneStop: [
      {
        flights: [
          {
            origin: "Delhi",
            originCode: "DEL",
            destination: "Indore",
            destinationCode: "IDR",
            airline: "Indigo",
            airlineLogo: indigoImg,
            flightNumber: "6E-902",
            class: "Economy",
            departureTime: "17:30",
            departureDate: "Fri, 31 Jan 2025",
            departureTerminal: "1D",
            duration: "01h 30m",
            arrivalTime: "19:00",
            arrivalDate: "Fri, 31 Jan 2025",
            arrivalTerminal: "",
            layover: "3h 55m",
            fare: "7808",
            stops: 1,
          },
          {
            origin: "Indore",
            originCode: "IDR",
            destination: "Mumbai",
            destinationCode: "BOM",
            airline: "Indigo",
            airlineLogo: indigoImg,
            flightNumber: "6E-6598",
            class: "Economy",
            departureTime: "22:55",
            departureDate: "Fri, 31 Jan 2025",
            departureTerminal: "",
            duration: "01h 25m",
            arrivalTime: "00:20",
            arrivalDate: "Sat, 01 Feb 2025",
            arrivalTerminal: "2",
            layover: "",
          },
        ],
      },
    ],
    twoStops: [
      {
        flights: [
          {
            origin: "Delhi",
            originCode: "DEL",
            destination: "Indore",
            destinationCode: "IDR",
            airline: "Indigo",
            airlineLogo: indigoImg,
            flightNumber: "6E-902",
            class: "Economy",
            departureTime: "17:30",
            departureDate: "Fri, 31 Jan 2025",
            departureTerminal: "1D",
            duration: "01h 30m",
            arrivalTime: "19:00",
            arrivalDate: "Fri, 31 Jan 2025",
            arrivalTerminal: "",
            layover: "2h 00m",
            fare: "9876",
            stops: 2,
          },
          {
            origin: "Indore",
            originCode: "IDR",
            destination: "Hyderabad",
            destinationCode: "HYD",
            airline: "Indigo",
            airlineLogo: indigoImg,
            flightNumber: "6E-801",
            class: "Economy",
            departureTime: "21:00",
            departureDate: "Fri, 31 Jan 2025",
            departureTerminal: "",
            duration: "01h 20m",
            arrivalTime: "22:20",
            arrivalDate: "Fri, 31 Jan 2025",
            arrivalTerminal: "",
            layover: "1h 30m",
          },
          {
            origin: "Hyderabad",
            originCode: "HYD",
            destination: "Mumbai",
            destinationCode: "BOM",
            airline: "Indigo",
            airlineLogo: indigoImg,
            flightNumber: "6E-342",
            class: "Economy",
            departureTime: "23:50",
            departureDate: "Fri, 31 Jan 2025",
            departureTerminal: "3",
            duration: "01h 10m",
            arrivalTime: "01:00",
            arrivalDate: "Sat, 01 Feb 2025",
            arrivalTerminal: "2",
            layover: "",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col filter">
      <BookingHome/>
      <FlightSearch />
      <div className="flex flex-1 mx-4">
        <FilterSidebar />
        <div className="flex-1 p-4 mr-12">
          <FareCalender />
          <h2 className="font-bold text-lg mb-4 paragraphFonts">
            Available Flights
          </h2>
          <FlightCardList flightsData={flightsData} />
        </div>
      </div>
    </div>
  );
};

export default FlightsFilteration;
