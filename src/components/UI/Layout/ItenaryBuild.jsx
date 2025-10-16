import { useSelector } from "react-redux";
import NameCard from "../Features/NameCard";
import OverView from "../Features/OverView";
import SelectServices from "../Features/SelectServices";
import FlightCard from "../Features/FlightCard";
import HotelCard from "../Features/HotelCard";
import CabCard from "../Features/CabCard";
import DailyItineraryStep from "../Features/DailyItenaryStep";
import PaymentsStep from "../Features/PaymentsStep";
import ThankYouCard from "../Features/ThankYouCard";

const ItenaryBuild = () => {
  const toggle = useSelector((store) => store.user);

  return (
    <div>
      <div className="relative text-center">
        <h1 className="-mt-20 text-5xl font-bold text-gray-800 z-10">
          Build Your Itenary
        </h1>
        <h3 className="text-lg md:text-xl text-gray-600 font-medium m-4 leading-relaxed">
          Plan your dream trip effortlessly - add destinations, organize
          activities, and craft the perfect travel experience with ease.
        </h3>
      </div>

      {!toggle.toggleToOverview ? (
        <NameCard />
      ) : !toggle.toggleToSelect ? (
        <OverView />
      ) : !toggle.toggleToFlight ? (
        <SelectServices />
      ) : !toggle.toggleToHotel ? (
        <FlightCard />
      ) : !toggle.toggleToCab ? (
        <HotelCard />
      ) : !toggle.toggleToActivities ? (
        <CabCard />
      ) : !toggle.toggleToPayments ? (
        <DailyItineraryStep />
      ) : !toggle.toggleToThankYou ? (
        <PaymentsStep />
      ) : (
        <ThankYouCard />
      )}
    </div>
  );
};

export default ItenaryBuild;
