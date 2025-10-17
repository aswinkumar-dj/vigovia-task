import React from "react";

const Services = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Scope Of <span className="text-purple-600">Service</span>
      </h2>
      <div>
        <table className="w-[700px]">
          <thead>
            <tr className="">
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium mr-2">
                Services
              </th>
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-purple-50">
              <td className="px-4 py-3 text-sm text-gray-900  text-center ">
                Flight Tickets And Hotel Vouchers
              </td>

              <td className="px-4 py-3 text-sm text-gray-900 text-center">
                Delivered 3 Days Post Full Payment
              </td>
            </tr>
            <tr className="bg-purple-50">
              <td className="px-4 py-3 text-sm text-gray-900  text-center ">
                Web Check-in
              </td>

              <td className="px-4 py-3 text-sm text-gray-900  text-center">
                Boarding Pass Delivery Via Email/Whatsapp
              </td>
            </tr>

            <tr className="bg-purple-50">
              <td className="px-4 py-3 text-sm text-gray-900  text-center ">
                Cancellation Support
              </td>

              <td className="px-4 py-3 text-sm text-gray-900  text-center">
                Provided
              </td>
            </tr>
            <tr className="bg-purple-50">
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center ">
                Trip Support
              </td>

              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center">
                Response Time: 5 Mins
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
