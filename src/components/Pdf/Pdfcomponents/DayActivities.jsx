import React from "react";
import { useSelector } from "react-redux";
import day1 from "../../../assets/day1.jpg";
import day2 from "../../../assets/day2.jpg";

const DayActivities = () => {
  const dayDetails = useSelector((store) => store.itinerary.days);

  return (
    <div>
      <div className="flex items-center  border-b border-gray-300 w-[700px] py-6 relative">
        <div className="absolute left-[-80px] ">
          <button className="bg-[#321e5d] text-white font-semibold px-20 py-2 rounded-2xl transform -rotate-90">
            Day 1
          </button>
        </div>

        <div className="flex flex-col ml-20 items-center w-[180px]">
          <img
            alt="day-1"
            src={day1}
            className="w-[120px] h-[120px] object-cover rounded-full mb-2"
          />
          <p className="font-bold text-[16px]">28th October</p>
          <p className="text-sm text-gray-600 text-center">
            Arrival In Maldives
          </p>
        </div>
        <div className="flex ml-20 spaxe-x-4">
          <div className="flex flex-col items-center mx-8 relative">
            <div className="w-[2px] h-full bg-[#321e5d] absolute top-0"></div>
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#321e5d] mt-0"></div>
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#321e5d] mt-16"></div>
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#321e5d] mt-16"></div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <p className="font-semibold text-md">Morning</p>
              <ul className="list-disc text-sm ml-5 text-gray-700">
                <li>{dayDetails[0].morning}</li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md">Afternoon</p>
              <ul className="list-disc text-sm ml-5 text-gray-700">
                <li>{dayDetails[0].afternoon}</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-md">Evening</p>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                <li>{dayDetails[0].evening}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  border-b border-gray-300 w-[700px] py-6 relative">
        <div className="absolute left-[-80px] ">
          <button className="bg-[#321e5d] text-white font-semibold px-20 py-2 rounded-2xl transform -rotate-90">
            Day 2
          </button>
        </div>

        <div className="flex flex-col ml-20 items-center w-[180px]">
          <img
            alt="day-1"
            src={day2}
            className="w-[120px] h-[120px] object-cover rounded-full mb-2"
          />
          <p className="font-bold text-[16px]">29th October</p>
          <p className="text-sm text-gray-600 text-center">
            Arrival In Maldives
          </p>
        </div>
        <div className="flex ml-20 spaxe-x-4">
          <div className="flex flex-col items-center mx-8 relative">
            <div className="w-[2px] h-full bg-[#321e5d] absolute top-0"></div>
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#321e5d] mt-0"></div>
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#321e5d] mt-16"></div>
            <div className="w-3 h-3 rounded-full bg-white border-2 border-[#321e5d] mt-16"></div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <p className="font-semibold text-md">Morning</p>
              <ul className="list-disc text-sm ml-5 text-gray-700">
                <li>{dayDetails[1].morning}</li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md">Afternoon</p>
              <ul className="list-disc text-sm ml-5 text-gray-700">
                <li>{dayDetails[1].afternoon}</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-md">Evening</p>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                <li>{dayDetails[1].evening}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayActivities;
