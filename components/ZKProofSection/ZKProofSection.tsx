import React from "react";
import AnimatedSquares from "./AnimatedSquares";

const ZKProofSection: React.FC = () => {
  return (
    <div className="h-full sm:h-screen w-full py-24">
      <div className="max-w-[1220px]">
        <h1 className="text-white font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 sm:mt-6 lg:mt-8 ">
          Efficient and constant sizes ZK-proof generation
        </h1>
        <h1 className="text-[#AFAFAF] font-normal italic text-md sm:text-lg  mt-2">
          100% anonymity and verifiability
        </h1>
      </div>
      <div className="sm:pt-44">
        <AnimatedSquares />
      </div>
    </div>
  );
};

export default ZKProofSection;
