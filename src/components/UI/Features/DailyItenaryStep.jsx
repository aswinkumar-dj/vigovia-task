import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fadeUp } from "../../../utils/constants";
import { Sunrise, Sun, Moon, Trash2, Plus } from "lucide-react";
import { addDay, removeDay, updateDay } from "../../../utils/itinerarySlice";
import { toggleToActivities, toggleToPayments } from "../../../utils/userSlice";

const DailyItineraryStep = () => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.itinerary.days);

  const handleChange = (id, field, value) => {
    dispatch(updateDay({ id, field, value }));
  };
  const handleToggleToCab = () => {
    dispatch(toggleToActivities());
  };
  const handleToggleToPayments = () => {
    dispatch(toggleToPayments());
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 border border-gray-200 rounded-2xl shadow-2xl pl-6 pr-6 pt-10 pb-12"
    >
      <h1 className="pl-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Daily Itinerary
      </h1>

      <div className="mt-8 mx-6 space-y-8">
        {days.map((day, index) => (
          <div
            key={day.id}
            className="border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Day {index + 1}
              </h2>
              {days.length > 1 && (
                <button
                  onClick={() => dispatch(removeDay(day.id))}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Sunrise className="h-4 w-4 text-amber-500" /> Morning
                  Activity
                </label>
                <textarea
                  placeholder="e.g., Beach yoga and breakfast"
                  value={day.morning}
                  onChange={(e) =>
                    handleChange(day.id, "morning", e.target.value)
                  }
                  className="mt-2 w-full h-16 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 focus:ring-1 focus:ring-[#4ba1eb] focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Sun className="h-4 w-4 text-yellow-500" /> Afternoon Activity
                </label>
                <textarea
                  placeholder="e.g., Snorkeling tour and lunch"
                  value={day.afternoon}
                  onChange={(e) =>
                    handleChange(day.id, "afternoon", e.target.value)
                  }
                  className="mt-2 w-full h-16 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 focus:ring-1 focus:ring-[#4ba1eb] focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Moon className="h-4 w-4 text-blue-500" /> Evening Activity
                </label>
                <textarea
                  placeholder="e.g., Sunset dinner cruise"
                  value={day.evening}
                  onChange={(e) =>
                    handleChange(day.id, "evening", e.target.value)
                  }
                  className="mt-2 w-full h-16 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 focus:ring-1 focus:ring-[#4ba1eb] focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => dispatch(addDay())}
          className="w-full flex justify-center items-center gap-2 border-2 border-dashed border-[#4ba1eb] rounded-xl py-3 text-[#4ba1eb] font-semibold hover:bg-[#4ba1eb]/10 transition-all duration-300"
        >
          <Plus className="h-5 w-5" /> Add Another Day
        </button>
      </div>

      <div className="pt-12 pl-10 pr-6 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToCab}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToPayments}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default DailyItineraryStep;
