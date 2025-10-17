import React from "react";
import { useSelector } from "react-redux";
import HotelSummary from "../Pdfcomponents/HotelSummary";
import CabSummary from "../Pdfcomponents/CabSummary";

const Page2 = () => {
  const flightDetails = useSelector((store) => store.flight);
  return (
    <div className="w-[794px] h-[1123px] px-[45px] py-[30px] border border-black bg-white mx-auto my-8 flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Flight <span className="text-purple-600">Summary</span>
        </h2>
        <div className="w-[700px] h-10 border mb-4 rounded-md grid grid-cols-[150px_1fr] overflow-hidden">
          <div className="bg-purple-200 flex items-center justify-center font-semibold">
            {flightDetails.departureDate}
          </div>

          <div className="flex items-center pl-6">
            <p className="font-bold">
              Flight (AXA-106){" "}
              <span className="font-light text-gray-800">
                From {flightDetails.from} To {flightDetails.to}
              </span>
            </p>
          </div>
        </div>

        <div className="w-[700px] h-10 border mb-4 rounded-md grid grid-cols-[150px_1fr] overflow-hidden">
          <div className="bg-purple-200 flex items-center justify-center font-semibold">
            {flightDetails.returnDate}
          </div>

          <div className="flex items-center pl-6">
            <p className="font-bold">
              Flight (AXA-107){" "}
              <span className="font-light text-gray-800">
                From {flightDetails.to} To {flightDetails.from}
              </span>
            </p>
          </div>
        </div>
        <p className="text-gray-400 font-light text-sm">
          Note: All flights include meals, seat choice (excluding XL), and
          20kg/25Kg checked baggage.
        </p>
      </div>
      <HotelSummary />
      <CabSummary />
    </div>
  );
};

export default Page2;
