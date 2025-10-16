import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/constants";
import {
  Calendar,
  IndianRupee,
  MapIcon,
  MapPin,
  Plane,
  User,
} from "lucide-react";
import { toggleToFlight, toggleToHotel } from "../../../utils/userSlice";
import { setFlightDetails, updatePrice } from "../../../utils/flightSlice";
import { useDispatch, useSelector } from "react-redux";

const FlightCard = () => {
  const dispatch = useDispatch();
  const flight = useSelector((store) => store.flight);

  const handleChange = (field, value) => {
    dispatch(setFlightDetails({ [field]: value }));
    if (field === "passengers" || field === "flightClass") {
      dispatch(updatePrice());
    }
  };

  const handleToggleToSelect = () => {
    dispatch(toggleToFlight());
  };
  const handleToggleToHotel = () => {
    dispatch(toggleToHotel());
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-auto border border-gray-200 rounded-2xl shadow-2xl pl-4"
    >
      <h1 className="pl-6 pt-12 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Flight Details
      </h1>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <MapPin className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">From (City/Airport)</p>
          </div>
          <input
            type="text"
            value={flight.from}
            onChange={(e) => handleChange("from", e.target.value)}
            placeholder="e.g., Chennai (MAA)"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <MapIcon className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">To (City/Airport)</p>
          </div>
          <input
            type="text"
            value={flight.to}
            onChange={(e) => handleChange("to", e.target.value)}
            placeholder="e.g., Delhi (DEL)"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>
      </div>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <Calendar className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Departure Date</p>
          </div>
          <input
            type="date"
            value={flight.departureDate}
            onChange={(e) => handleChange("departureDate", e.target.value)}
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <Calendar className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Return Date</p>
          </div>
          <input
            type="date"
            value={flight.returnDate}
            onChange={(e) => handleChange("returnDate", e.target.value)}
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>
      </div>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <User className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Number of Passengers</p>
          </div>
          <input
            type="number"
            value={flight.passengers}
            onChange={(e) =>
              handleChange("passengers", parseInt(e.target.value || 0))
            }
            placeholder="2"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <Plane className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Class</p>
          </div>
          <select
            value={flight.flightClass}
            onChange={(e) => handleChange("flightClass", e.target.value)}
            className="w-120 h-10 ml-10 px-5 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb]"
          >
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex pt-6 pl-10 items-center space-x-1 ">
          <IndianRupee className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Estimated Price</p>
        </div>
        <input
          type="text"
          readOnly
          value={`₹ ${flight.estimatedPrice}`}
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 text-md"
        />
      </div>

      <div className="pt-12 pl-10 pr-15 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 "
          onClick={handleToggleToSelect}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 "
          onClick={handleToggleToHotel}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default FlightCard;
