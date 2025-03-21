import { GiCommercialAirplane } from "react-icons/gi";
import { SiRailway } from "react-icons/si";
import { LuBus } from "react-icons/lu";
import { LuCarTaxiFront } from "react-icons/lu";
import { BsPassport } from "react-icons/bs";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { LuBaggageClaim } from "react-icons/lu";
import "../BookingHome.css";
import { Link } from "react-router-dom";
import { FaRegHandshake } from "react-icons/fa";

const BookingPage = () => {
  return (
    <div className="mt-24">
      {/* Rectangular Box with Categories */}
      <div className="categories-container p-8 rounded shadow-sm flex flex-wrap justify-between">
        <div className="category-item flex flex-col items-center">
          <Link to="/flights" className="text-decoration-none">
            <div className="category-box flex flex-col items-center justify-center bg-transparent" >
              <GiCommercialAirplane className="text-3xl text-orange400" />
              <p className="text-center text-sm paragraphFonts">Flights</p>
            </div>
          </Link>
        </div>
        <div className="category-item flex flex-col items-center">
          <Link to="/trains" className="text-decoration-none">
            <div className="category-box flex flex-col items-center justify-center">
              <SiRailway className="text-3xl text-orange400" />
              <p className="text-center text-sm paragraphFonts">Trains</p>
            </div>
          </Link>
        </div>
        <div className="category-item flex flex-col items-center">
        <Link to="/buses" className="text-decoration-none">
          <div className="category-box flex flex-col items-center justify-center">
            <LuBus className="text-3xl text-orange400" />
            <p className="text-center text-sm paragraphFonts">Buses</p>
          </div>
          </Link>
        </div>
        <div className="category-item flex flex-col items-center">
        <Link to="/cabs" className="text-decoration-none">
          <div className="category-box flex flex-col items-center justify-center">
            <LuCarTaxiFront className="text-3xl text-orange400" />
            <p className="text-center text-sm paragraphFonts">Cabs</p>
          </div>
          </Link>
        </div>        
        <div className="category-item flex flex-col items-center">
        <Link to="/hotels" className="text-decoration-none">
          <div className="category-box flex flex-col items-center justify-center">
            <RiHotelLine className="text-3xl text-orange400" />
            <p className="text-center text-sm paragraphFonts">Hotels</p>
          </div>
          </Link>
        </div>
        <div className="category-item flex flex-col items-center">
        <Link to="/holidaypackage" className="text-decoration-none">
          <div className="category-box flex flex-col items-center justify-center">
            <LuBaggageClaim className="text-3xl text-orange400" />
            <p className="text-center text-sm paragraphFonts">Holiday Packages</p>
          </div>
          </Link>
        </div>
        <div className="category-item flex flex-col items-center">
          <Link to="/visa" className="text-decoration-none">
            <div className="category-box flex flex-col items-center justify-center">
              <BsPassport className="text-3xl text-orange400" />
              <p className="text-center text-sm paragraphFonts">Visa</p>
            </div>
          </Link>
        </div>
        <div className="category-item flex flex-col items-center">
        <Link to="/insurance" className="text-decoration-none">
          <div className="category-box flex flex-col items-center justify-center">
            <MdOutlineAssuredWorkload className="text-3xl text-orange400" />
            <p className="text-center text-sm paragraphFonts">Travel Insurance</p>
          </div>
          </Link>
        </div>
         <div className="category-item flex flex-col items-center">
        <Link to="/meetandgreets" className="text-decoration-none">
          <div className="category-box flex flex-col items-center justify-center">
            <FaRegHandshake className="text-3xl text-orange400" />
            <p className="text-center text-sm paragraphFonts">Meet and Greets</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
