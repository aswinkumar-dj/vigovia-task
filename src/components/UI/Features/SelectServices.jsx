import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/constants";
import { toggleToSelect } from "../../../utils/userSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Plane, Hotel, Car } from "lucide-react";

const SelectServices = () => {
  const dispatch = useDispatch();
  const toggleToTrip = () => {
    dispatch(toggleToSelect());
  };

  const [selected, setSelected] = useState(() => {
    const saved = sessionStorage.getItem("selectedServices");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("selectedServices", JSON.stringify(selected));
  }, [selected]);

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const services = [
    {
      id: "flight",
      title: "Flight Booking",
      desc: "We'll arrange your flights",
      icon: <Plane className="w-6 h-6 text-[#4ba1eb]" />,
    },
    {
      id: "hotel",
      title: "Hotel Accommodation",
      desc: "Book your stay with us",
      icon: <Hotel className="w-6 h-6 text-[#4ba1eb]" />,
    },
    {
      id: "cab",
      title: "Cab Service",
      desc: "We will provide end-to-end cab service",
      icon: <Car className="w-6 h-6 text-[#4ba1eb]" />,
    },
  ];

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 h-auto border border-gray-200 rounded-2xl shadow-2xl pl-4 pr-10"
    >
      <h1 className="pl-6 pt-12 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Select Services
      </h1>
      <p className="pl-8 pt-2 text-md  text-gray-500">
        Select the services you want to include in your itinerary
      </p>

      <div className="mt-8 space-y-5 px-10">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`flex items-center gap-4 border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
              selected.includes(service.id)
                ? "border-[#4ba1eb] bg-gradient-to-r from-[#f0f7ff] to-[#f8f3ff]"
                : "border-gray-200 hover:border-[#4ba1eb]/60"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(service.id)}
              readOnly
              className="w-5 h-5 accent-[#4ba1eb] cursor-pointer"
            />
            <div className="flex items-center gap-3">
              {service.icon}
              <div>
                <h2 className="font-semibold text-gray-800 text-lg">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12 pl-10 pr-10 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 "
          onClick={toggleToTrip}
        >
          Previous Page
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ">
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default SelectServices;
