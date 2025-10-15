import React, { useRef, useState } from "react";

const Footer = () => {
  const [nextPage, setNextPage] = useState();

  return (
    <div className=" bg-gradient-to-b to-[#936fe0] h-30 ">
      <h1 className="text-2xl text-white font-bold pt-14 px-10">
        Vigovia Front End Developer Task
      </h1>
    </div>
  );
};

export default Footer;
