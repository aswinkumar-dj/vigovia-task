import React from "react";
import PaymentPlan from "../Pdfcomponents/PaymentPlan";
import Footer from "../Footer";

const Page3 = () => {
  return (
    <div className="pdf-page w-[794px] h-[1123px] px-[45px] py-[30px]  bg-white mx-auto my-8 flex flex-col">
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Inclusion <span className="text-purple-600">Summary</span>
        </h2>
        <div>
          <table className="w-[700px]">
            <thead>
              <tr className="">
                <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium mr-2">
                  Category
                </th>
                <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium">
                  Count
                </th>
                <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3 text-sm font-medium">
                  Details
                </th>
                <th className="bg-purple-900 text-white rounded-t-4xl px-4 py-3 text-sm font-medium">
                  Status/Comments
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f9eeff]">
                <td className="px-4 py-3 text-sm text-gray-900  text-center ">
                  Flight
                </td>
                <td className="px-4 py-3 text-sm text-purple-600  text-center">
                  4
                </td>
                <td className="px-4 py-3 text-sm text-purple-600  text-center">
                  All Flights Mentioned
                </td>
                <td className="px-4 py-3 text-sm text-gray-900  text-center">
                  Confirmed
                </td>
              </tr>
              <tr className="bg-[#f9eeff]">
                <td className="px-4 py-3 text-sm text-gray-900  text-center ">
                  Cab
                </td>
                <td className="px-4 py-3 text-sm text-purple-600  text-center">
                  1
                </td>
                <td className="px-4 py-3 text-sm text-purple-600  text-center">
                  SUV Vehicle
                </td>
                <td className="px-4 py-3 text-sm text-gray-900  text-center">
                  Confirmed
                </td>
              </tr>
              <tr className="bg-[#f9eeff]">
                <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center ">
                  Hotel
                </td>
                <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                  4
                </td>
                <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                  Hotel Vivanta, Maldive (incl., Taxes)
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center">
                  Included
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 space-y-1">
            <p className=" font-bold text-xs">
              Transfer Policy(Refundable Upon Claim)
            </p>
            <p className="text-gray-400 font-light text-xs">
              If any transfer is delayed beyond 15 minutes, customers may book
              an app-based or radio taxi and claim a refund for that specific
              leg.
            </p>
          </div>
        </div>
      </div>
      <PaymentPlan />
      <div className="mt-40 border-t border-gray-400">
        <Footer />
      </div>
    </div>
  );
};

export default Page3;
