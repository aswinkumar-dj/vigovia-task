import React from "react";
import { useSelector } from "react-redux";

const HotelSummary = () => {
  const hotelDetails = useSelector((store) => store.hotel);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Hotel <span className="text-purple-600">Summary</span>
      </h2>
      <div>
        <table className="w-[700px]">
          <thead>
            <tr className="">
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium mr-2">
                City
              </th>
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium">
                Check In
              </th>
              <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3 text-sm font-medium">
                Check Out
              </th>
              <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3 text-sm font-medium">
                Nights
              </th>
              <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3  text-sm font-medium">
                Hotel Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-purple-50">
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center ">
                {hotelDetails.city}
              </td>
              <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                {hotelDetails.checkInDate}
              </td>
              <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                {hotelDetails.checkOutDate}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center">
                {hotelDetails.nights}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center">
                {hotelDetails.hotelName}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-gray-400 font-light text-sm">
          <p>1. All hotels are tentative and can be replaced with similar.</p>
          <p>2. Breakfast included for all hotel stays.</p>
          <p>3. All Hotels will be 4* and above category</p>
          <p>
            A maximum occupancy of 2 people/room is allowed in most hotels. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelSummary;
