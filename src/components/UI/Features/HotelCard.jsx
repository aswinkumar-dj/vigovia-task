import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/constants";
import {
  Calendar,
  HotelIcon,
  IndianRupee,
  MapPin,
  NutIcon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHotelName,
  setCity,
  setNights,
  setCheckInDate,
  setCheckOutDate,
} from "../../../utils/hotelSlice";
import { toggleToCab, toggleToHotel } from "../../../utils/userSlice";

const HotelCard = () => {
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotel);

  const handleToggleToFlight = () => {
    dispatch(toggleToHotel());
  };
  const handleToggleToCab = () => {
    dispatch(toggleToCab());
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-auto border border-gray-200 rounded-2xl shadow-2xl pl-4"
    >
      <h1 className="pl-6 pt-12 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Hotel Details
      </h1>

      <div className="space-y-2">
        <div className="flex pt-6 pl-10 items-center space-x-1">
          <HotelIcon className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Hotel Name</p>
        </div>
        <input
          type="text"
          value={hotel.hotelName}
          onChange={(e) => dispatch(setHotelName(e.target.value))}
          placeholder="eg., ITC Grand Chola"
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
        />
      </div>

      <div className="space-y-2">
        <div className="flex pt-6 pl-10 items-center space-x-1">
          <MapPin className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">City</p>
        </div>
        <input
          type="text"
          value={hotel.city}
          onChange={(e) => dispatch(setCity(e.target.value))}
          placeholder="eg., Chennai"
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
        />
      </div>

      <div className="space-y-2">
        <div className="flex pt-4 pl-10 items-center space-x-1">
          <NutIcon className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Number of Nights</p>
        </div>
        <input
          type="number"
          value={hotel.nights}
          onChange={(e) => dispatch(setNights(Number(e.target.value)))}
          placeholder="2"
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
        />
      </div>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1">
            <p className="text-md font-semibold">Check-in Date</p>
          </div>
          <input
            type="date"
            value={hotel.checkInDate}
            onChange={(e) => dispatch(setCheckInDate(e.target.value))}
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1">
            <p className="text-md font-semibold">Check-out Date</p>
          </div>
          <input
            type="date"
            value={hotel.checkOutDate}
            onChange={(e) => dispatch(setCheckOutDate(e.target.value))}
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex pt-4 pl-10 items-center space-x-1">
          <IndianRupee className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Estimated Price</p>
        </div>
        <input
          type="number"
          readOnly
          value={hotel.estimatedPrice}
          placeholder="₹ 5500 (inclusive of taxes)"
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md bg-gray-50 focus:outline-none placeholder-gray-400 transition-all"
        />
      </div>

      <div className="pt-12 pl-10 pr-15 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToFlight}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToCab}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default HotelCard;
