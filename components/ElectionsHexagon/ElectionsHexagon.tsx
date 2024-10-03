import HexagonAnimation from "./HexagonAnimation";
import React from "react";

const ElectionsHexagon: React.FC = () => {
  return (
    <div className="h-full  w-full py-24">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="max-w-[1220px] text-white font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 sm:mt-6 lg:mt-8 ">
            Scalable Future of Secure Voting
          </h1>
          <h1 className="text-[#AFAFAF] font-normal italic text-xs sm:text-md  md:text-lg mt-2 text-nowrap">
            100% adaptive
          </h1>
        </div>
        <h1 className="pt-5 text-[#AFAFAF] text-start font-sans text-xs sm:text-md  md:text-lg  italic font-normal leading-[24px] tracking-[-0.2px] sm:max-w-[512px] max-w-xs">
          From small communities to nationwide elections, zkVot is equipped to
          handle increasing numbers of voters without any drop in performance.
          The system scales effortlessly, adapting to any level of demand.
        </h1>
      </div>
      <div className="pt-12">
        <HexagonAnimation />
      </div>
    </div>
  );
};

export default ElectionsHexagon;
