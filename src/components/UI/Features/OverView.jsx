import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleToOverview, toggleToSelect } from "../../../utils/userSlice";
import { fadeUp } from "../../../utils/constants";
import { Calendar, MapPin, Users } from "lucide-react";

const OverView = () => {
  const dispatch = useDispatch();

  const toggleToName = () => {
    dispatch(toggleToOverview());
  };
  const submitTripDetails = () => {
    dispatch(toggleToSelect());
  };
  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-auto border border-gray-200 rounded-2xl shadow-2xl pl-4"
    >
      <h1 className="pl-6 pt-12 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Trip Overview
      </h1>
      <div className="space-y-2">
        <div className="flex pt-6 pl-10 items-center space-x-1 ">
          <MapPin className="h-4 text-[#936fe0]" />
          <p className="text-md font-semibold">Trip Title</p>
        </div>
        <input
          type="text"
          placeholder="eg., Summer Adventure in Maldives"
          className="w-250 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
        />
      </div>
      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <Users className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Number of Travelers</p>
          </div>
          <input
            type="number"
            placeholder="2"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <Calendar className="h-4 text-[#936fe0]" />
            <p className="text-md font-semibold">Duration (days)</p>
          </div>
          <input
            type="number"
            placeholder="3"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
      </div>
      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <p className="text-md font-semibold">Departure City</p>
          </div>
          <input
            type="text"
            placeholder="eg., Mumbai"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <p className="text-md font-semibold">Arrival City</p>
          </div>
          <input
            type="text"
            placeholder="eg., Maldives"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
      </div>
      <div className="flex">
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <p className="text-md font-semibold">Start Date</p>
          </div>
          <input
            type="date"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
        <div className="space-y-2">
          <div className="flex pt-4 pl-10 items-center space-x-1 ">
            <p className="text-md font-semibold">End Date</p>
          </div>
          <input
            type="date"
            className="w-120 h-10 ml-10 px-5 py-3 border border-gray-300 rounded-xl text-gray-700 text-md focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
          />
        </div>
      </div>
      <div className="pt-12 pl-10 pr-15 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 "
          onClick={toggleToName}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 "
          onClick={submitTripDetails}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default OverView;
