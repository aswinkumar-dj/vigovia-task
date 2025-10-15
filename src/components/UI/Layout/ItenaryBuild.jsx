import { useSelector } from "react-redux";
import NameCard from "../Features/NameCard";
import OverView from "../Features/OverView";

const ItenaryBuild = () => {
  const toggleOverview = useSelector((store) => store.user.toggleToOverview);
  console.log(toggleOverview);
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

      {!toggleOverview ? <NameCard /> : <OverView />}
    </div>
  );
};

export default ItenaryBuild;
