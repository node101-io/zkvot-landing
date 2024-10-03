import React from "react";
import AnimatedSquares from "./AnimatedSquares";

const ZKProofSection: React.FC = () => {
  return (
    <div className="h-full sm:h-screen w-full py-24">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="max-w-[1220px] text-white font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 sm:mt-6 lg:mt-8 ">
            Efficient ZK Proof generation
          </h1>
          <h1 className="text-[#AFAFAF] font-normal italic text-xs sm:text-md text-nowrap md:text-lg mt-2">
            100% anonymity
          </h1>
        </div>
        <h1 className="pt-5 text-[#AFAFAF] text-start font-sans text-xs sm:text-md  md:text-lg  italic font-normal leading-[24px] tracking-[-0.2px] sm:max-w-[512px] max-w-xs">
          All operations are processed on your device. You retain full control,
          with no need to rely on central authorities, ensuring both security
          and privacy.
        </h1>
      </div>
      <div className="sm:pt-44">
        <AnimatedSquares />
      </div>
    </div>
  );
};

export default ZKProofSection;
