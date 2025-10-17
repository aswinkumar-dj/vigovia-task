import React from "react";
import { useSelector } from "react-redux";

const CabSummary = () => {
  const cabDetails = useSelector((store) => store.cab);
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Cab <span className="text-purple-600">Summary</span>
      </h2>
      <div>
        <table className="w-[700px]">
          <thead>
            <tr className="">
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium mr-2">
                Start Date
              </th>
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium">
                End Date
              </th>
              <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3 text-sm font-medium">
                Vehicle Type
              </th>
              <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3 text-sm font-medium">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-purple-50">
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center ">
                {cabDetails.startDate}
              </td>
              <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                {cabDetails.endDate}
              </td>
              <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                {cabDetails.vehicleType}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center">
                {cabDetails.estimatedPrice}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 text-gray-400 font-light text-sm">
          Note: Cab is provided for entire trip.
        </div>
      </div>
    </div>
  );
};

export default CabSummary;
