import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fadeUp } from "../../../utils/constants";
import {
  setInstallmentCount,
  setDueDate,
  setTotalAmount,
} from "../../../utils/paymentsSlice";
import { IndianRupee, Calendar } from "lucide-react";
import { toggleToPayments, toggleToThankYou } from "../../../utils/userSlice";
import { useEffect } from "react";

const PaymentsStep = () => {
  const dispatch = useDispatch();
  const flightPrice = useSelector((store) => store.flight.estimatedPrice);
  const hotelPrice = useSelector((store) => store.hotel.estimatedPrice);
  const cabPrice = useSelector((store) => store.cab.estimatedPrice);
  useEffect(() => {
    const totalPrice = flightPrice + hotelPrice + cabPrice;
    dispatch(setTotalAmount(totalPrice));
  }, [flightPrice, hotelPrice, cabPrice, dispatch]);

  const { totalAmount, installmentCount, dueDates } = useSelector(
    (state) => state.payments
  );

  const installments = parseInt(installmentCount);
  const installmentAmount = Math.ceil(totalAmount / installments);

  const handleDueDateChange = (index, value) => {
    dispatch(setDueDate({ index, date: value }));
  };
  const handleToggleToActivities = () => {
    dispatch(toggleToPayments());
  };
  const handleToggleToThankYou = () => {
    dispatch(toggleToThankYou());
  };

  return (
    <motion.div
      {...fadeUp}
      className="bg-white m-20 mx-50 border border-gray-200 rounded-2xl shadow-2xl pl-6 pr-14 pt-10 pb-12"
    >
      <h1 className="pl-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-[#4ba1eb] bg-clip-text text-transparent">
        Payment Details
      </h1>

      <div className="mt-8 w-250 bg-[#4ba1eb]/20 h-auto ml-10 px-6 py-4 border border-gray-300 rounded-xl text-gray-800 font-semibold flex justify-between items-center">
        <p>Total Trip Cost</p>
        <div className="flex items-center gap-1 text-xl font-bold text-[#4ba1eb]">
          <IndianRupee className="h-5 w-5" />
          {totalAmount.toLocaleString("en-IN")}
        </div>
      </div>

      <div className="mt-10 ml-10 space-y-4">
        <p className="font-semibold text-gray-800 text-lg">
          Choose Number of Installments (Max: 3)
        </p>

        <div className="space-y-3">
          {[1, 2, 3].map((num) => (
            <label
              key={num}
              className={`flex justify-between items-center border-2 rounded-xl px-6 py-4 cursor-pointer transition-all ${
                installmentCount === num
                  ? "border-[#4ba1eb] bg-[#4ba1eb]/10"
                  : "border-gray-300 hover:border-[#4ba1eb]/50"
              }`}
            >
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">
                  {num === 1 ? "Full Payment" : `${num} Installments`}
                </span>
                <span className="text-sm text-gray-500">
                  {num === 1
                    ? "Pay entire amount upfront"
                    : `Split into ${num} payments`}
                </span>
              </div>
              <div className="flex items-center gap-1 font-semibold text-gray-700">
                <input
                  type="radio"
                  name="installment"
                  checked={installmentCount === num}
                  onChange={() => dispatch(setInstallmentCount(num))}
                  className="accent-[#4ba1eb] h-5 w-5"
                />
                <div className="flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" />
                  {Math.ceil(totalAmount / num).toLocaleString("en-IN")}
                  {num > 1 && <span className="ml-1">each</span>}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {installments > 1 && (
        <div className="mt-10 border border-[#4ba1eb]/20 bg-[#4ba1eb]/5 rounded-2xl p-6 ml-10 mr-10">
          <h2 className="text-lg font-semibold text-[#4ba1eb] mb-6">
            Installment Schedule
          </h2>
          <div className="space-y-6">
            {Array.from({ length: installments }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200"
              >
                <div>
                  <label className="flex items-center gap-2 font-semibold text-gray-700">
                    <IndianRupee className="h-4 w-4 text-[#936fe0]" />
                    Installment {index + 1} Amount
                  </label>
                  <div className="mt-2 p-3 bg-gray-50 rounded-xl border border-gray-300 font-semibold">
                    ₹ {installmentAmount.toLocaleString("en-IN")}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor={`dueDate-${index}`}
                    className="flex items-center gap-2 font-semibold text-gray-700"
                  >
                    <Calendar className="h-4 w-4 text-[#4ba1eb]" />
                    Due Date
                  </label>
                  <input
                    id={`dueDate-${index}`}
                    type="date"
                    value={dueDates[index] || ""}
                    onChange={(e) => handleDueDateChange(index, e.target.value)}
                    className="mt-2 w-full h-10 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 focus:ring-1 focus:ring-[#4ba1eb] focus:outline-none transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="pt-12 pl-10 pr-15 mb-12 flex justify-between items-center">
        <button
          className="px-4 py-2 border border-[#936fe0] text-[#4ba1eb] font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToActivities}
        >
          Previous Page
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-[#4ba1eb] to-[#936fe0] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={handleToggleToThankYou}
        >
          Next Page
        </button>
      </div>
    </motion.div>
  );
};

export default PaymentsStep;
