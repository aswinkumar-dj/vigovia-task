import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { toggleToThankYou } from "../../../utils/userSlice";

const ThankYouCard = () => {
  const dispatch = useDispatch();

  const handleToggleToBack = () => {
    dispatch(toggleToThankYou());
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-10 -px-40 py-30 border border-gray-200 rounded-2xl shadow-2xl max-w-xl mx-auto text-center"
    >
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] bg-clip-text text-transparent">
        Thank You!!!
      </h1>

      <div className="flex justify-center gap-6">
        <button className="px-5 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          ↘ Generate Itinerary PDF
        </button>

        <button
          className="px-5 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToBack}
        >
          Go Back
        </button>
      </div>
    </motion.div>
  );
};

export default ThankYouCard;
