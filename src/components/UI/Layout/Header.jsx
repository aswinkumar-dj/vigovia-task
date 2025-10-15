import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className=" fixed flex justify-between  bg-white/50 z-10  w-full">
      <div className="py-4 px-10">
        <img src={logo} alt="logo" className="w-28 " />
      </div>
      <div className="flex items-center ">
        <nav className="space-x-12">
          <button className="text-lg font-medium text-gray-100 hover:text-[#936fe0]">
            Home
          </button>
          <button className="text-lg font-medium  text-gray-100 hover:text-[#936fe0]">
            Itenary Builder
          </button>
          <button className="text-lg font-medium  text-gray-100 hover:text-[#936fe0]">
            Contact
          </button>
        </nav>
      </div>
      <div className="flex items-center">
        <button className="  bg-gradient-to-br from-[#4ba1eb] to-[#936fe0] text-white my-4 mx-10 py-2 px-4 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
