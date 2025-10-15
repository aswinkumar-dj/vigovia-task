import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleToOverview } from "../../../utils/userSlice";
import { fadeUp } from "../../../utils/constants";

const OverView = () => {
  const dispatch = useDispatch();

  const toggleToName = () => {
    dispatch(toggleToOverview());
  };
  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-100 border border-gray-200 rounded-2xl shadow-2xl"
    >
      <div>
        <h1>Trip Overview</h1>
      </div>
      <button
        className="mt-25 ml-185 px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 "
        onClick={toggleToName}
      >
        Previous Page
      </button>
    </motion.div>
  );
};

export default OverView;
