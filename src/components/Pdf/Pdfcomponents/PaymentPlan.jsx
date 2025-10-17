import React from "react";
import { useSelector } from "react-redux";
import end from "../../../assets/end.png";

const PaymentPlan = () => {
  const paymentDetails = useSelector((store) => store.payments);
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Payment <span className="text-purple-600">Plan</span>
      </h2>
      <div className="w-[700px] h-10 border mb-4 rounded-md grid grid-cols-[150px_1fr] overflow-hidden">
        <div className="bg-[#f9eeff] border-r border-purple-600 flex items-center justify-center font-semibold">
          Total Amount
        </div>

        <div className="flex items-center pl-28">
          <p className="font-bold">
            ₹ {paymentDetails.totalAmount}
            <span className="font-light text-gray-800">
              {" "}
              For 3 pax (inclusive of GST)
            </span>
          </p>
        </div>
      </div>
      {paymentDetails.installmentCount !== 0 && (
        <table className="w-[700px] mt-6">
          <thead>
            <tr className="">
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium mr-2">
                Category
              </th>
              <th className="bg-purple-900 text-white px-4 py-3 rounded-t-4xl text-sm font-medium">
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#f9eeff]">
              <td className="px-4 py-3 text-sm text-gray-900  text-center ">
                Installment 1
              </td>

              <td className="px-4 py-3 text-sm text-purple-600  text-center">
                {paymentDetails.dueDates[0]}
              </td>
            </tr>
            <tr className="bg-[#f9eeff]">
              <td className="px-4 py-3 text-sm text-gray-900 rounded-b-2xl text-center ">
                Installment 2
              </td>

              <td className="px-4 py-3 text-sm text-purple-600 rounded-b-2xl text-center">
                {paymentDetails.dueDates[1]}
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <div className="w-[700px] mt-12 border-t border-purple-400 flex justify-center">
        <img alt="endcard" src={end} className="w-90 mt-4" />
      </div>
    </div>
  );
};

export default PaymentPlan;
