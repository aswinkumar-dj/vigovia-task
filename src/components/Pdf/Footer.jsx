import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-white  py-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="space-y-2">
          <p className="font-semibold text-gray-900 text-sm">
            Vigovia Tech Pvt. Ltd
          </p>
          <p className="text-gray-600 text-xs leading-relaxed">
            Registered Office: Hd-109 Cinnabar Hills,
            <br />
            Links Business Park, Karnataka, India.
          </p>
        </div>

        <div className="space-y-2 text-xs">
          <p className="text-gray-900">
            <span className="font-semibold">Phone:</span>{" "}
            <span className="text-gray-700">+91-9504061112</span>
          </p>
          <p className="text-gray-900">
            <span className="font-semibold">Email ID:</span>{" "}
            <span className="text-gray-700">Utkarsh@Vigovia.Com</span>
          </p>
          <p className="text-gray-900">
            <span className="font-semibold">CIN:</span>{" "}
            <span className="text-gray-700">U79110KA2024PTC191890</span>
          </p>
        </div>

        <div className="flex justify-end items-start">
          <img src={logo} alt="Vigovia Logo" className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
