import { useSelector } from "react-redux";
import logo from "../../../assets/logo.png";
import {
  CarTaxiFront,
  HeartPulse,
  Hotel,
  IdCardIcon,
  PlaneIcon,
} from "lucide-react";
import DayActivities from "../Pdfcomponents/DayActivities";
import Footer from "../../Pdf/Footer";

const Page1 = () => {
  const userName = useSelector((store) => store.user.adduser);
  const tripDetails = useSelector((store) => store.trip);
  return (
    <div className="pdf-page w-[794px] h-[1123px] px-[45px] py-[30px]  bg-white mx-auto my-8 flex flex-col">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="logo" className="w-45 " />
        <div className="w-[700px] h-[170px] flex flex-col items-center bg-gradient-to-r from-[#4ba1eB] to-[#936fe0] rounded-2xl">
          <span className="text-white font-semibold text-2xl mt-4 mb-2">
            Hi, {userName}!
          </span>
          <span className="text-white font-bold text-2xl ">
            {tripDetails.tripTitle} Itinerary
          </span>
          <p className="text-white font-semibold text-xl mt-1">
            {tripDetails.duration} Days {tripDetails.duration - 1} Nights
          </p>
          <div className="flex space-x-4 mt-2">
            <PlaneIcon className="text-white w-5" />
            <Hotel className="text-white w-5" />
            <HeartPulse className="text-white w-5" />
            <CarTaxiFront className="text-white w-5" />
            <IdCardIcon className="text-white w-5" />
          </div>
        </div>
        <div className="w-[700px] h-16 flex justify-between my-4 px-6 py-2 border border-[#4ba1eB] rounded-2xl">
          <div className="space-y-1">
            <p className="text-sm font-bold">Departure From:</p>
            <p className="text-sm">{tripDetails.departureCity}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">Departure :</p>
            <p className="text-sm">{tripDetails.startDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">Arrival:</p>
            <p className="text-sm">{tripDetails.endDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">Destination:</p>
            <p className="text-sm">{tripDetails.arrivalCity}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold">No. Of Travellers:</p>
            <p className="text-sm">{tripDetails.travelers}</p>
          </div>
        </div>
      </div>
      <DayActivities />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Page1;
