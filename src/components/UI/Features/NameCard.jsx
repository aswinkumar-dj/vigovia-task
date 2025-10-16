import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser, toggleToOverview } from "../../../utils/userSlice";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/constants";

const NameCard = () => {
  const personName = useRef();
  const dispatch = useDispatch();
  const handleToggleToOverview = () => {
    dispatch(toggleToOverview());
  };
  const submitName = () => {
    dispatch(addUser(personName.current.value));
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-100 border border-gray-200 rounded-2xl shadow-2xl"
    >
      <h1 className="text-center text-4xl font-extrabold mt-10 mb-10 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] bg-clip-text text-transparent">
        Welcome!!
      </h1>

      <div className="flex flex-col items-center gap-6 pb-10">
        <input
          ref={personName}
          type="text"
          placeholder="Enter your Name..."
          onChange={submitName}
          className="w-3/4 px-5 py-3 border border-[#4ba1eb] rounded-xl text-gray-700 text-lg focus:outline-none focus:ring-1 focus:ring-[#4ba1eb] placeholder-gray-400 transition-all"
        />

        <button
          className="mt-25 ml-185 px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToOverview}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default NameCard;
