import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setPickup,
  setDrop,
  setStartDate,
  setEndDate,
  setVehicleType,
} from "../../../utils/cabSlice";
import { toggleToActivities, toggleToCab } from "../../../utils/userSlice";
import { fadeUp } from "../../../utils/constants";
import { Calendar, Car, IndianRupee, MapPin } from "lucide-react";

const CabCard = () => {
  const dispatch = useDispatch();
  const cab = useSelector((state) => state.cab);

  const handleToggleToHotel = () => {
    dispatch(toggleToCab());
  };
  const handleToggleToActivities = () => {
    dispatch(toggleToActivities());
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-auto border border-gray-200 rounded-2xl shadow-2xl pl-4"
    >
      <h1 className="pl-6 pt-12 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Cab Details
      </h1>

      <div className="w-250 bg-[#4ba1eb]/20 h-12 ml-10 mt-6 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md">
        <p className="text-sm font-medium text-foreground">
          🚗 We will provide end-to-end cab service for your entire trip
        </p>
      </div>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1">
            <MapPin className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Pickup Location</p>
          </div>
          <input
            type="text"
            value={cab.pickup}
            onChange={(e) => dispatch(setPickup(e.target.value))}
            placeholder="eg., Hotel, Airport"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-[#4ba1eb] transition-all"
          />
        </div>
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1">
            <MapPin className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Drop Location</p>
          </div>
          <input
            type="text"
            value={cab.drop}
            onChange={(e) => dispatch(setDrop(e.target.value))}
            placeholder="eg., Airport, Hotel"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-[#4ba1eb] transition-all"
          />
        </div>
      </div>

      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1">
            <Calendar className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Service Start Date</p>
          </div>
          <input
            type="date"
            value={cab.startDate}
            onChange={(e) => dispatch(setStartDate(e.target.value))}
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1">
            <Calendar className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Service End Date</p>
          </div>
          <input
            type="date"
            value={cab.endDate}
            onChange={(e) => dispatch(setEndDate(e.target.value))}
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-[#4ba1eb]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex pt-4 pl-10 items-center space-x-1">
          <Car className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Vehicle Type Preference</p>
        </div>
        <select
          value={cab.vehicleType}
          onChange={(e) => dispatch(setVehicleType(e.target.value))}
          className="w-250 h-10 ml-10 px-5 border border-gray-300 rounded-xl text-gray-700 text-md focus:ring-1 focus:ring-[#4ba1eb]"
        >
          <option value="">Select Vehicle Type</option>
          <option value="SUV">SUV (₹5000/day)</option>
          <option value="Sedan">Sedan (₹4000/day)</option>
          <option value="Tempo Traveller">Tempo Traveller (₹10000/day)</option>
          <option value="Volvo Bus">Volvo Bus (₹25000/day)</option>
        </select>
      </div>

      <div className="space-y-2">
        <div className="flex pt-4 pl-10 items-center space-x-1">
          <IndianRupee className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Estimated Price</p>
        </div>
        <input
          type="number"
          readOnly
          value={cab.estimatedPrice}
          placeholder="Price will be calculated automatically"
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 bg-gray-50 rounded-xl text-gray-700 text-md"
        />
      </div>

      <div className="pt-12 pl-10 pr-15 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToHotel}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToActivities}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default CabCard;
